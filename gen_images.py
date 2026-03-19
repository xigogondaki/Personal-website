"""Generate atmospheric placeholder images matching The Minories aesthetic."""
import os
import math
import random
from PIL import Image, ImageDraw, ImageFilter

IMG_DIR = os.path.join(os.path.dirname(__file__), '_img')
os.makedirs(IMG_DIR, exist_ok=True)

W, H = 1920, 1080

def noise(x, y, scale=0.008, seed=0):
    """Simple value noise approximation."""
    random.seed(int(x * scale * 1000 + y * scale * 997 + seed * 12345))
    return random.random()

def make_gradient(color_a, color_b, color_c=None, direction='diagonal', size=(W, H)):
    """Create a smooth gradient image."""
    w, h = size
    img = Image.new('RGB', (w, h))
    pix = img.load()
    for y in range(h):
        for x in range(w):
            if direction == 'diagonal':
                t = (x / w * 0.6 + y / h * 0.4)
            elif direction == 'radial':
                cx, cy = w * 0.4, h * 0.55
                dist = math.sqrt((x - cx)**2 + (y - cy)**2)
                t = min(1.0, dist / (w * 0.65))
            elif direction == 'vertical':
                t = y / h
            else:
                t = x / w

            if color_c and t > 0.5:
                # Blend b→c in upper half
                tt = (t - 0.5) * 2
                ca, cb = color_b, color_c
                r = int(ca[0] + (cb[0] - ca[0]) * tt)
                g = int(ca[1] + (cb[1] - ca[1]) * tt)
                b = int(ca[2] + (cb[2] - ca[2]) * tt)
            else:
                t2 = t * 2 if color_c else t
                t2 = min(1.0, t2)
                r = int(color_a[0] + (color_b[0] - color_a[0]) * t2)
                g = int(color_a[1] + (color_b[1] - color_a[1]) * t2)
                b_c = int(color_a[2] + (color_b[2] - color_a[2]) * t2)
                r, g, b = r, g, b_c
            pix[x, y] = (
                max(0, min(255, r)),
                max(0, min(255, g)),
                max(0, min(255, b)),
            )
    return img

def add_grain(img, strength=18, seed=42):
    """Add subtle film grain."""
    import random as rnd
    rnd.seed(seed)
    pix = img.load()
    w, h = img.size
    for y in range(0, h, 2):
        for x in range(0, w, 2):
            g = rnd.randint(-strength, strength)
            r, gr, b = pix[x, y]
            pix[x, y] = (
                max(0, min(255, r + g)),
                max(0, min(255, gr + g)),
                max(0, min(255, b + g)),
            )
    return img

def add_vignette(img, strength=0.55):
    """Add a dark vignette around the edges."""
    w, h = img.size
    vignette = Image.new('L', (w, h), 0)
    draw = ImageDraw.Draw(vignette)
    cx, cy = w // 2, h // 2
    for i in range(min(cx, cy), 0, -1):
        alpha = int(255 * (1 - i / min(cx, cy)) * strength)
        draw.ellipse(
            [cx - i, cy - i * h // w, cx + i, cy + i * h // w],
            fill=alpha
        )
    vignette = vignette.filter(ImageFilter.GaussianBlur(radius=min(w, h) // 4))
    # Overlay vignette as dark layer
    dark = Image.new('RGB', (w, h), (0, 0, 0))
    result = Image.composite(dark, img, vignette)
    return result

def make_atmospheric(base_colors, direction='diagonal', grain=20, vignette=0.5, seed=0, size=(W, H)):
    img = make_gradient(*base_colors, direction=direction, size=size)
    img = img.filter(ImageFilter.GaussianBlur(radius=2))
    img = add_grain(img, strength=grain, seed=seed)
    img = add_vignette(img, strength=vignette)
    return img

# ─── COVER ─────────────────────────────────────────────────────────────────
# Deep charcoal with warm undertone — map/travel mood
cover = make_atmospheric(
    [(28, 26, 24), (45, 38, 30), (18, 16, 14)],
    direction='radial', grain=25, vignette=0.65, seed=1
)
cover.save(os.path.join(IMG_DIR, 'cover.jpg'), quality=92)
print("✓ cover.jpg")

# ─── LISBON ────────────────────────────────────────────────────────────────
# Warm terracotta, golden afternoon, Portuguese tiles
lisbon = make_atmospheric(
    [(120, 65, 30), (85, 45, 20), (155, 95, 50)],
    direction='diagonal', grain=22, vignette=0.55, seed=2
)
lisbon.save(os.path.join(IMG_DIR, 'lisbon.jpg'), quality=92)
print("✓ lisbon.jpg")

# ─── ISTANBUL ──────────────────────────────────────────────────────────────
# Deep Bosphorus blue, twilight, minarets silhouette mood
istanbul = make_atmospheric(
    [(18, 45, 72), (35, 65, 95), (12, 30, 55)],
    direction='radial', grain=20, vignette=0.6, seed=3
)
istanbul.save(os.path.join(IMG_DIR, 'istanbul.jpg'), quality=92)
print("✓ istanbul.jpg")

# ─── BUDAPEST ──────────────────────────────────────────────────────────────
# Grand purple-charcoal, Parliament at night, Danube reflection
budapest = make_atmospheric(
    [(35, 25, 48), (55, 40, 75), (20, 15, 30)],
    direction='vertical', grain=22, vignette=0.6, seed=4
)
budapest.save(os.path.join(IMG_DIR, 'budapest.jpg'), quality=92)
print("✓ budapest.jpg")

# ─── TBILISI ───────────────────────────────────────────────────────────────
# Earthy Georgian green-brown, ancient stone, harvest warmth
tbilisi = make_atmospheric(
    [(35, 55, 38), (55, 80, 52), (22, 38, 25)],
    direction='diagonal', grain=22, vignette=0.55, seed=5
)
tbilisi.save(os.path.join(IMG_DIR, 'tbilisi.jpg'), quality=92)
print("✓ tbilisi.jpg")

print("\nAll images generated.")
