// Decorative data fragments share the perspective grid's clock and travel.
(() => {
  const words = [
    'ARNAV_SHUKLA', 'VIT_BHOPAL', 'CSE', 'FULL_STACK', 'APPLIED_AI', 'SYSTEMS',
    'RURAL_HEALTH', 'ECO_LOOP', 'TALENTMATCH', 'CAMPUSCART', 'OFFLINE_FIRST',
    'VOICE_UI', '13_LANGUAGES', 'TELEHEALTH', 'PWA', 'NEXT.JS', 'REACT',
    'TYPESCRIPT', 'JAVASCRIPT', 'PYTHON', 'C++', 'FASTAPI', 'FLASK', 'NODE.JS',
    'ASP.NET_CORE', 'REST_API', 'WEBSOCKETS', 'FASTMCP', 'OLLAMA', 'QWEN2.5',
    'HVAC_CONTROL', 'FIVE_ZONES', 'SIMULATION', 'FALLBACK', 'POSTGRESQL',
    'POSTGIS', 'SUPABASE', 'ROW_SECURITY', 'INDEXEDDB', 'SERWIST', 'SQLALCHEMY',
    'SQLITE', 'REDIS', 'FHIR_R4', 'DOCKER', 'VITEST', 'WEBRTC', 'EMBEDDINGS',
    'BM25', 'XGBOOST', 'ATS', 'BCRYPT', 'TAILWIND', 'MCP', 'CI', 'GIT'
  ];
  const glyphs = '01ABCDEF#_/+<>';
  const random = (min, max) => min + Math.random() * (max - min);
  const smooth = (min, max, value) => {
    const t = Math.max(0, Math.min(1, (value - min) / (max - min)));
    return t * t * (3 - 2 * t);
  };
  const noise = value => {
    const n = Math.sin(value * 127.1) * 43758.5453;
    return n - Math.floor(n);
  };

  window.createGridTelemetry = (canvas, { cameraHeight, horizon, focalLength, cellSize }) => {
    const ctx = canvas?.getContext('2d');
    if (!ctx) return null;
    let width = 0;
    let height = 0;
    let dark = false;
    let nodes = [];
    let palette;
    let lastTime = 0;
    let lastTravel = 0;
    let wordBag = [];
    let depthLines = [];

    function nextWord() {
      // Every profile/project term appears before the vocabulary repeats.
      if (!wordBag.length) {
        wordBag = [...words];
        for (let i = wordBag.length - 1; i > 0; i--) {
          const j = Math.floor(random(0, i + 1));
          [wordBag[i], wordBag[j]] = [wordBag[j], wordBag[i]];
        }
      }
      return wordBag.pop();
    }

    function setTheme(isDark) {
      dark = isDark;
      const styles = getComputedStyle(document.documentElement);
      const color = name => styles.getPropertyValue(name).trim();
      palette = {
        text: dark ? color('--grid-white') : '#334155',
        colors: [color('--grid-white'), color('--grid-crimson'), color('--grid-gold')],
        wire: dark ? color('--grid-white') : '#64748B',
        shadow: dark ? '#020617' : '#64748B'
      };
    }

    function resetNode(node, time, travel, stagger = false) {
      node.seed = random(1, 9999);
      node.life = random(7, 12);
      node.born = time - (stagger ? random(0.8, node.life * 0.7) : 0);
      node.glitchEvery = random(2.8, 4.6);
      node.glitchPhase = random(0, node.glitchEvery);
      node.word = nextWord();
      node.kind = Math.floor(random(0, 4));
      node.color = Math.floor(random(0, 3));
      node.depth = random(10, 46);
      node.z = travel + node.depth;
      node.right = random(0, 1) > 0.5;
      const side = node.right ? random(0.76, 0.97) : random(width > 900 ? 0.08 : 0.055, 0.23);
      node.x = (side - 0.5) * width / height * node.depth / focalLength;
      node.screenX = side;
      node.screenY = random(0.10, 0.45);
      node.size = random(11, 14);
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = width < 700 ? 14 : width < 1100 ? 22 : 30;
      nodes = Array.from({ length: count }, (_, index) => {
        const node = { floor: index < Math.ceil(count * 0.7) };
        resetNode(node, lastTime, lastTravel, true);
        return node;
      });
      depthLines = Array.from({ length: width < 700 ? 18 : width < 1100 ? 28 : 42 }, (_, index) => {
        const seed = index * 17.13 + 6.8;
        const depth = 8 + noise(seed) * 34;
        const side = 0.02 + noise(seed + 3) * 0.96;
        return {
          seed,
          x: Math.round((side - 0.5) * width / height * depth / focalLength / cellSize) * cellSize,
          z: Math.round((lastTravel + depth) / cellSize) * cellSize,
          length: 0.65 + noise(seed + 7) * 3.4,
          color: index % 5 < 3 ? 0 : index % 5 - 2
        };
      });
    }

    function project(x, elevation, depth) {
      return {
        x: width / 2 + x * height * focalLength / depth,
        y: height * horizon + (cameraHeight - elevation) * height * focalLength / depth
      };
    }

    function drawDepthLines(time, travel, reduced) {
      ctx.save();
      ctx.lineCap = 'round';
      for (const line of depthLines) {
        let depth = line.z - travel;
        // Recycle only through fully faded ranges, in either scroll direction.
        const cycle = Math.ceil(42 / cellSize) * cellSize;
        line.z -= Math.floor((depth - 5) / cycle) * cycle;
        depth = line.z - travel;
        const fade = smooth(6, 10, depth) * (1 - smooth(34, 46, depth));
        const foot = project(line.x, 0, depth);
        const tip = project(line.x, line.length, depth);
        const edge = smooth(0, 25, foot.x) * (1 - smooth(width - 25, width, foot.x));
        if (fade * edge < 0.01 || tip.y > height || foot.y < 0) continue;
        const horizontal = foot.x / width;
        const underCopy = width < 900 ? horizontal > 0.12 && horizontal < 0.88
          : horizontal > 0.18 && horizontal < 0.55;
        const phase = (time + line.seed) % 4.4;
        const flicker = !reduced && phase < 0.18 ? 0.64 : 1;
        ctx.globalAlpha = fade * edge * flicker * (underCopy ? 0.11 : dark ? 0.43 : 0.34);
        const color = palette.colors[line.color];
        const gradient = ctx.createLinearGradient(foot.x, foot.y, tip.x, tip.y);
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.22, color + 'B3');
        gradient.addColorStop(0.72, color + '28');
        gradient.addColorStop(1, color + '00');
        // A fine neutral backing keeps white depth rays legible in light mode.
        const backing = ctx.createLinearGradient(foot.x, foot.y, tip.x, tip.y);
        backing.addColorStop(0, palette.wire + (dark ? '38' : '70'));
        backing.addColorStop(0.65, palette.wire + '14');
        backing.addColorStop(1, palette.wire + '00');
        ctx.lineWidth = 1.6;
        ctx.strokeStyle = backing;
        ctx.beginPath(); ctx.moveTo(foot.x, foot.y); ctx.lineTo(tip.x, tip.y); ctx.stroke();
        ctx.lineWidth = 0.8;
        ctx.strokeStyle = gradient;
        ctx.beginPath(); ctx.moveTo(foot.x, foot.y); ctx.lineTo(tip.x, tip.y); ctx.stroke();
        ctx.fillStyle = color;
        ctx.fillRect(foot.x - 1, foot.y - 1, 2, 2);
      }
      ctx.restore();
    }

    function scrambledText(node, age, glitching) {
      const reveal = Math.floor(Math.min(1, age / 0.55) * node.word.length);
      const tick = Math.floor(age * 12);
      return Array.from(node.word, (letter, index) => {
        if (index < reveal && !glitching) return letter;
        if (glitching && noise(node.seed + tick + index * 3) > 0.44) return letter;
        return glyphs[Math.floor(noise(node.seed + tick * 7 + index) * glyphs.length)];
      }).join('');
    }

    function drawCross(x, y, size) {
      ctx.beginPath();
      ctx.moveTo(x - size, y); ctx.lineTo(x + size, y);
      ctx.moveTo(x, y - size); ctx.lineTo(x, y + size);
      ctx.stroke();
      ctx.fillRect(x - 1, y - 1, 2, 2);
    }

    function drawFragment(node, age, glitching, reduced) {
      const text = reduced ? node.word : scrambledText(node, age, glitching);
      const size = node.size;
      const offset = glitching ? (noise(Math.floor(age * 12) + node.seed) - 0.5) * 5 : 0;
      ctx.translate(offset, 0);
      ctx.font = `500 ${size}px "IBM Plex Mono", monospace`;
      ctx.textBaseline = 'alphabetic';
      ctx.lineWidth = 0.7;
      const accent = palette.colors[node.color];
      ctx.strokeStyle = accent;
      ctx.fillStyle = node.color === 0 ? palette.text : accent;
      ctx.shadowColor = palette.shadow;
      ctx.shadowBlur = dark ? 8 : 3;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = dark ? 3 : 2;

      if (node.kind === 0 || node.kind === 3) {
        drawCross(-10, -size * 0.35, 3);
        ctx.fillText(text, 0, 0);
        const textWidth = ctx.measureText(text).width;
        ctx.beginPath();
        ctx.moveTo(0, 5); ctx.lineTo(Math.min(textWidth, 60), 5);
        ctx.moveTo(textWidth + 5, -size); ctx.lineTo(textWidth + 9, -size);
        ctx.lineTo(textWidth + 9, 1);
        ctx.stroke();
        ctx.font = '7px "IBM Plex Mono", monospace';
        ctx.globalAlpha *= 0.72;
        ctx.fillText(`0x${Math.floor(node.seed).toString(16).toUpperCase()} / ${node.floor ? 'GRID' : 'LINK'}`, 0, 16);
      } else if (node.kind === 1) {
        // Small striped packets and binary fragments echo the reference HUD.
        ctx.save();
        ctx.beginPath(); ctx.rect(0, -size, 34, 12); ctx.clip();
        for (let i = -12; i < 45; i += 5) {
          ctx.beginPath(); ctx.moveTo(i, 2); ctx.lineTo(i + 12, -size); ctx.stroke();
        }
        ctx.restore();
        ctx.font = `500 ${size * 0.82}px "IBM Plex Mono", monospace`;
        ctx.fillText(text, 40, -1);
        ctx.fillRect(0, 6, 3, 2); ctx.fillRect(7, 6, 14, 1);
      } else {
        drawCross(0, -4, 5);
        ctx.strokeRect(-10, -14, 20, 20);
        ctx.font = `500 ${size * 0.82}px "IBM Plex Mono", monospace`;
        ctx.fillText(text, 16, 0);
        ctx.fillRect(16, 5, 18, 1);
      }

      if (glitching) {
        // A narrow echo shifts locally, matching the floor's signal glitches.
        ctx.save();
        ctx.beginPath(); ctx.rect(-15, -size * 0.7, 140, 3); ctx.clip();
        ctx.translate(4, -1);
        ctx.fillStyle = palette.colors[(node.color + 1) % 3];
        ctx.shadowColor = accent;
        ctx.shadowBlur = dark ? 8 : 3;
        ctx.globalAlpha *= 0.65;
        ctx.font = `500 ${size}px "IBM Plex Mono", monospace`;
        ctx.fillText(text, 0, 0);
        ctx.restore();
      }
    }

    function render(time, travel, reduced = false) {
      lastTime = time;
      lastTravel = travel;
      ctx.clearRect(0, 0, width, height);
      drawDepthLines(time, travel, reduced);
      for (const node of nodes) {
        let age = time - node.born;
        let depth = node.z - travel;
        if (!reduced && (age > node.life || (node.floor && depth < 7))) {
          resetNode(node, time, travel);
          age = 0;
          depth = node.depth;
        }
        const floorPoint = node.floor ? project(node.x, 0, depth) : null;
        const anchorX = node.floor ? floorPoint.x
          : node.screenX * width + (reduced ? 0 : Math.sin(time * 0.18 + node.seed) * 7);
        const y = node.floor ? floorPoint.y
          : node.screenY * height + (reduced ? 0 : Math.sin(time * 0.13 + node.seed) * 5);
        const scale = node.floor ? Math.max(0.62, Math.min(1.25, 20 * focalLength / depth)) : 0.88;
        const labelWidth = (node.word.length * node.size * 0.64 + 48) * scale;
        const x = node.right ? anchorX - labelWidth : anchorX;
        const edgeFade = smooth(width > 900 ? 78 : 0, width > 900 ? 108 : 18, x)
          * (1 - smooth(width - 18, width + 8, x + labelWidth))
          * (1 - smooth(height - 65, height, y));
        const lifeFade = reduced ? 0.65 : smooth(0, 0.8, age) * (1 - smooth(node.life - 1.8, node.life, age));
        const distanceFade = node.floor ? 1 - smooth(32, 62, depth) : 0.8;
        // Keep decorative fragments quieter behind the main text column.
        const underCopy = width < 900
          ? x + labelWidth > width * 0.12 && x < width * 0.88
          : x + labelWidth > width * 0.18 && x < width * 0.55 && y > height * 0.18;
        const opacity = edgeFade * lifeFade * distanceFade * (underCopy ? 0.12 : (dark ? 0.62 : 0.55));
        if (opacity < 0.008 || y > height + 25 || x < -120 || x > width + 40) continue;
        const phase = (age + node.glitchPhase) % node.glitchEvery;
        const glitching = !reduced && age > 0.65 && phase < 0.28;
        const flicker = glitching ? 0.58 + noise(Math.floor(age * 9) + node.seed) * 0.32 : 1;
        ctx.save();
        ctx.globalAlpha = opacity * flicker;
        ctx.translate(x, y);
        ctx.scale(scale, scale);
        drawFragment(node, age, glitching, reduced);
        ctx.restore();
      }
    }

    setTheme(document.documentElement.getAttribute('data-theme') === 'dark');
    resize();
    return { render, resize, setTheme };
  };
})();
