/* =========================================================
   ArchiveTune for Windows — frontend app
   ========================================================= */
"use strict";

/* ---------------- icons ---------------- */
const ICONS = {
  home: '<span class="msym">home</span>',
  search: '<span class="msym">search</span>',
  heart: '<span class="msym fill">favorite</span>',
  "heart-out": '<span class="msym">favorite</span>',
  play: '<span class="msym fill">play_arrow</span>',
  pause: '<span class="msym fill">pause</span>',
  next: '<span class="msym fill">skip_next</span>',
  prev: '<span class="msym fill">skip_previous</span>',
  shuffle: '<span class="msym">shuffle</span>',
  repeat: '<span class="msym">repeat</span>',
  "repeat-1": '<span class="msym">repeat_one</span>',
  queue: '<span class="msym">queue_music</span>',
  lyrics: '<span class="msym">lyrics</span>',
  volume: '<span class="msym">volume_up</span>',
  "vol-mute": '<span class="msym">volume_off</span>',
  folder: '<span class="msym">folder</span>',
  list: '<span class="msym">playlist_play</span>',
  gear: '<span class="msym">settings</span>',
  stats: '<span class="msym">bar_chart</span>',
  maximize: '<span class="msym">open_in_full</span>',
  x: '<span class="msym">close</span>',
  moon: '<span class="msym">dark_mode</span>',
  sun: '<span class="msym">light_mode</span>',
  eq: '<span class="msym">equalizer</span>',
  down: '<span class="msym">expand_more</span>',
  plus: '<span class="msym">add</span>',
  trash: '<span class="msym">delete</span>',
  check: '<span class="msym">check</span>',
  music: '<span class="msym">music_note</span>',
  "play-list": '<span class="msym">playlist_add</span>',
  disc: '<span class="msym">album</span>',
  drive: '<span class="msym">hdd</span>',
  clock: '<span class="msym">schedule</span>',
  info: '<span class="msym">info</span>',
  history: '<span class="msym">history</span>',
  calendar_month: '<span class="msym">calendar_month</span>',
  settings: '<span class="msym">settings</span>',
  back: '<span class="msym">arrow_back</span>',
  tune: '<span class="msym">tune</span>',
  apps: '<span class="msym">apps</span>',
  smart: '<span class="msym">smart_display</span>',
  mic: '<span class="msym">mic</span>',
  more: '<span class="msym">more_vert</span>',
  trending_up: '<span class="msym">trending_up</span>',
  self_improvement: '<span class="msym">self_improvement</span>',
  bolt: '<span class="msym">bolt</span>',
  directions_bus: '<span class="msym">directions_bus</span>',
  sentiment_satisfied: '<span class="msym">sentiment_satisfied</span>',
  water_drop: '<span class="msym">water_drop</span>',
  share: '<span class="msym">share</span>',
};

/* ---------------- i18n (id / en / jp) ---------------- */
const T = {
  "nav.home": { id: "Beranda", en: "Home", jp: "ホーム" },
  "nav.search": { id: "Cari", en: "Search", jp: "検索" },
  "nav.library": { id: "Pustaka", en: "Library", jp: "ライブラリ" },
  "nav.liked": { id: "Lagu Disukai", en: "Liked Songs", jp: "高評価の曲" },
  "nav.bliked": { id: "Pustaka", en: "Liked", jp: "高評価" },
  "nav.playlists": { id: "Playlist", en: "Playlists", jp: "プレイリスト" },
  "nav.local": { id: "File Lokal", en: "Local Files", jp: "ローカルファイル" },
  "nav.more": { id: "Lainnya", en: "More", jp: "その他" },
  "nav.calendar": { id: "Kalender", en: "Calendar", jp: "カレンダー" },
  "nav.stats": { id: "Statistik", en: "Statistics", jp: "統計" },
  "nav.settings": { id: "Pengaturan", en: "Settings", jp: "設定" },
  "page.search": { id: "Cari", en: "Search", jp: "検索" },
  "page.settings": { id: "Pengaturan", en: "Settings", jp: "設定" },
  "page.calendar": { id: "Kalender", en: "Calendar", jp: "カレンダー" },
  "page.stats": { id: "Statistik", en: "Statistics", jp: "統計" },
  "page.liked": { id: "Lagu Disukai", en: "Liked Songs", jp: "高評価の曲" },
  "page.playlists": { id: "Playlist", en: "Playlists", jp: "プレイリスト" },
  "page.local": { id: "File Lokal", en: "Local Files", jp: "ローカルファイル" },
  "page.album": { id: "Album", en: "Album", jp: "アルバム" },
  "page.artist": { id: "Artis", en: "Artist", jp: "アーティスト" },
  "page.playlist": { id: "Playlist", en: "Playlist", jp: "プレイリスト" },
  "cal.sub": { id: "Rekap kapan kamu dengerin musik.", en: "A recap of when you listened to music.", jp: "いつ音楽を聴いたかの記録。" },
  "home.sub": { id: "Selamat datang kembali — ayo putar sesuatu yang bagus hari ini.", en: "Welcome back — let's play something great today.", jp: "おかえりなさい — 今日もいい音楽をかけよう。" },
  "explore.title": { id: "Jelajahi", en: "Explore", jp: "探索" },
  "explore.sub": { id: "Kategori, tren, dan saran untukmu.", en: "Categories, trends, and picks for you.", jp: "カテゴリ、トレンド、あなたへのおすすめ。" },
  "liked.sub": { id: "Lagu yang kamu sukai", en: "Songs you liked", jp: "高評価した曲" },
  "playlists.sub": { id: "Buat dan kelola playlist.", en: "Create and manage playlists.", jp: "プレイリストの作成と管理。" },
  "local.sub": { id: "Scan folder di PC ini buat mainin koleksi musik kamu.", en: "Scan a folder on this PC to play your music collection.", jp: "このPCのフォルダをスキャンして音楽コレクションを再生。" },
  "stats.sub": { id: "Riwayat dengerin kamu, dari log scrobble lokal.", en: "Your listening history, powered by your local scrobble log.", jp: "ローカルのスクロブルログによる聴取履歴。" },
  "search.placeholder": { id: "Cari lagu, album, artis, playlist...", en: "Search songs, albums, artists, playlists...", jp: "曲、アルバム、アーティスト、プレイリストを検索..." },
  "player.nothing": { id: "Belum ada lagu", en: "Nothing playing", jp: "再生中なし" },
  "np.title": { id: "Sedang Diputar", en: "Now Playing", jp: "再生中" },
  "eq.title": { id: "Equalizer", en: "Equalizer", jp: "イコライザー" },
  "eq.reset": { id: "Reset", en: "Reset", jp: "リセット" },
  "eq.enable": { id: "Aktifkan EQ", en: "Enable EQ", jp: "EQを有効にする" },
  "pl.save": { id: "Simpan ke playlist", en: "Save to playlist", jp: "プレイリストに保存" },
  "pl.namePh": { id: "Nama playlist baru...", en: "New playlist name...", jp: "新しいプレイリスト名..." },
  "pl.create": { id: "Buat", en: "Create", jp: "作成" },
  "ytm.guest": { id: "YouTube Music: tamu", en: "YouTube Music: guest", jp: "YouTube Music: ゲスト" },
  "ytm.signed": { id: "YouTube Music: masuk", en: "YouTube Music: signed in", jp: "YouTube Music: ログイン中" },
  "ytm.offline": { id: "YouTube Music: offline", en: "YouTube Music: offline", jp: "YouTube Music: オフライン" },
  "ytm.guestDesc": { id: "Mode tamu — hanya cari & putar", en: "Guest mode — search & playback only", jp: "ゲストモード — 検索と再生のみ" },
  "ytm.signedDesc": { id: "Masuk — akses akun aktif", en: "Signed in — account access enabled", jp: "ログイン中 — アカウント利用可" },
  "queue.upnext": { id: "Berikutnya", en: "Up next", jp: "次に再生" },
  "queue.recs": { id: "Rekomendasi", en: "Recommendations", jp: "おすすめ" },
  "queue.empty": { id: "Queue masih kosong — lagu yang kamu pilih akan muncul di sini.", en: "Queue is empty — songs you pick will show up here.", jp: "キューは空です — 選んだ曲がここに表示されます。" },
  "queue.recFail": { id: "Tidak bisa memuat rekomendasi. Coba putar lagu dulu!", en: "Could not load recommendations. Try playing a song first!", jp: "おすすめを読み込めませんでした。曲を再生してみてください！" },
  "lyrics.loading": { id: "Memuat lirik...", en: "Loading lyrics...", jp: "歌詞を読み込み中..." },
  "time.justNow": { id: "baru saja", en: "just now", jp: "たった今" },
  "time.sec": { id: " dtk lalu", en: " sec ago", jp: "秒前" },
  "time.min": { id: " mnt lalu", en: " min ago", jp: "分前" },
  "time.hour": { id: " jam lalu", en: " hr ago", jp: "時間前" },
  "time.day": { id: " hari lalu", en: " days ago", jp: "日前" },
  "time.week": { id: " mgg lalu", en: " wk ago", jp: "週間前" },
  "share.copied": { id: "Link disalin!", en: "Link copied!", jp: "リンクをコピーしました！" },
  "liked.added": { id: "Ditambahkan ke Lagu Disukai", en: "Added to Liked Songs", jp: "高評価の曲に追加しました" },
  "liked.removed": { id: "Dihapus dari Lagu Disukai", en: "Removed from Liked Songs", jp: "高評価の曲から削除しました" },
  "greet.night": { id: "Selamat malam", en: "Good evening", jp: "こんばんは" },
  "greet.morning": { id: "Selamat pagi", en: "Good morning", jp: "おはようございます" },
  "greet.noon": { id: "Selamat siang", en: "Good afternoon", jp: "こんにちは" },
  "greet.evening": { id: "Selamat sore", en: "Good afternoon", jp: "こんにちは" },
  "set.lang": { id: "Bahasa", en: "Language", jp: "言語" },
  "set.langDesc": { id: "Bahasa tampilan aplikasi", en: "App display language", jp: "アプリの表示言語" },
  "set.appearance": { id: "Tampilan", en: "Appearance", jp: "外観" },
  "set.theme": { id: "Tema", en: "Theme", jp: "テーマ" },
  "set.themeDesc": { id: "Mode gelap atau terang", en: "Dark or light mode", jp: "ダーク/ライトモード" },
  "set.accent": { id: "Warna aksen", en: "Accent color", jp: "アクセントカラー" },
  "set.accentDesc": { id: "Pilih warna favoritmu", en: "Pick your favorite color", jp: "お気に入りの色を選ぶ" },
  "set.dynamic": { id: "Warna dinamis", en: "Dynamic color", jp: "ダイナミックカラー" },
  "set.dynamicDesc": { id: "Aksen mengikuti warna sampul album", en: "Change accent from album art", jp: "アルバムアートからアクセントを変更" },
  "set.playback": { id: "Pemutaran", en: "Playback", jp: "再生" },
  "set.speed": { id: "Kecepatan putar", en: "Playback speed", jp: "再生速度" },
  "set.speedDesc": { id: "Tempo pemutaran", en: "Tempo of playback", jp: "再生テンポ" },
};

function t(key) {
  const lang = (state.settings && state.settings.lang) || "id";
  const e = T[key];
  if (!e) return key;
  return e[lang] || e.id || key;
}

function applyLang(rerender = true) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") el.placeholder = t(key);
    else el.textContent = t(key);
  });
  if (rerender && state.view) navigate(state.view, state.viewParams);
}

/* ---------------- helpers ---------------- */
const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function fmtTime(sec) {
  if (!isFinite(sec) || sec < 0) return "0:00";
  sec = Math.round(sec);
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function injectIcons(root = document) {
  root.querySelectorAll("[data-ic]").forEach((n) => {
    const name = n.dataset.ic;
    if (ICONS[name]) n.innerHTML = ICONS[name];
  });
}

async function api(path, opts = {}) {
  const res = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...opts,
  });
  if (res.status === 200 || res.status === 201) {
    try {
      return await res.json();
    } catch {
      return {};
    }
  }
  let body = null;
  try {
    body = await res.json();
  } catch {}
  throw new Error((body && (body.error || body.detail)) || `Request failed (${res.status})`);
}

let toastTimer = null;
function toast(msg, ms = 2600) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.add("hidden"), ms);
}

async function shareSong(song) {
  if (!song || !song.videoId) { toast("Tidak ada link untuk lagu ini"); return; }
  const url = `https://music.youtube.com/watch?v=${song.videoId}`;
  try {
    await navigator.clipboard.writeText(url);
    toast(t("share.copied"));
  } catch {
    const ta = document.createElement("textarea");
    ta.value = url; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); toast(t("share.copied")); }
    catch { toast(url); }
    ta.remove();
  }
}

/* ---------------- color utilities ---------------- */
function hexToHsl(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      default: h = (r - g) / d + 4;
    }
    h /= 6;
  }
  return [h * 360, s * 100, l * 100];
}
function hslToHex(h, s, l) {
  s /= 100; l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) => {
    const x = l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return Math.round(255 * x).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}
function setAccent(hex) {
  const [h, s, l] = hexToHsl(hex);
  const root = document.documentElement;
  root.style.setProperty("--primary", hex);
  root.style.setProperty("--primary-2", hslToHex(h, Math.min(100, s * 0.9), Math.min(92, l + 18)));
  root.style.setProperty("--primary-3", hslToHex((h + 42) % 360, Math.min(100, s * 0.95), Math.max(28, l - 4)));
}

/* ---------------- state ---------------- */
const state = {
  settings: {},
  queue: [],
  qIndex: -1,
  current: null,
  likedIds: new Set(),
  playlists: [],
  view: "home",
  viewParams: {},
  searchType: "songs",
  renderList: [],
  lyrics: null,
  romMode: false,
  pendingSong: null,
  scrobbled: false,
  statRecorded: false,
};

/* ---------------- audio & webaudio ---------------- */
const audio = $("#audio");
let actx = null, analyser = null, eqFilters = [], eqEnabled = false;

function ensureAudio() {
  if (actx) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  actx = new AC();
  const src = actx.createMediaElementSource(audio);
  const freqs = [60, 120, 250, 500, 1000, 2000, 3000, 6000, 10000, 14000];
  eqFilters = freqs.map((f) => {
    const filter = actx.createBiquadFilter();
    filter.type = "peaking";
    filter.frequency.value = f;
    filter.Q.value = 1.0;
    filter.gain.value = 0;
    return filter;
  });
  analyser = actx.createAnalyser();
  analyser.fftSize = 256;
  analyser.smoothingTimeConstant = 0.82;
  let node = src;
  eqFilters.forEach((f) => { node.connect(f); node = f; });
  node.connect(analyser);
  analyser.connect(actx.destination);
}

function applyEQ() {
  if (!actx || !eqFilters.length) return;
  const bands = (state.settings.eq_bands || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]).slice(0, 10);
  eqEnabled = !!state.settings.eq_enabled;
  const gain = eqEnabled ? 1 : 0;
  eqFilters.forEach((f, i) => {
    f.gain.setTargetAtTime(bands[i] * gain, actx.currentTime, 0.05);
  });
}

let vizRAF = null;
function startViz() {
  if (!analyser || vizRAF) return;
  const v = $("#viz");
  if (v) v.classList.remove("hidden");
  const canvases = [$("#viz"), $("#npViz")];
  const draw = () => {
    vizRAF = requestAnimationFrame(draw);
    if (!analyser) return;
    const data = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(data);
    canvases.forEach((cv) => { if (cv) drawCanvas(cv, data); });
  };
  draw();
}
function stopViz() {
  cancelAnimationFrame(vizRAF);
  vizRAF = null;
  const v = $("#viz");
  if (v && !npOpen) v.classList.add("hidden");
  [$("#viz"), $("#npViz")].forEach((cv) => { if (cv) { const c = cv.getContext("2d"); c.clearRect(0, 0, cv.width, cv.height); } });
}
function drawCanvas(cv, data) {
  const c = cv.getContext("2d");
  const w = cv.width, h = cv.height;
  c.clearRect(0, 0, w, h);
  const css = getComputedStyle(document.documentElement);
  const primary = css.getPropertyValue("--primary").trim() || "#ff4f8b";
  const bars = Math.floor(w / 6);
  const step = Math.floor(data.length / bars);
  for (let i = 0; i < bars; i++) {
    const v = data[i * step] / 255;
    const bh = Math.max(2, v * h * 0.95);
    const x = i * 6 + 1;
    const grad = c.createLinearGradient(0, h - bh, 0, h);
    grad.addColorStop(0, primary);
    grad.addColorStop(1, "rgba(143,107,255,0.6)");
    c.fillStyle = grad;
    c.beginPath();
    c.roundRect(x, h - bh, 4, bh, 2);
    c.fill();
  }
}

/* ---------------- media session ---------------- */
function setupMediaSession() {
  if (!("mediaSession" in navigator)) return;
  const ms = navigator.mediaSession;
  try {
    ms.setActionHandler("play", () => audio.play());
    ms.setActionHandler("pause", () => audio.pause());
    ms.setActionHandler("previoustrack", () => prev());
    ms.setActionHandler("nexttrack", () => next(false));
    ms.setActionHandler("seekto", (d) => { if (d.seekTime != null) audio.currentTime = d.seekTime; });
  } catch {}
}

/* ---------------- player core ---------------- */
function artUrl(song) {
  return song.art || "";
}

function playQueue(songs, index) {
  state.queue = songs.map((s) => ({ ...s }));
  state.qIndex = index;
  state.scrobbled = false;
  state.statRecorded = false;
  playCurrent();
}

function playCurrent() {
  const song = state.queue[state.qIndex];
  if (!song) return;
  state.current = song;
  const src = song.source === "local" ? `/api/local/file/${song.id.split(":")[1]}` : `/api/stream/${song.videoId}`;
  audio.src = src;
  audio.playbackRate = parseFloat(state.settings.speed || 1);
  audio.volume = state.settings.volume ?? 1;
  audio.play().catch((e) => toast("Playback failed: " + e.message));
  updateNowPlayingUI();
  loadLyrics(song);
  recordPlay();
  updateMediaSession();
  if (state.settings.dynamic_color) sampleArtColor(song);
}

function updateNowPlayingUI() {
  const s = state.current;
  if (!s) return;
  $("#player").classList.remove("hidden");
  $("#playerArt").src = artUrl(s) || "/static/img/icon.png";
  $("#playerTitle").textContent = s.title;
  $("#playerArtist").textContent = s.artist || "";
  $("#npArt").src = artUrl(s) || "/static/img/icon.png";
  $("#npTitle").textContent = s.title;
  $("#npArtist").textContent = s.artist || "";
  syncLikeButtons();
  markPlaying();
  if (npOpen) syncNpVizState();
}

function syncLikeButtons() {
  const liked = state.current ? state.likedIds.has(state.current.id) : false;
  ["#pLike", "#npLike", "#npLike2"].forEach((sel) => {
    const b = $(sel);
    if (!b) return;
    b.dataset.ic = liked ? "heart" : "heart-out";
    b.classList.toggle("on", liked);
    injectIcons(b.parentElement);
  });
}

function togglePlay() {
  if (!state.current) return;
  ensureAudio();
  if (audio.paused) audio.play(); else audio.pause();
}
function playPauseIcon() {
  const playing = !audio.paused && !audio.ended;
  ["#pPlay", "#npPlay"].forEach((sel) => {
    const b = $(sel);
    if (!b) return;
    b.dataset.ic = playing ? "pause" : "play";
  });
  injectIcons($("#player"));
  injectIcons($("#nowPlaying"));
  const frame = $("#npArtFrame");
  frame.classList.toggle("paused", !playing);
  const wrap = $("#playerArtWrap");
  wrap.classList.toggle("spin", playing);
}

function next(manual = true) {
  if (!state.queue.length) return;
  if (state.repeat === "one" && manual) return;
  let i = state.qIndex + 1;
  if (state.shuffle && state.queue.length > 1) {
    do { i = Math.floor(Math.random() * state.queue.length); } while (i === state.qIndex);
  }
  if (i >= state.queue.length) {
    if (state.repeat === "all") i = 0;
    else { if (!manual) audio.pause(); return; }
  }
  state.qIndex = i;
  state.scrobbled = false;
  state.statRecorded = false;
  playCurrent();
}
function prev() {
  if (!state.queue.length) return;
  if (audio.currentTime > 3) { audio.currentTime = 0; return; }
  let i = state.qIndex - 1;
  if (i < 0) i = state.queue.length - 1;
  state.qIndex = i;
  state.scrobbled = false;
  state.statRecorded = false;
  playCurrent();
}

function recordPlay() {
  const s = state.current;
  if (!s || state.statRecorded) return;
  const st = setTimeout(async () => {
    if (state.current && state.current.id === s.id && audio.currentTime > 20) {
      state.statRecorded = true;
      try {
        await api("/api/library/play", { method: "POST", body: JSON.stringify(s) });
      } catch {}
    }
  }, 12000);
  st._songId = s.id;
  audio._recordTimer = st;
}

async function scrobbleNow() {
  const s = state.current;
  if (!s || state.scrobbled) return;
  const played = audio.currentTime >= (s.duration ? s.duration * 0.5 : 30);
  if (!played) return;
  state.scrobbled = true;
  try { await api("/api/scrobble/scrobble", { method: "POST", body: JSON.stringify(s) }); } catch {}
}

async function loadLyrics(song) {
  state.lyrics = null;
  $("#lyrics").innerHTML = `<div class="lyrics-empty">${t("lyrics.loading")}</div>`;
  if (song.source === "local") {
    $("#lyrics").innerHTML = '<div class="lyrics-empty">No lyrics for local files (search YTM instead).</div>';
    return;
  }
  try {
    const data = await api(`/api/lyrics?title=${encodeURIComponent(song.title)}&artist=${encodeURIComponent(song.artist || "")}&duration=${song.duration || 0}`);
    if (data.error) {
      $("#lyrics").innerHTML = `<div class="lyrics-empty">${esc(data.error)}</div>`;
      return;
    }
    state.lyrics = data;
    renderLyrics();
  } catch {
    $("#lyrics").innerHTML = '<div class="lyrics-empty">Could not load lyrics.</div>';
  }
}

function renderLyrics() {
  const wrap = $("#lyrics");
  const L = state.lyrics;
  if (!L) return;
  const rom = $("#npRom");
  if (rom) rom.classList.toggle("hidden", !L.has_romanized);
  wrap.classList.toggle("synced", !!(L.lines && L.lines.length));
  if (L.lines && L.lines.length) {
    const srcLines = state.romMode && L.romanized_lines && L.romanized_lines.length ? L.romanized_lines : L.lines;
    const srcMap = new Map(srcLines.map((l) => [+l.t, l.text]));
    const renderable = [];
    for (let i = 0; i < L.lines.length; i++) {
      const prev = i > 0 ? +L.lines[i - 1].t : null;
      const cur = +L.lines[i].t;
      if (i === 0 && cur > 5000) renderable.push({ t: Math.round(cur / 2), text: "· · ·" });
      else if (prev !== null && cur - prev > 6500) renderable.push({ t: Math.round((prev + cur) / 2), text: "· · ·" });
      renderable.push({ t: cur, text: srcMap.get(cur) || L.lines[i].text });
    }
    wrap.innerHTML = renderable.map((l) => {
      const mm = Math.floor(l.t / 60000), ss = Math.floor((l.t % 60000) / 1000);
      return `<div class="lyric-line" data-t="${l.t}"><span class="lyric-time">${mm}:${String(ss).padStart(2, "0")}</span>${esc(l.text)}</div>`;
    }).join("");
    wrap.querySelectorAll(".lyric-line").forEach((n) => {
      n.addEventListener("click", () => { audio.currentTime = (+n.dataset.t) / 1000; });
    });
  } else if (L.plain) {
    const text = state.romMode && L.romanized_plain ? L.romanized_plain : L.plain;
    wrap.innerHTML = `<div class="lyric-line">${esc(text).replace(/\n/g, "<br>")}</div>`;
  } else {
    wrap.innerHTML = '<div class="lyrics-empty">No lyrics found</div>';
  }
  const w = $("#lyricsWrap");
  if (w) w.scrollTop = 0;
  requestAnimationFrame(() => { if (npOpen) highlightLyric(); });
}

function highlightLyric() {
  if (!state.lyrics || !state.lyrics.lines || !npOpen) return;
  const t = audio.currentTime * 1000;
  const lines = $$("#lyrics .lyric-line[data-t]");
  if (!lines.length) return;
  let active = null;
  for (let i = 0; i < lines.length; i++) {
    if (+lines[i].dataset.t <= t) active = lines[i];
    else break;
  }
  lines.forEach((l) => l.classList.toggle("active", l === active));
  if (active) {
    const wrap = $("#lyricsWrap");
    const top = active.offsetTop - wrap.offsetTop;
    const target = top - wrap.clientHeight / 2 + active.offsetHeight / 2;
    if (Math.abs(wrap.scrollTop - target) > 60) {
      wrap.scrollTo({ top: target, behavior: "smooth" });
    }
  }
}

/* ---------------- library actions ---------------- */
async function toggleLike(song) {
  try {
    const res = await api("/api/library/liked", { method: "POST", body: JSON.stringify(song) });
    if (res.liked) state.likedIds.add(song.id);
    else state.likedIds.delete(song.id);
    syncLikeButtons();
    if (state.view === "liked") navigate("liked");
    toast(res.liked ? t("liked.added") : t("liked.removed"));
  } catch (e) { toast(e.message); }
}

async function openPlaylistModal(song) {
  state.pendingSong = song;
  await loadPlaylists();
  const modal = $("#playlistModal");
  const list = $("#plList");
  list.innerHTML = state.playlists.map((p) =>
    `<div class="pl-row" data-pl-add="${p.id}"><div class="lib-art ph">${ICONS.list}</div><div><div class="lib-name">${esc(p.name)}</div><div class="lib-count">${p.songs.length} songs</div></div><span style="margin-left:auto;color:var(--primary)">${ICONS.plus}</span></div>`
  ).join("") || '<div class="lyrics-empty">No playlists yet</div>';
  $("#plModalTitle").textContent = `Save "${song.title}" to playlist`;
  injectIcons(modal);
  modal.classList.remove("hidden");
  $("#plNewCreate").addEventListener("click", async () => {
    const name = $("#plNewName").value.trim();
    if (!name) { toast("Enter a playlist name"); return; }
    try {
      const p = await api("/api/library/playlists", { method: "POST", body: JSON.stringify({ name }) });
      await api(`/api/library/playlists/${p.id}/songs`, { method: "POST", body: JSON.stringify(song) });
      toast("Playlist created and song added");
      $("#playlistModal").classList.add("hidden");
      await loadPlaylists();
    } catch (e) { toast(e.message); }
  });
}

async function addSongToPlaylist(pid) {
  const song = state.pendingSong;
  if (!song) return;
  try {
    await api(`/api/library/playlists/${pid}/songs`, { method: "POST", body: JSON.stringify(song) });
    toast("Added to playlist");
    $("#playlistModal").classList.add("hidden");
  } catch (e) { toast(e.message); }
}

/* ---------------- like & current helpers ---------------- */
function markPlaying() {
  const id = state.current && state.current.id;
  $$("#view .song-row").forEach((row) => {
    const is = row.dataset.sid === id;
    row.classList.toggle("playing", is);
    row.classList.toggle("active", is);
  });
}

/* ---------------- views ---------------- */
const viewEl = $("#view");

function setActiveNav(name) {
  $$("#nav .nav-item").forEach((b) => b.classList.toggle("active", b.dataset.nav === name));
  $$("#bnav .bnav-item").forEach((b) => b.classList.toggle("active", b.dataset.nav === name));
}

function navigate(name, params = {}) {
  state.view = name;
  state.viewParams = params;
  setActiveNav(name);
  viewEl.scrollTop = 0;
  if (name === "search") return renderSearch();
  if (name === "home") return renderHome();
  if (name === "liked") return renderLiked();
  if (name === "playlists") return renderPlaylists();
  if (name === "local") return renderLocal();
  if (name === "stats") return renderStats();
  if (name === "calendar") return renderCalendar();
  if (name === "settings") return renderSettings();
  if (name === "album") return renderAlbum(params.browseId);
  if (name === "artist") return renderArtist(params.browseId);
  if (name === "playlist") return renderPlaylist(params.browseId);
  if (name === "local-playlist") return renderLocalPlaylist(params.pid);
  renderHome();
}

const MOODS = [["relax", "Relax"], ["energize", "Energize"], ["commute", "Commute"], ["feel-good", "Feel good"], ["sad", "Sad"], ["romantic", "Romantic"]];

const SEARCH_TABS = [
  { id: "all", label: "Semua", icon: "apps" },
  { id: "songs", label: "Lagu", icon: "music" },
  { id: "videos", label: "Video", icon: "smart" },
  { id: "albums", label: "Album", icon: "disc" },
  { id: "artists", label: "Artis", icon: "mic" },
];

const EXPLORE_CATEGORIES = [
  { id: "relax", label: "Relax", sub: "Tenang & fokus", icon: "self_improvement" },
  { id: "energize", label: "Energize", sub: "Semangat pagi", icon: "bolt" },
  { id: "commute", label: "Commute", sub: "Temani perjalanan", icon: "directions_bus" },
  { id: "feel-good", label: "Feel Good", sub: "Bikin hari ceria", icon: "sentiment_satisfied" },
  { id: "sad", label: "Sad", sub: "Lagu melankolis", icon: "water_drop" },
  { id: "romantic", label: "Romantic", sub: "Romansa & kasih", icon: "heart" },
];

async function renderHome() {
  viewEl.innerHTML = `<div class="page-head">
    <div class="page-title">${greeting()}</div>
    <div class="page-sub">${t("home.sub")}</div>
  </div>
  <div class="mood-row" id="moodRow">${MOODS.map(([k, l]) => `<button class="chip mood" data-mood="${k}">${l}</button>`).join("")}</div>
  <div id="homeBody"></div>`;
  injectIcons(viewEl);
  const body = $("#homeBody");
  try {
    const [charts, recent] = await Promise.all([
      api("/api/ytm/charts?country=" + (state.settings.charts_country || "US")),
      api("/api/library/recent?limit=12").catch(() => ({ plays: [] })),
    ]);
    if (charts.error) throw new Error(charts.error);
    const vids = charts.videos || [];
    const arts = charts.artists || [];
    const gens = charts.genres || [];
    const plays = recent.plays || [];
    state.recentPlays = plays;
    let html = "";

    if (plays.length) {
      html += `<section class="section"><div class="section-title">${ICONS.clock} Terakhir diputar</div>
        <div class="song-table" id="recentList">${plays.map((p, i) => recentRowHtml(p, i)).join("")}</div></section>`;
    }

    if (vids.length) {
      const hero = vids[0];
      const side = vids.slice(1, 3);
      html += `<section class="section"><div class="section-title">Pilihan cepat</div>
        <div class="quick-picks">
          <div class="qp-hero" data-card data-type="playlist" data-browse="${esc(hero.browseId)}">
            ${hero.art ? `<img class="qp-hero-art" src="${esc(hero.art)}" loading="lazy">` : `<div class="qp-hero-art ph">${ICONS.music}</div>`}
            <div class="qp-hero-grad"></div>
            <div class="qp-hero-meta">
              <div class="qp-hero-title">${esc(hero.title || "Pilihan cepat")}</div>
              <div class="qp-hero-sub">${esc(hero.subtitle || "Playlist · YouTube Music")}</div>
            </div>
            <div class="qp-hero-play">${ICONS.play}</div>
          </div>
          <div class="qp-side">${side.map((v) => `
            <div class="qp-side-item" data-card data-type="playlist" data-browse="${esc(v.browseId)}">
              ${v.art ? `<div class="qp-side-art"><img src="${esc(v.art)}" loading="lazy"></div>` : `<div class="qp-side-art ph">${ICONS.music}</div>`}
              <div class="qp-side-meta">
                <div class="qp-side-title">${esc(v.title || "Playlist")}</div>
                <div class="qp-side-sub">${esc(v.subtitle || "Playlist")}</div>
              </div>
            </div>`).join("")}</div>
        </div></section>`;
    }

    const contSrc = arts.length ? arts : vids;
    if (contSrc.length) {
      const cType = arts.length ? "artist" : "playlist";
      html += `<section class="section"><div class="section-title">Teruslah mendengarkan</div>
        <div class="hscroll">${contSrc.map((c) => {
          const t = c.name || c.title;
          const sub = c.subscribers || c.subtitle || "";
          return `<div class="cl-item" data-card data-type="${cType}" data-browse="${esc(c.browseId)}">
            ${c.art ? `<div class="cl-art"><img src="${esc(c.art)}" loading="lazy"></div>` : `<div class="cl-art ph">${ICONS.music}</div>`}
            <div class="cl-title">${esc(t || "Unknown")}</div>
            ${sub ? `<div class="cl-sub">${esc(sub)}</div>` : ""}
          </div>`;
        }).join("")}</div></section>`;
    }

    if (vids.length) {
      html += `<section class="section"><div class="section-title">${ICONS.stats} Charts & Playlists</div><div class="card-grid">`;
      html += vids.map((c, i) => cardHtml(c.title, c.art, "chart", c.browseId, c.subtitle)).join("");
      html += "</div></section>";
    }
    if (arts.length) {
      html += `<section class="section"><div class="section-title">${ICONS.stats} Top Artists</div><div class="card-grid">`;
      html += arts.map((a) => cardHtml(a.name, a.art, "artist", a.browseId, a.subscribers)).join("");
      html += "</div></section>";
    }
    if (gens.length) {
      html += `<section class="section"><div class="section-title">${ICONS.disc} Genres</div><div class="card-grid">`;
      html += gens.map((g) => cardHtml(g.title, g.art, "chart", g.browseId, "Genre")).join("");
      html += "</div></section>";
    }
    if (!html) body.innerHTML = emptyState("No charts available", "Try changing the charts country in Settings.");
    else body.innerHTML = html;
  } catch (e) {
    body.innerHTML = emptyState("YouTube Music unavailable", e.message + " — set a VPN to a supported region, or use Local Files.");
  }
  injectIcons(body);
  bindRecentRows(body);
  return chartsSkeleton(body);
}

function greeting() {
  const h = new Date().getHours();
  if (h < 4) return t("greet.night");
  if (h < 11) return t("greet.morning");
  if (h < 15) return t("greet.noon");
  if (h < 18) return t("greet.evening");
  return t("greet.night");
}

function chartsSkeleton(body) {
  if (body.children.length === 0) {
    body.innerHTML = '<div class="card-grid">' + Array.from({ length: 8 }).map(() =>
      `<div class="card"><div class="card-art" style="background:var(--surface-3)"></div><div class="card-title" style="height:14px;background:var(--surface-3);border-radius:6px;margin-top:10px"></div></div>`).join("") + "</div>";
  }
}

function cardHtml(title, art, type, browseId, sub) {
  const artHtml = art
    ? `<div class="card-art"><img src="${esc(art)}" loading="lazy" onerror="this.parentElement.classList.add('placeholder');this.remove()"></div>`
    : `<div class="card-art placeholder">${ICONS.music}</div>`;
  return `<div class="card" data-card data-type="${type}" data-browse="${esc(browseId)}">
    ${artHtml}
    <div class="card-title">${esc(title || "Unknown")}</div>
    ${sub ? `<div class="card-sub">${esc(sub)}</div>` : ""}
  </div>`;
}

function emptyState(title, sub) {
  return `<div class="empty-state"><div class="es-ic">${ICONS.music}</div><h3>${esc(title)}</h3><p>${esc(sub)}</p></div>`;
}

function timeAgo(ts) {
  const s = Math.max(0, Date.now() / 1000 - (ts || 0));
  if (s < 5) return t("time.justNow");
  const sec = Math.floor(s);
  if (sec < 60) return sec + t("time.sec");
  const m = Math.floor(sec / 60);
  if (m < 60) return m + t("time.min");
  const h = Math.floor(m / 60);
  if (h < 24) return h + t("time.hour");
  const d = Math.floor(h / 24);
  if (d < 7) return d + t("time.day");
  return Math.floor(d / 7) + t("time.week");
}

function hdArt(url) {
  if (!url) return url;
  return url
    .replace(/=w\d+(?:-h\d+)?[a-z0-9-]*/, "=w544-h544-l90-rj")
    .replace(/=s\d+/, "=s544");
}

function songFromPlay(p) {
  if (p.source === "ytm") {
    const vid = p.id.startsWith("ytm:") ? p.id.slice(4) : p.id;
    return { id: p.id || "ytm:" + vid, videoId: vid, title: p.title, artist: p.artist, album: p.album, duration: p.duration || 0, art: hdArt(p.art), source: "ytm" };
  }
  return { id: p.id, videoId: "", title: p.title, artist: p.artist, album: p.album, duration: p.duration || 0, art: hdArt(p.art), source: "local", filepath: p.filepath || "" };
}

function recentRowHtml(p, i) {
  const art = hdArt(p.art);
  const artHtml = art
    ? `<div class="s-art"><img src="${esc(art)}" loading="lazy" onerror="this.remove()"></div>`
    : `<div class="s-art ph">${ICONS.music}</div>`;
  return `<div class="song-row recent-row" data-i="${i}">
    <span class="num">${i + 1}</span>
    ${artHtml}
    <span class="s-title">${esc(p.title || "Untitled")}</span>
    <span class="s-artist">${esc(p.artist || "")}</span>
    <span class="s-album">${esc(p.album || "")}</span>
    <span class="s-dur" title="Terakhir diputar">${timeAgo(p.ts)}</span>
    <span class="rp-play">${ICONS.play}</span>
  </div>`;
}

async function renderSearch() {
  const q = state.viewParams.q || "";
  if (!q) {
    viewEl.innerHTML = '<div id="searchLanding"></div>';
    injectIcons(viewEl);
    renderExploreLanding($("#searchLanding"));
    return;
  }
  viewEl.innerHTML = `<div class="tabs" id="searchTabs">
    ${SEARCH_TABS.map((t) =>
      `<button class="tab ${state.searchType === t.id ? "active" : ""}" data-tab="${t.id}">
        <span class="t-ic">${ICONS[t.icon]}</span><span class="t-label">${t.label}</span>
      </button>`).join("")}
  </div><div id="searchResults">${loadingHtml()}</div>`;
  const results = $("#searchResults");
  try {
    if (state.searchType === "all") {
      await renderSearchAll(results, q);
      return;
    }
    const data = await api(`/api/ytm/search?q=${encodeURIComponent(q)}&type=${state.searchType}&limit=30`);
    if (data.error) throw new Error(data.error);
    if (!data.items.length) {
      results.innerHTML = emptyState("No results", `Nothing found for "${q}".`);
      return;
    }
    if (state.searchType === "songs" || state.searchType === "videos") {
      state.renderList = data.items;
      results.innerHTML = searchListHtml(data.items, { title: "Top results" });
      bindSongRows(results, data.items);
      markPlaying();
      return;
    }
    const type = state.searchType;
    results.innerHTML = searchGridHtml(type, data.items);
  } catch (e) {
    results.innerHTML = emptyState("Search failed", e.message);
  }
}

function searchListHtml(items, { title = "Top results", idxMap = null } = {}) {
  const rows = items.map((s, i) => songRowHtml(s, idxMap ? (idxMap.get(s.videoId) ?? i) : i, { showAlbum: true })).join("");
  return `<div class="top-label"><span class="top-bar"></span><span class="tl-text">${esc(title)}</span></div>
    <div class="song-table">${rows}</div>`;
}

function searchGridHtml(type, items) {
  const cfg = { albums: ["Album", "album"], artists: ["Artis", "artist"], playlists: ["Playlist", "playlist"] }[type] || [type, type];
  const title = cfg[0], cardType = cfg[1];
  return `<div class="top-label"><span class="top-bar"></span><span class="tl-text">${esc(title)}</span></div>
    <div class="card-grid">${items.map((c) => cardHtml(c.title || c.name, c.art, cardType, c.browseId, (cardType === "artist" ? c.subscribers : c.artist) || "")).join("")}</div>`;
}

async function renderSearchAll(results, q) {
  const enc = encodeURIComponent(q);
  const [songs, videos, albums, artists, playlists] = await Promise.all([
    api(`/api/ytm/search?q=${enc}&type=songs&limit=8`),
    api(`/api/ytm/search?q=${enc}&type=videos&limit=8`),
    api(`/api/ytm/search?q=${enc}&type=albums&limit=12`),
    api(`/api/ytm/search?q=${enc}&type=artists&limit=12`),
    api(`/api/ytm/search?q=${enc}&type=playlists&limit=12`),
  ]);
  const sList = songs.items || [];
  const vList = videos.items || [];
  const aList = albums.items || [];
  const rList = artists.items || [];
  const pList = playlists.items || [];
  const combined = [...sList, ...vList];
  state.renderList = combined;
  if (!combined.length && !aList.length && !rList.length && !pList.length) {
    results.innerHTML = emptyState("No results", `Nothing found for "${q}".`);
    return;
  }
  const idxMap = new Map();
  combined.forEach((s, i) => idxMap.set(s.videoId, i));
  const inTop = new Set(combined.slice(0, 3).map((s) => s.videoId));
  let html = "";
  if (combined.length) {
    html += `<section class="srch-section">${searchListHtml(combined.slice(0, 3), { idxMap })}</section>`;
    const restSongs = sList.filter((s) => !inTop.has(s.videoId));
    const restVids = vList.filter((s) => !inTop.has(s.videoId));
    if (restSongs.length) html += `<section class="srch-section">${searchListHtml(restSongs, { title: "Lagu", idxMap })}</section>`;
    if (restVids.length) html += `<section class="srch-section">${searchListHtml(restVids, { title: "Video", idxMap })}</section>`;
  }
  if (aList.length) html += `<section class="srch-section">${searchGridHtml("albums", aList)}</section>`;
  if (rList.length) html += `<section class="srch-section">${searchGridHtml("artists", rList)}</section>`;
  if (pList.length) html += `<section class="srch-section">${searchGridHtml("playlists", pList)}</section>`;
  results.innerHTML = html;
  bindSongRows(results, combined);
  markPlaying();
}

async function renderExploreLanding(body) {
  body.innerHTML = `<div class="page-head">
    <div class="page-title">${t("explore.title")}</div>
    <div class="page-sub">${t("explore.sub")}</div>
  </div><div id="exploreContent">${loadingHtml()}</div>`;
  const content = $("#exploreContent");
  try {
    const charts = await api("/api/ytm/charts?country=" + (state.settings.charts_country || "US"));
    if (charts.error) throw new Error(charts.error);
    const vids = charts.videos || [];
    const arts = charts.artists || [];
    const gens = charts.genres || [];
    let html = "";

    html += `<section class="section"><div class="section-title">${ICONS.apps} Jelajahi</div>
      <div class="exp-grid">${EXPLORE_CATEGORIES.map((c, i) => `
        <button class="exp-card grad-${i % 6}" data-mood="${c.id}">
          <span class="exp-ic">${ICONS[c.icon]}</span>
          <span class="exp-label">${c.label}</span>
          <span class="exp-sub">${c.sub}</span>
        </button>`).join("")}</div></section>`;

    if (vids.length) {
      html += `<section class="section"><div class="section-title">${ICONS.trending_up} Suggestions</div>
        <div class="sugg-list">${vids.slice(0, 10).map((v, i) => `
          <div class="sugg-row" data-card data-type="playlist" data-browse="${esc(v.browseId)}">
            <span class="sugg-rank">${i + 1}</span>
            ${v.art ? `<div class="sugg-art"><img src="${esc(v.art)}" loading="lazy"></div>` : `<div class="sugg-art ph">${ICONS.music}</div>`}
            <div class="sugg-meta">
              <div class="sugg-title">${esc(v.title || "Untitled")}</div>
              <div class="sugg-sub">${esc(v.subtitle || "YouTube Music Charts")}</div>
            </div>
            <span class="sugg-arrow">${ICONS.play}</span>
          </div>`).join("")}</div></section>`;
    }

    if (arts.length) {
      html += `<section class="section"><div class="section-title">${ICONS.mic} Artis</div>
        <div class="hscroll">${arts.map((a) => `
          <div class="cl-item" data-card data-type="artist" data-browse="${esc(a.browseId)}">
            ${a.art ? `<div class="cl-art round"><img src="${esc(a.art)}" loading="lazy"></div>` : `<div class="cl-art round ph">${ICONS.music}</div>`}
            <div class="cl-title">${esc(a.name || "Unknown")}</div>
            <div class="cl-sub">${esc(a.subscribers || "")}</div>
          </div>`).join("")}</div></section>`;
    }

    if (gens.length) {
      html += `<section class="section"><div class="section-title">${ICONS.disc} Genre</div>
        <div class="hscroll">${gens.map((g) => `
          <div class="cl-item" data-card data-type="playlist" data-browse="${esc(g.browseId)}">
            ${g.art ? `<div class="cl-art"><img src="${esc(g.art)}" loading="lazy"></div>` : `<div class="cl-art ph">${ICONS.music}</div>`}
            <div class="cl-title">${esc(g.title || "Unknown")}</div>
            <div class="cl-sub">Genre</div>
          </div>`).join("")}</div></section>`;
    }

    content.innerHTML = html || emptyState("No charts available", "Try changing the charts country in Settings.");
  } catch (e) {
    content.innerHTML = emptyState("YouTube Music unavailable", e.message + " — set a VPN to a supported region, or use Local Files.");
  }
  injectIcons(content);
}

function loadingHtml() {
  return '<div class="empty-state"><div class="es-ic" style="animation:discspin 1s linear infinite">' + ICONS.disc + "</div><p>Loading...</p></div>";
}

function songRowHtml(s, i, { showAlbum = true, actions = true } = {}) {
  const artHtml = s.art
    ? `<div class="s-art"><img src="${esc(s.art)}" loading="lazy" onerror="this.remove()"></div>`
    : `<div class="s-art ph">${ICONS.music}</div>`;
  const acts = actions
    ? `<div class="s-actions">
        <button class="icon-btn s-hl" data-heart data-sid="${esc(s.id)}" title="Like">${ICONS["heart-out"]}</button>
        <button class="icon-btn s-hl" data-pl-add-btn title="Save to playlist">${ICONS.plus}</button>
        <button class="icon-btn s-more" data-more title="More">${ICONS.more}</button>
        <div class="s-more-menu" data-more-menu>
          <button class="m-item" data-heart data-sid="${esc(s.id)}">${ICONS.heart}<span>Like</span></button>
          <button class="m-item" data-pl-add-btn>${ICONS.plus}<span>Add to playlist</span></button>
          <button class="m-item" data-share>${ICONS.share}<span>Share link</span></button>
        </div>
      </div>`
    : "";
  return `<div class="song-row" data-i="${i}" data-sid="${esc(s.id)}">
    <span class="num">${i + 1}</span>
    ${artHtml}
    <span class="s-title">${esc(s.title)}</span>
    <span class="s-artist">${esc(s.artist || "")}</span>
    ${showAlbum ? `<span class="s-album">${esc(s.album || "")}</span>` : ""}
    <span class="s-dur">${fmtTime(s.duration)}</span>
    ${acts}
  </div>`;
}

function songTableHtml(songs, showAlbum = true, actions = true) {
  const head = `<div class="song-table-head">
    <span></span><span></span><span>Title</span><span>Artist</span>${showAlbum ? "<span class='h-album'>Album</span>" : ""}<span style='text-align:right'>Duration</span><span></span>
  </div>`;
  const rows = songs.map((s, i) => songRowHtml(s, i, { showAlbum, actions })).join("");
  return `<div class="song-table">${head}${rows}</div>`;
}

async function renderLiked() {
  viewEl.innerHTML = `<div class="page-head"><div class="page-title">${t("page.liked")}</div><div class="page-sub" id="likedCount"></div>
    <div style="margin-top:14px"><button class="btn" id="likedPlayAll">${ICONS.play} Play all</button></div></div>
    <div id="likedBody">${loadingHtml()}</div>`;
  injectIcons(viewEl);
  try {
    const data = await api("/api/library/liked");
    const songs = data.songs || [];
    $("#likedCount").textContent = `${songs.length} songs`;
    const body = $("#likedBody");
    if (!songs.length) {
      body.innerHTML = emptyState("No liked songs yet", "Tap the heart on any song to save it here.");
      return;
    }
    state.renderList = songs;
    body.innerHTML = songTableHtml(songs);
    bindSongRows(body, songs);
    $("#likedPlayAll").addEventListener("click", () => playQueue(songs, 0));
    markPlaying();
  } catch (e) {
    $("#likedBody").innerHTML = emptyState("Error", e.message);
  }
  injectIcons(viewEl);
}

async function renderPlaylists() {
  viewEl.innerHTML = `<div class="page-head"><div class="page-title">${t("page.playlists")}</div><div class="page-sub">${t("playlists.sub")}</div>
    <div style="margin-top:14px"><button class="btn" id="plCreate">${ICONS.plus} New playlist</button></div></div>
    <div id="plGrid"></div>`;
  injectIcons(viewEl);
  const grid = $("#plGrid");
  $("#plCreate").addEventListener("click", async () => {
    const name = prompt("Playlist name:");
    if (!name) return;
    try {
      await api("/api/library/playlists", { method: "POST", body: JSON.stringify({ name }) });
      renderPlaylists();
    } catch (e) { toast(e.message); }
  });
  try {
    const data = await api("/api/library/playlists");
    state.playlists = data.playlists;
    if (!state.playlists.length) {
      grid.innerHTML = emptyState("No playlists yet", "Create one to start collecting songs.");
      return;
    }
    grid.innerHTML = `<div class="card-grid">${state.playlists.map((p) => `
      <div class="card" data-local-pl="${p.id}">
        <div class="card-art placeholder" style="background:var(--accent-grad)">${ICONS.list}</div>
        <div class="card-title">${esc(p.name)}</div>
        <div class="card-sub">${p.songs.length} songs</div>
      </div>`).join("")}</div>`;
  } catch (e) { grid.innerHTML = emptyState("Error", e.message); }
  injectIcons(grid);
}

async function renderLocalPlaylist(pid) {
  const p = state.playlists.find((x) => x.id === pid);
  if (!p) { renderPlaylists(); return; }
  const songs = p.songs || [];
  viewEl.innerHTML = `<div class="hero">
    <div class="hero-art"><div class="card-art placeholder" style="width:100%;height:100%;background:var(--accent-grad)">${ICONS.list}</div></div>
    <div class="hero-meta">
      <div class="hero-type">Playlist</div>
      <div class="hero-title">${esc(p.name)}</div>
      <div class="hero-sub">${p.description ? esc(p.description) : ""} ${songs.length} songs</div>
      <div class="hero-actions">
        <button class="btn" id="lpPlay">${ICONS.play} Play</button>
        <button class="btn ghost" id="lpShuffle">${ICONS.shuffle} Shuffle</button>
        <button class="btn ghost" id="lpRename">Rename</button>
        <button class="btn danger" id="lpDelete">Delete</button>
      </div>
    </div></div><div id="lpBody"></div>`;
  injectIcons(viewEl);
  const body = $("#lpBody");
  state.renderList = songs;
  body.innerHTML = songs.length ? songTableHtml(songs) : emptyState("Empty playlist", "Add songs with the + button.");
  bindSongRows(body, songs);
  $("#lpPlay").addEventListener("click", () => playQueue(songs, 0));
  $("#lpShuffle").addEventListener("click", () => { state.shuffle = true; playQueue(songs, Math.floor(Math.random() * songs.length)); syncShuffle(); });
  $("#lpRename").addEventListener("click", async () => {
    const name = prompt("New name:", p.name);
    if (!name) return;
    await api(`/api/library/playlists/${p.id}`, { method: "PUT", body: JSON.stringify({ name }) });
    renderLocalPlaylist(p.id);
  });
  $("#lpDelete").addEventListener("click", async () => {
    if (!confirm(`Delete playlist "${p.name}"?`)) return;
    await api(`/api/library/playlists/${p.id}`, { method: "DELETE" });
    navigate("playlists");
  });
  markPlaying();
}

async function renderLocal() {
  const root = state.settings.local_root || "";
  viewEl.innerHTML = `<div class="page-head"><div class="page-title">${t("page.local")}</div>
    <div class="page-sub">${t("local.sub")}</div>
    <div style="display:flex;gap:10px;margin-top:14px;flex-wrap:wrap">
      <button class="btn ghost" id="localBrowse">${ICONS.folder} Choose folder</button>
      <button class="btn ghost" id="localRescan">Rescan</button>
      <span class="set-desc" style="align-self:center" id="localRootInfo"></span>
    </div></div>
    <div id="localBody"></div>
    <div id="folderBrowser" class="hidden" style="margin-top:14px"></div>`;
  injectIcons(viewEl);
  $("#localRootInfo").textContent = root ? `Scanning: ${root}` : "No folder chosen yet";
  $("#localBrowse").addEventListener("click", () => renderFolderBrowser(""));
  $("#localRescan").addEventListener("click", () => scanLocal(true));
  scanLocal(false);
}

async function scanLocal(force) {
  const body = $("#localBody");
  if (!body) return;
  body.innerHTML = loadingHtml();
  try {
    let data;
    if (force) {
      const root = state.settings.local_root;
      if (!root) { body.innerHTML = emptyState("Choose a folder first", "Click 'Choose folder' to scan your music."); return; }
      data = await api("/api/local/scan", { method: "POST", body: JSON.stringify({ root }) });
    } else {
      data = await api("/api/local/library");
    }
    state.local = data;
    const songs = data.songs || [];
    if (!songs.length) {
      body.innerHTML = emptyState("No music found", "Choose a folder containing audio files.");
      return;
    }
    state.renderList = songs;
    body.innerHTML = `<div class="section-title">${songs.length} tracks</div>` + songTableHtml(songs, true);
    bindSongRows(body, songs);
    markPlaying();
  } catch (e) {
    body.innerHTML = emptyState("Scan failed", e.message);
  }
  injectIcons(body);
}

async function renderFolderBrowser(path) {
  const box = $("#folderBrowser");
  box.classList.remove("hidden");
  box.innerHTML = loadingHtml();
  try {
    const data = await api("/api/local/dir?path=" + encodeURIComponent(path));
    let html = `<div class="section-title">Choose a folder with music</div>
      <div style="margin-bottom:10px;display:flex;gap:8px">
        <button class="btn ghost" id="fbUp" ${!data.path ? "disabled" : ""}>.. Up</button>
        <span class="set-desc" style="align-self:center">${esc(data.path || "Drives")}</span>
      </div>`;
    if (data.items && data.items.length) {
      html += data.items.filter((i) => i.isDir).map((i) =>
        `<div class="dir-row" data-fb-dir="${esc(i.path)}">${ICONS.folder}<span>${esc(i.name)}</span></div>`).join("");
      html += `<div style="margin-top:14px"><button class="btn" id="fbUse">${ICONS.check} Use this folder</button></div>`;
    } else {
      html += `<div class="lyrics-empty">No folders here.</div>`;
    }
    box.innerHTML = html;
    injectIcons(box);
    const up = $("#fbUp");
    if (up) up.addEventListener("click", () => {
      const parent = path.split(/[\\/]/).slice(0, -1).join("\\");
      renderFolderBrowser(path ? parent : "");
    });
    const use = $("#fbUse");
    if (use) use.addEventListener("click", async () => {
      await api("/api/settings", { method: "POST", body: JSON.stringify({ key: "local_root", value: data.path }) });
      state.settings.local_root = data.path;
      $("#folderBrowser").classList.add("hidden");
      renderLocal();
      scanLocal(true);
    });
  } catch (e) {
    box.innerHTML = `<div class="lyrics-empty">${esc(e.message)}</div>`;
  }
}

async function renderAlbum(browseId) {
  viewEl.innerHTML = loadingHtml();
  try {
    const a = await api("/api/ytm/album/" + browseId);
    if (a.error) throw new Error(a.error);
    viewEl.innerHTML = `<div class="hero">
      <div class="hero-art">${a.art ? `<img src="${esc(a.art)}">` : `<div class="card-art placeholder">${ICONS.music}</div>`}</div>
      <div class="hero-meta">
        <div class="hero-type">Album</div>
        <div class="hero-title">${esc(a.title)}</div>
        <div class="hero-sub">${esc(a.artist)} • ${a.year || ""}</div>
        <div class="hero-actions">
          <button class="btn" id="alPlay">${ICONS.play} Play</button>
          <button class="btn ghost" id="alShuffle">${ICONS.shuffle} Shuffle</button>
        </div>
      </div></div><div id="alTracks"></div>`;
    const tracks = a.tracks || [];
    state.renderList = tracks;
    $("#alTracks").innerHTML = songTableHtml(tracks);
    bindSongRows($("#alTracks"), tracks);
    $("#alPlay").addEventListener("click", () => playQueue(tracks, 0));
    $("#alShuffle").addEventListener("click", () => { state.shuffle = true; playQueue(tracks, Math.floor(Math.random() * tracks.length)); syncShuffle(); });
    markPlaying();
  } catch (e) { viewEl.innerHTML = emptyState("Error", e.message); }
  injectIcons(viewEl);
}

async function renderArtist(browseId) {
  viewEl.innerHTML = loadingHtml();
  try {
    const a = await api("/api/ytm/artist/" + browseId);
    if (a.error) throw new Error(a.error);
    viewEl.innerHTML = `<div class="hero artist-hero">
      <div class="hero-art">${a.art ? `<img src="${esc(a.art)}">` : `<div class="card-art placeholder" style="border-radius:50%">${ICONS.music}</div>`}</div>
      <div class="hero-meta">
        <div class="hero-type">Artist</div>
        <div class="hero-title">${esc(a.name)}</div>
        <div class="hero-sub">${a.subscribers ? esc(a.subscribers) : ""}</div>
        <div class="hero-actions"><button class="btn" id="arPlayTop">${ICONS.play} Play top songs</button></div>
      </div></div>
      <div class="section"><div class="section-title">Albums</div><div id="arAlbums" class="card-grid"></div></div>
      <div class="section"><div class="section-title">Top songs</div><div id="arSongs"></div></div>`;
    injectIcons(viewEl);
    $("#arAlbums").innerHTML = (a.albums || []).map((al) => cardHtml(al.title, al.art, "album", al.browseId, al.year || "")).join("") || emptyState("No albums", "");
    if (a.songs_browse_id) {
      $("#arPlayTop").addEventListener("click", async () => {
        const res = await api("/api/ytm/artist/" + browseId + "/songs");
        if (res.tracks) playQueue(res.tracks, 0);
      });
      const res = await api("/api/ytm/artist/" + browseId + "/songs");
      if (res.error) $("#arSongs").innerHTML = emptyState("No songs", res.error);
      else {
        const tracks = res.tracks || [];
        state.renderList = tracks;
        $("#arSongs").innerHTML = songTableHtml(tracks.slice(0, 20), true);
        bindSongRows($("#arSongs"), tracks);
        markPlaying();
      }
    } else {
      $("#arSongs").innerHTML = emptyState("No top songs", "");
    }
  } catch (e) { viewEl.innerHTML = emptyState("Error", e.message); }
  injectIcons(viewEl);
}

async function renderPlaylist(browseId) {
  viewEl.innerHTML = loadingHtml();
  try {
    const p = await api("/api/ytm/playlist/" + browseId);
    if (p.error) throw new Error(p.error);
    const tracks = p.tracks || [];
    viewEl.innerHTML = `<div class="hero">
      <div class="hero-art">${p.art ? `<img src="${esc(p.art)}">` : `<div class="card-art placeholder">${ICONS.list}</div>`}</div>
      <div class="hero-meta">
        <div class="hero-type">Playlist</div>
        <div class="hero-title">${esc(p.title)}</div>
        <div class="hero-sub">${p.trackCount || tracks.length} songs${p.description ? " • " + esc(p.description) : ""}</div>
        <div class="hero-actions">
          <button class="btn" id="plPlay">${ICONS.play} Play</button>
          <button class="btn ghost" id="plShuffle">${ICONS.shuffle} Shuffle</button>
        </div>
      </div></div><div id="plTracks"></div>`;
    state.renderList = tracks;
    $("#plTracks").innerHTML = songTableHtml(tracks);
    bindSongRows($("#plTracks"), tracks);
    $("#plPlay").addEventListener("click", () => playQueue(tracks, 0));
    $("#plShuffle").addEventListener("click", () => { state.shuffle = true; playQueue(tracks, Math.floor(Math.random() * tracks.length)); syncShuffle(); });
    markPlaying();
  } catch (e) { viewEl.innerHTML = emptyState("Error", e.message); }
  injectIcons(viewEl);
}

async function renderStats() {
  viewEl.innerHTML = `<div class="page-head"><div class="page-title">${t("page.stats")}</div><div class="page-sub">${t("stats.sub")}</div></div>
  <div class="stat-cards" id="statCards"></div>
  <div class="set-group"><h3>${ICONS.stats} Top Artists</h3><div class="bar-chart" id="statArtists"></div></div>
  <div class="set-group"><h3>${ICONS.music} Top Songs</h3><div class="bar-chart" id="statSongs"></div></div>
  <div class="set-group"><h3>${ICONS.clock} Plays per Day</h3><div class="bar-chart" id="statDays"></div></div>`;
  injectIcons(viewEl);
  try {
    const s = await api("/api/library/stats");
    const cards = [
      ["Total plays", s.total_plays],
      ["Top artist", s.top_artists[0] ? s.top_artists[0][0] : "-"],
      ["Top song plays", s.top_songs[0] ? s.top_songs[0].plays : "-"],
      ["Days tracked", Object.keys(s.plays_per_day || {}).length],
    ];
    $("#statCards").innerHTML = cards.map(([l, n]) => `<div class="stat-card"><div class="stat-num">${esc(n)}</div><div class="stat-label">${esc(l)}</div></div>`).join("");
    const maxA = Math.max(1, ...(s.top_artists || []).map((a) => a[1]));
    $("#statArtists").innerHTML = (s.top_artists || []).slice(0, 15).map((a) => barRow(a[0], a[1], maxA)).join("");
    const maxS = Math.max(1, ...(s.top_songs || []).map((a) => a.plays));
    $("#statSongs").innerHTML = (s.top_songs || []).slice(0, 15).map((a) => barRow(`${a.title} — ${a.artist}`, a.plays, maxS)).join("");
    const days = Object.entries(s.plays_per_day || {}).sort((a, b) => (a[0] < b[0] ? -1 : 1)).slice(-30);
    const maxD = Math.max(1, ...days.map((d) => d[1]));
    $("#statDays").innerHTML = days.length ? days.map((d) => barRow(d[0], d[1], maxD)).join("") : '<div class="lyrics-empty">No plays recorded yet</div>';
  } catch (e) {
    viewEl.innerHTML = emptyState("Error", e.message);
  }
}
function barRow(name, val, max) {
  const pct = Math.max(2, Math.round((val / max) * 100));
  return `<div class="bar-row"><span class="b-name" title="${esc(name)}">${esc(name)}</span><div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div><span class="b-val">${val}</span></div>`;
}

/* ---------------- calendar ---------------- */
const CAL_MONTHS = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const CAL_DOWS = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
const CAL_STATE = { y: 0, m: 0, sel: "" };

function calLevel(n) {
  if (!n) return 0;
  if (n >= 12) return 4;
  if (n >= 6) return 3;
  if (n >= 3) return 2;
  return 1;
}
function calKey(d) { return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`; }

async function renderCalendar() {
  const now = new Date();
  CAL_STATE.y = now.getFullYear();
  CAL_STATE.m = now.getMonth();
  CAL_STATE.sel = "";
  viewEl.innerHTML = `<div class="page-head"><div class="page-title">${t("page.calendar")}</div><div class="page-sub">${t("cal.sub")}</div></div>
  <div class="cal-card">
    <h3>${ICONS.calendar_month} Tahun ini</h3>
    <div class="cal-heat-grid" id="calHeat"></div>
    <div class="cal-legend"><span>Kurang</span><i class="lvl-0"></i><i class="lvl-1"></i><i class="lvl-2"></i><i class="lvl-3"></i><i class="lvl-4"></i><span>Lebih</span></div>
  </div>
  <div class="cal-card">
    <div class="cal-nav">
      <button class="icon-btn" id="calPrev" data-ic="prev"></button>
      <span class="cal-label" id="calLabel"></span>
      <button class="icon-btn" id="calNext" data-ic="next"></button>
    </div>
    <div class="cal-grid" id="calGrid"></div>
    <div class="cal-day-detail" id="calDayDetail"></div>
  </div>`;
  injectIcons(viewEl);
  const b = (id, fn) => { const el = $(id); if (el) el.addEventListener("click", fn); };
  b("#calPrev", () => { CAL_STATE.m--; if (CAL_STATE.m < 0) { CAL_STATE.m = 11; CAL_STATE.y--; } CAL_STATE.sel = ""; drawCalMonth(); });
  b("#calNext", () => { CAL_STATE.m++; if (CAL_STATE.m > 11) { CAL_STATE.m = 0; CAL_STATE.y++; } CAL_STATE.sel = ""; drawCalMonth(); });
  try {
    state.calData = await api("/api/library/calendar");
  } catch {
    state.calData = { days: {}, detail: {}, total_plays: 0 };
  }
  drawCalMonth();
  drawCalHeat();
}

function drawCalMonth() {
  const days = (state.calData && state.calData.days) || {};
  const detail = (state.calData && state.calData.detail) || {};
  const y = CAL_STATE.y, m = CAL_STATE.m;
  const label = $("#calLabel");
  if (label) label.textContent = `${CAL_MONTHS[m]} ${y}`;
  const today = new Date();
  const startDow = new Date(y, m, 1).getDay();
  const dim = new Date(y, m + 1, 0).getDate();
  let html = `<div class="cal-dow">${CAL_DOWS.map((d) => `<span>${d}</span>`).join("")}</div>`;
  for (let i = 0; i < startDow; i++) html += `<div class="cal-cell empty"></div>`;
  for (let d = 1; d <= dim; d++) {
    const key = `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const count = days[key] || 0;
    const isToday = y === today.getFullYear() && m === today.getMonth() && d === today.getDate();
    const isSel = CAL_STATE.sel === key;
    html += `<div class="cal-cell${count ? " played" : ""}${isToday ? " today" : ""}${isSel ? " sel" : ""}" data-day="${key}" data-count="${count}" style="--frac:${(calLevel(count) / 4).toFixed(2)}">
      <span class="cal-num">${d}</span>${count ? `<span class="cal-cnt">${count}</span>` : ""}</div>`;
  }
  const grid = $("#calGrid");
  grid.innerHTML = html;
  grid.querySelectorAll(".cal-cell[data-day]").forEach((c) => {
    c.addEventListener("click", () => { CAL_STATE.sel = c.dataset.day; drawCalMonth(); });
  });
  const sel = CAL_STATE.sel;
  const detEl = $("#calDayDetail");
  if (!sel) {
    detEl.innerHTML = '<div class="lyrics-empty">Klik tanggal buat lihat lagu yang kamu putar.</div>';
    return;
  }
  const items = detail[sel] || [];
  if (!items.length) {
    detEl.innerHTML = `<div class="cal-day-head">${sel} — nggak ada putaran</div>`;
    return;
  }
  const seen = new Map();
  items.forEach((p) => {
    const k = p.id || (p.title + p.artist);
    seen.set(k, (seen.get(k) || 0) + 1);
  });
  const uniq = [...seen.keys()];
  state.calDetail = uniq.map((k) => {
    const p = items.find((it) => (it.id || (it.title + it.artist)) === k);
    const plays = seen.get(k);
    return { ...songFromPlay(p), plays };
  });
  detEl.innerHTML = `<div class="cal-day-head">${sel} — ${days[sel] || 0} plays</div>` +
    state.calDetail.map((p, i) => {
      const playsBadge = p.plays > 1 ? `<span class="cal-cnt-sm">${p.plays}×</span>` : "";
      return `<div class="queue-item sug${p.source !== "ytm" ? " dead" : ""}" ${p.source === "ytm" ? `data-cal-play="${i}"` : ""}>
        <div class="s-art">${p.art ? `<img src="${esc(hdArt(p.art))}">` : ICONS.music}</div>
        <div><div class="q-title">${esc(p.title)}</div><div class="q-sub">${esc(p.artist || "")}</div></div>
        ${playsBadge}
      </div>`;
    }).join("");
  injectIcons(detEl);
}

function drawCalHeat() {
  const heat = $("#calHeat");
  if (!heat) return;
  const days = (state.calData && state.calData.days) || {};
  const today = new Date();
  const cur = new Date(today);
  cur.setDate(cur.getDate() - cur.getDay());
  cur.setDate(cur.getDate() - 52 * 7);
  const weeks = [];
  for (let w = 0; w < 53; w++) {
    const col = [];
    for (let r = 0; r < 7; r++) {
      const dt = new Date(cur);
      dt.setDate(cur.getDate() + r);
      const key = calKey(dt);
      col.push({ key, count: dt > today ? 0 : days[key] || 0 });
    }
    weeks.push(col);
    cur.setDate(cur.getDate() + 7);
  }
  let html = "";
  for (let r = 0; r < 7; r++) {
    html += `<div class="ch-row">`;
    weeks.forEach((col) => {
      const c = col[r];
      const lvl = calLevel(c.count);
      html += `<div class="ch-cell${c.count ? " on" : ""}" data-day="${c.key}" data-count="${c.count}" style="--frac:${(lvl / 4).toFixed(2)}" title="${c.key}: ${c.count} plays"></div>`;
    });
    html += `</div>`;
  }
  heat.innerHTML = html;
  heat.querySelectorAll(".ch-cell[data-day]").forEach((c) => {
    c.addEventListener("click", () => {
      const [yy, mm, dd] = c.dataset.day.split("-").map(Number);
      CAL_STATE.y = yy; CAL_STATE.m = mm - 1; CAL_STATE.sel = c.dataset.day;
      drawCalMonth();
      const card = document.querySelectorAll(".cal-card")[1];
      if (card) card.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

async function renderSettings() {
  const s = state.settings;
  const accents = ["#ff4f8b", "#e91e63", "#9c27b0", "#7c4dff", "#3f51b5", "#00bcd4", "#00c853", "#ffb300", "#ff5722"];
  viewEl.innerHTML = `
  <div class="page-head"><div class="page-title">${t("page.settings")}</div></div>

  <div class="set-group"><h3>${ICONS.info || ICONS.gear} ${t("set.lang")}</h3>
    <div class="set-row"><div><div class="set-label">${t("set.lang")}</div><div class="set-desc">${t("set.langDesc")}</div></div>
      <div style="display:flex;gap:8px">
        <button class="chip ${(s.lang || "id") === "id" ? "active" : ""}" data-lang="id">Indonesia</button>
        <button class="chip ${(s.lang || "id") === "en" ? "active" : ""}" data-lang="en">English</button>
        <button class="chip ${(s.lang || "id") === "jp" ? "active" : ""}" data-lang="jp">日本語</button>
      </div></div>
  </div>

  <div class="set-group"><h3>${ICONS.sun} ${t("set.appearance")}</h3>
    <div class="set-row"><div><div class="set-label">${t("set.theme")}</div><div class="set-desc">${t("set.themeDesc")}</div></div>
      <div style="display:flex;gap:8px">
        <button class="chip ${s.theme !== "light" ? "active" : ""}" data-theme-set="dark">Dark</button>
        <button class="chip ${s.theme === "light" ? "active" : ""}" data-theme-set="light">Light</button>
      </div></div>
    <div class="set-row"><div><div class="set-label">${t("set.accent")}</div><div class="set-desc">${t("set.accentDesc")}</div></div>
      <div class="swatches">${accents.map((a) => `<div class="swatch ${(s.accent || "#ff4f8b").toLowerCase() === a ? "active" : ""}" data-accent="${a}" style="background:${a}"></div>`).join("")}
      <input type="color" id="accentCustom" value="${s.accent || "#ff4f8b"}"></div></div>
    <div class="set-row"><div><div class="set-label">${t("set.dynamic")}</div><div class="set-desc">${t("set.dynamicDesc")}</div></div>
      <label class="switch"><input type="checkbox" id="setDynamic" ${s.dynamic_color ? "checked" : ""}><span></span></label></div>
    <div class="set-row"><div><div class="set-label">Charts country</div><div class="set-desc">Region for home charts</div></div>
      <select id="setCountry"><option>US</option><option>ID</option><option>JP</option><option>GB</option><option>IN</option><option>KR</option><option>BR</option><option>DE</option><option>FR</option><option>PH</option><option>SG</option><option>MY</option></select></div>
  </div>

  <div class="set-group"><h3>${ICONS.eq} ${t("set.playback")}</h3>
    <div class="set-row"><div><div class="set-label">${t("set.speed")}</div><div class="set-desc">${t("set.speedDesc")}</div></div>
      <select id="setSpeed">${[0.5, 0.75, 1, 1.25, 1.5, 2].map((v) => `<option value="${v}" ${(+s.speed || 1) === v ? "selected" : ""}>${v}×</option>`).join("")}</select></div>
    <div class="set-row"><div><div class="set-label">Equalizer</div><div class="set-desc">10-band EQ & visualizer</div></div>
      <button class="btn ghost" id="setOpenEq">Open EQ</button></div>
  </div>

  <div class="set-group"><h3>${ICONS.disc} YouTube Music</h3>
    <div class="set-row"><div><div class="set-label">Sign in (optional)</div>
      <div class="set-desc">Paste your YouTube Music cookie (from a logged-in browser) to access your account & liked songs. Leave empty for guest mode.</div></div>
      <input type="text" id="setCookie" placeholder="paste cookie..." value="${esc(s.ytm_cookie || "")}"></div>
    <div class="set-row"><div><div class="set-label">Status</div><div class="set-desc" id="ytmStatusText">checking...</div></div>
      <button class="btn ghost" id="setSaveCookie">Save cookie</button></div>
  </div>

  <div class="set-group"><h3>${ICONS.stats} Last.fm Scrobbling</h3>
    <div class="set-row"><div><div class="set-label">API key</div></div><input type="text" id="lfKey" value="${esc(s.lastfm_api_key || "")}" placeholder="API key"></div>
    <div class="set-row"><div><div class="set-label">Shared secret</div></div><input type="password" id="lfSecret" value="${esc(s.lastfm_api_secret || "")}" placeholder="API secret"></div>
    <div class="set-row"><div><div class="set-label">Username</div></div><input type="text" id="lfUser" value="${esc(s.lastfm_username || "")}"></div>
    <div class="set-row"><div><div class="set-label">Password</div></div><input type="password" id="lfPass" placeholder="password"></div>
    <div class="set-row"><div><div class="set-label">Status</div><div class="set-desc" id="lfStatus">...</div></div>
      <button class="btn ghost" id="lfConnect">Connect</button></div>
  </div>

  <div class="set-group"><h3>${ICONS.info || ICONS.home} About</h3>
    <div class="set-row"><div><div class="set-label">ArchiveTune for Windows</div><div class="set-desc">Unofficial port — Python backend + HTML/CSS/JS frontend. Powered by YouTube Music API & yt-dlp. Not affiliated with Google.</div></div></div>
  </div>`;
  injectIcons(viewEl);

  viewEl.querySelectorAll("[data-theme-set]").forEach((b) => b.addEventListener("click", async () => {
    await setSetting("theme", b.dataset.themeSet);
    renderSettings();
  }));
  viewEl.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", async () => {
    await setSetting("lang", b.dataset.lang);
    applyLang();
  }));
  viewEl.querySelectorAll("[data-accent]").forEach((b) => b.addEventListener("click", async () => {
    await setSetting("accent", b.dataset.accent);
    renderSettings();
  }));
  $("#accentCustom").addEventListener("input", async (e) => {
    await setSetting("accent", e.target.value);
    renderSettings();
  });
  $("#setDynamic").addEventListener("change", (e) => setSetting("dynamic_color", e.target.checked));
  $("#setCountry").value = s.charts_country || "US";
  $("#setCountry").addEventListener("change", (e) => setSetting("charts_country", e.target.value));
  $("#setSpeed").addEventListener("change", (e) => { setSetting("speed", +e.target.value); audio.playbackRate = +e.target.value; });
  $("#setOpenEq").addEventListener("click", () => openEq());
  $("#setSaveCookie").addEventListener("click", async () => {
    const cookie = $("#setCookie").value.trim();
    try {
      await api("/api/ytm/cookie", { method: "POST", body: JSON.stringify({ cookie }) });
      state.settings.ytm_cookie = cookie;
      toast("Cookie saved");
      updateYtmStatus();
    } catch (e) { toast(e.message); }
  });
  $("#lfConnect").addEventListener("click", async () => {
    const body = JSON.stringify({
      api_key: $("#lfKey").value.trim(),
      api_secret: $("#lfSecret").value.trim(),
      username: $("#lfUser").value.trim(),
      password: $("#lfPass").value,
    });
    try {
      const res = await api("/api/lastfm/login", { method: "POST", body });
      if (res.ok) { toast("Connected to Last.fm"); state.settings.lastfm_username = $("#lfUser").value.trim(); updateLfStatus(); }
      else toast("Last.fm: " + (res.error || "login failed"));
    } catch (e) { toast(e.message); }
  });
  updateYtmStatus();
  updateLfStatus();
}

async function setSetting(key, value) {
  state.settings[key] = value;
  try {
    await api("/api/settings", { method: "POST", body: JSON.stringify({ key, value }) });
  } catch {}
  applySettingsToUi();
}

function applySettingsToUi() {
  const s = state.settings;
  document.body.classList.toggle("light", s.theme === "light");
  const themeBtn = $("#themeToggle");
  if (themeBtn) themeBtn.dataset.ic = s.theme === "light" ? "moon" : "sun";
  injectIcons($("#topbar"));
  if (!state.dynamicApplied) setAccent(s.accent || "#ff4f8b");
  audio.volume = s.volume ?? 1;
  applyEQ();
  syncShuffle();
  syncRepeat();
}

async function updateYtmStatus() {
  try {
    const st = await api("/api/ytm/status");
    const el = $("#ytmStatus");
    if (el) {
      el.textContent = st.authenticated ? t("ytm.signed") : t("ytm.guest");
      el.className = "ytm-status " + (st.authenticated ? "online" : "");
    }
    const txt = $("#ytmStatusText");
    if (txt) txt.textContent = st.authenticated ? t("ytm.signedDesc") : t("ytm.guestDesc");
  } catch {
    const el = $("#ytmStatus");
    if (el) { el.textContent = t("ytm.offline"); el.className = "ytm-status offline"; }
  }
}

async function updateLfStatus() {
  try {
    const st = await api("/api/lastfm/status");
    $("#lfStatus").textContent = st.enabled ? `Connected as ${st.username}` : "Not connected";
  } catch {}
}

/* ---------------- now playing overlay & queue ---------------- */
let npOpen = false;
function openNowPlaying() {
  ensureAudio();
  npOpen = true;
  $("#nowPlaying").classList.remove("hidden");
  $("#queuePanel").classList.add("hidden");
  syncNpVizState();
  renderQueuePanel();
  if (state.current) updateNowPlayingUI();
}
function closeNowPlaying() {
  npOpen = false;
  $("#nowPlaying").classList.add("hidden");
  stopVizIfIdle();
}
function syncNpVizState() {
  if (!npOpen) return;
  if (analyser && !audio.paused) startViz();
}

function renderQueuePanel() {
  const qp = $("#queuePanel");
  if (qp.classList.contains("hidden")) return;
  const queueRows = state.queue.length
    ? state.queue.map((s, i) => `
      <div class="queue-item ${i === state.qIndex ? "active" : ""}" data-q-go="${i}">
        <div class="s-art">${s.art ? `<img src="${esc(s.art)}">` : ICONS.music}</div>
        <div><div class="q-title">${esc(s.title)}</div><div class="q-sub">${esc(s.artist || "")}</div></div>
        <button class="icon-btn small" data-q-del="${i}">${ICONS.x}</button>
      </div>`).join("")
    : `<div class="lyrics-empty">${t("queue.empty")}</div>`;
  const recHtml = state.nextUpSug && state.nextUpSug.length
    ? state.nextUpSug.map((s, i) => `
      <div class="queue-item sug" data-sug-play="${i}">
        <div class="s-art">${s.art ? `<img src="${esc(s.art)}">` : ICONS.music}</div>
        <div><div class="q-title">${esc(s.title)}</div><div class="q-sub">${esc(s.artist || "")}</div></div>
        <span class="sug-play-ic">${ICONS.play}</span>
      </div>`).join("")
    : loadingHtml();
  qp.innerHTML = `<div class="q-head">
    <div class="q-head-title">${state.queue.length ? `${t("queue.upnext")} (${state.queue.length})` : t("queue.upnext")}</div>
    <button class="icon-btn" data-close="queue" data-ic="x" title="Close"></button>
  </div>${queueRows}
  <div class="q-sec-title">${t("queue.recs")}</div>
  <div id="nextUpList" class="queue-sug">${recHtml}</div>`;
  injectIcons(qp);
  if (!state.nextUpSug || !state.nextUpSug.length) loadNextUp();
}

async function loadNextUp() {
  const list = $("#nextUpList");
  if (!list) return;
  const seed = state.current || (state.recentPlays && state.recentPlays[0] && songFromPlay(state.recentPlays[0]));
  let items = [];
  try {
    if (seed && seed.videoId) {
      const data = await api(`/api/ytm/nextup/${encodeURIComponent(seed.videoId)}?limit=15`);
      if (data.items && data.items.length) items = data.items;
    }
  } catch {}
  if (!items.length) {
    try {
      const data = await api("/api/ytm/charts?country=US");
      const chart = data.videos && data.videos[0];
      if (chart && chart.browseId) {
        const pl = await api(`/api/ytm/playlist/${encodeURIComponent(chart.browseId)}`);
        if (pl.tracks && pl.tracks.length) items = pl.tracks.slice(0, 15);
      }
    } catch {}
  }
  if (!items.length) {
    list.innerHTML = `<div class="lyrics-empty">${t("queue.recFail")}</div>`;
    return;
  }
  state.nextUpSug = items;
  list.innerHTML = items.map((s, i) => `
    <div class="queue-item sug" data-sug-play="${i}">
      <div class="s-art">${s.art ? `<img src="${esc(s.art)}">` : ICONS.music}</div>
      <div><div class="q-title">${esc(s.title)}</div><div class="q-sub">${esc(s.artist || "")}</div></div>
      <span class="sug-play-ic">${ICONS.play}</span>
    </div>`).join("");
  injectIcons(list);
}

/* ---------------- EQ modal ---------------- */
const EQ_FREQS2 = [60, 120, 250, 500, 1000, 2000, 3000, 6000, 10000, 14000];
function openEq() {
  ensureAudio();
  const bands = (state.settings.eq_bands || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]).slice(0, 10);
  $("#eqEnable").checked = !!state.settings.eq_enabled;
  $("#eqBands").innerHTML = bands.map((v, i) => `
    <div class="eq-band"><input type="range" min="-12" max="12" value="${v}" data-band="${i}"><span>${i % 2 === 0 ? fmtFreq(EQ_FREQS2[i]) : ""}</span></div>`).join("");
  $("#eqModal").classList.remove("hidden");
  $("#eqModal").querySelectorAll("input[type=range]").forEach((r) => {
    r.addEventListener("input", async () => {
      const arr = (state.settings.eq_bands || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]).slice();
      arr[+r.dataset.band] = +r.value;
      await setSetting("eq_bands", arr);
      applyEQ();
    });
  });
  $("#eqEnable").addEventListener("change", async (e) => {
    await setSetting("eq_enabled", e.target.checked);
    applyEQ();
  });
  $("#eqReset").addEventListener("click", async () => {
    await setSetting("eq_bands", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    openEq();
    applyEQ();
  });
}
function fmtFreq(hz) {
  return hz >= 1000 ? (hz / 1000) + "k" : hz + "";
}

/* ---------------- shuffle / repeat ---------------- */
function syncShuffle() {
  ["#pShuffle", "#npShuffle"].forEach((sel) => {
    const b = $(sel);
    if (b) b.classList.toggle("on", !!state.shuffle);
  });
}
function syncRepeat() {
  const map = { off: "repeat", all: "repeat", one: "repeat-1" };
  ["#pRepeat", "#npRepeat"].forEach((sel) => {
    const b = $(sel);
    if (!b) return;
    b.dataset.ic = map[state.repeat] || "repeat";
    b.classList.toggle("on", state.repeat !== "off");
  });
  injectIcons($("#player"));
  injectIcons($("#nowPlaying"));
}
function cycleRepeat() {
  const order = ["off", "all", "one"];
  state.repeat = order[(order.indexOf(state.repeat) + 1) % 3];
  setSetting("repeat", state.repeat);
  syncRepeat();
}

/* ---------------- dynamic color ---------------- */
state.dynamicApplied = false;
function sampleArtColor(song) {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = artUrl(song);
  img.onload = () => {
    try {
      const cv = document.createElement("canvas");
      cv.width = cv.height = 32;
      const c = cv.getContext("2d");
      c.drawImage(img, 0, 0, 32, 32);
      const data = c.getImageData(0, 0, 32, 32).data;
      let r = 0, g = 0, b = 0, n = 0;
      for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] < 200) continue;
        const rr = data[i], gg = data[i + 1], bb = data[i + 2];
        if (rr + gg + bb < 60) continue; // skip near black
        r += rr; g += gg; b += bb; n++;
      }
      if (!n) return;
      r = Math.round(r / n); g = Math.round(g / n); b = Math.round(b / n);
      const hex = "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
      state.dynamicApplied = true;
      setAccent(hex);
    } catch {}
  };
  img.onerror = () => {};
}

/* ---------------- bindings ---------------- */
function bindSongRows(container, songs) {
  container.querySelectorAll(".song-row[data-i]").forEach((row) => {
    row.addEventListener("click", (e) => {
      if (e.target.closest("button")) return;
      playQueue(songs, +row.dataset.i);
    });
  });
}

function bindRecentRows(container) {
  container.querySelectorAll(".recent-row[data-i]").forEach((row) => {
    row.addEventListener("click", (e) => {
      if (e.target.closest("button")) return;
      const songs = (state.recentPlays || []).map(songFromPlay);
      playQueue(songs, +row.dataset.i);
    });
  });
}

/* ---------------- event wiring ---------------- */
function closeMoreMenus() {
  $$("[data-more-menu].open").forEach((m) => m.classList.remove("open"));
}

function wireEvents() {
  document.addEventListener("click", async (e) => {
    const moreBtn = e.target.closest("[data-more]");
    if (moreBtn) {
      const menu = moreBtn.closest(".song-row") && moreBtn.closest(".song-row").querySelector("[data-more-menu]");
      if (menu) {
        const wasOpen = menu.classList.contains("open");
        closeMoreMenus();
        if (!wasOpen) menu.classList.add("open");
      }
      return;
    }
    if (!e.target.closest("[data-more-menu]")) closeMoreMenus();

    const mood = e.target.closest("[data-mood]");
    if (mood) {
      $$("#moodRow .chip").forEach((c) => c.classList.remove("active"));
      mood.classList.add("active");
      state.searchType = "songs";
      navigate("search", { q: mood.dataset.mood });
      return;
    }
    const heart = e.target.closest("[data-heart]");
    if (heart) {
      const song = findSongById(heart.dataset.sid);
      if (song) toggleLike(song);
      return;
    }
    const plBtn = e.target.closest("[data-pl-add-btn]");
    if (plBtn) {
      const row = plBtn.closest(".song-row");
      const song = state.renderList[+row.dataset.i];
      if (song) openPlaylistModal(song);
      return;
    }
    const plAdd = e.target.closest("[data-pl-add]");
    if (plAdd) { addSongToPlaylist(plAdd.dataset.plAdd); return; }

    const card = e.target.closest("[data-card]");
    if (card) {
      const type = card.dataset.type;
      const bid = card.dataset.browse;
      if (type === "album") navigate("album", { browseId: bid });
      else if (type === "artist") navigate("artist", { browseId: bid });
      else if (type === "chart" || type === "playlist") navigate("playlist", { browseId: bid });
      return;
    }
    const navCard = e.target.closest("[data-nav-card]");
    if (navCard) { navigate(navCard.dataset.navCard); return; }
    const localPl = e.target.closest("[data-local-pl]");
    if (localPl) { navigate("local-playlist", { pid: localPl.dataset.localPl }); return; }

    const tab = e.target.closest("[data-tab]");
    if (tab) {
      state.searchType = tab.dataset.tab;
      if (state.view === "search") renderSearch();
      return;
    }

    const fbDir = e.target.closest("[data-fb-dir]");
    if (fbDir) { renderFolderBrowser(fbDir.dataset.fbDir); return; }

    const qGo = e.target.closest("[data-q-go]");
    if (qGo) { state.qIndex = +qGo.dataset.qGo; state.scrobbled = false; state.statRecorded = false; playCurrent(); renderQueuePanel(); return; }
    const qDel = e.target.closest("[data-q-del]");
    if (qDel) {
      state.queue.splice(+qDel.dataset.qDel, 1);
      if (state.qIndex >= state.queue.length) state.qIndex = state.queue.length - 1;
      if (+qDel.dataset.qDel < state.qIndex) state.qIndex--;
      renderQueuePanel();
      return;
    }
    const sugPlay = e.target.closest("[data-sug-play]");
    if (sugPlay) {
      const songs = state.nextUpSug || [];
      const i = +sugPlay.dataset.sugPlay;
      if (songs[i]) { playQueue(songs, i); renderQueuePanel(); }
      return;
    }
    const calPlay = e.target.closest("[data-cal-play]");
    if (calPlay) {
      const songs = state.calDetail || [];
      if (songs[+calPlay.dataset.calPlay]) playQueue(songs, +calPlay.dataset.calPlay);
      return;
    }
    const share = e.target.closest("[data-share]");
    if (share) {
      const row = share.closest(".song-row");
      const song = row && state.renderList[+row.dataset.i];
      if (song) shareSong(song);
      return;
    }

    const close = e.target.closest("[data-close]");
    if (close) {
      const what = close.dataset.close;
      if (what === "np") closeNowPlaying();
      else if (what === "eq") $("#eqModal").classList.add("hidden");
      else if (what === "pl") $("#playlistModal").classList.add("hidden");
      else if (what === "queue") { const qp = $("#queuePanel"); if (qp) qp.classList.add("hidden"); }
      return;
    }
  });

  // player buttons
  const bind = (id, fn) => { const b = $(id); if (b) b.addEventListener("click", fn); };
  bind("#pPlay", () => togglePlay());
  bind("#npPlay", () => togglePlay());
  bind("#pNext", () => next(true));
  bind("#npNext", () => next(true));
  bind("#pPrev", () => prev());
  bind("#npPrev", () => prev());
  bind("#pLike", () => { if (state.current) toggleLike(state.current); });
  bind("#npLike", () => { if (state.current) toggleLike(state.current); });
  bind("#npLike2", () => { if (state.current) toggleLike(state.current); });
  bind("#npShare", () => shareSong(state.current));
  bind("#pShuffle", () => { state.shuffle = !state.shuffle; setSetting("shuffle", state.shuffle); syncShuffle(); });
  bind("#npShuffle", () => { state.shuffle = !state.shuffle; setSetting("shuffle", state.shuffle); syncShuffle(); });
  bind("#pRepeat", () => cycleRepeat());
  bind("#npRepeat", () => cycleRepeat());
  bind("#pQueue", () => { openNowPlaying(); $("#queuePanel").classList.remove("hidden"); renderQueuePanel(); });
  bind("#npQueue", () => { const qp = $("#queuePanel"); qp.classList.toggle("hidden"); if (!qp.classList.contains("hidden")) renderQueuePanel(); });
  bind("#npRom", () => {
    state.romMode = !state.romMode;
    const btn = $("#npRom");
    if (btn) btn.classList.toggle("active", state.romMode);
    renderLyrics();
  });
  bind("#pLyrics", () => { openNowPlaying(); $("#queuePanel").classList.add("hidden"); if (state.current) loadLyrics(state.current); });
  bind("#npToggle", () => openNowPlaying());
  bind("#themeToggle", () => setSetting("theme", state.settings.theme === "light" ? "dark" : "light"));
  bind("#eqToggle", () => openEq());
  bind("#volToggle", () => { audio.muted = !audio.muted; updateVolIcon(); });
  bind("#mpMain", () => openNowPlaying());
  bind("#historyBtn", () => navigate("stats"));
  bind("#settingsBtn", () => navigate("settings"));
  bind("#calendarBtn", () => navigate("calendar"));
  bind("#searchBack", () => { if (history.length > 1) history.back(); else navigate("home"); });
  bind("#searchFilter", () => {
    const tabs = $("#searchTabs");
    if (!tabs) return;
    const hide = tabs.classList.toggle("hidden");
    $("#searchFilter").classList.toggle("active", !hide);
  });

  // progress bars
  const seekBar = (bar, fill, dot, setter) => {
    bar.addEventListener("click", (e) => {
      const rect = bar.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      setter(Math.max(0, Math.min(1, pct)));
    });
  };
  seekBar($("#pBar"), $("#pBarFill"), $("#pBarDot"), (p) => { audio.currentTime = p * (audio.duration || 0); });
  seekBar($("#npBar"), $("#npBarFill"), null, (p) => { audio.currentTime = p * (audio.duration || 0); });
  seekBar($("#volBar"), $("#volFill"), null, async (p) => {
    audio.volume = p;
    audio.muted = false;
    await setSetting("volume", p);
    updateVolIcon();
  });

  // nav
  $$("#nav .nav-item").forEach((b) => b.addEventListener("click", () => navigate(b.dataset.nav)));
  $$("#bnav .bnav-item").forEach((b) => b.addEventListener("click", () => navigate(b.dataset.nav)));

  // search
  const searchInput = $("#searchInput");
  let debounce = null;
  searchInput.addEventListener("input", () => {
    clearTimeout(debounce);
    const q = searchInput.value.trim();
    $("#searchClear").classList.toggle("hidden", !q);
    debounce = setTimeout(() => {
      if (q) { state.searchType = "songs"; navigate("search", { q }); }
      else if (state.view === "search") renderSearch();
    }, 350);
  });
  bind("#searchClear", () => { searchInput.value = ""; $("#searchClear").classList.add("hidden"); if (state.view === "search") renderSearch(); });

  // audio events
  audio.addEventListener("play", () => { playPauseIcon(); ensureAudio(); if (analyser) startViz(); });
  audio.addEventListener("pause", () => { playPauseIcon(); stopVizIfIdle(); });
  audio.addEventListener("timeupdate", () => {
    const cur = audio.currentTime || 0;
    const dur = audio.duration || 0;
    $("#pCur").textContent = fmtTime(cur);
    $("#pDur").textContent = fmtTime(dur);
    $("#npCur").textContent = fmtTime(cur);
    $("#npDur").textContent = fmtTime(dur);
    const pct = dur ? (cur / dur) * 100 : 0;
    $("#pBarFill").style.width = pct + "%";
    $("#pBarDot").style.left = pct + "%";
    $("#npBarFill").style.width = pct + "%";
    highlightLyric();
    if (!state.scrobbled && dur && cur > dur * 0.5) scrobbleNow();
  });
  audio.addEventListener("ended", () => next(false));
  audio.addEventListener("error", () => { if (audio.src) toast("Could not play this track."); });

  // keyboard
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.code === "Space") { e.preventDefault(); togglePlay(); }
    else if (e.key === "ArrowRight") audio.currentTime += 5;
    else if (e.key === "ArrowLeft") audio.currentTime -= 5;
    else if (e.key === "ArrowUp") { e.preventDefault(); audio.volume = Math.min(1, audio.volume + 0.05); setSetting("volume", audio.volume); }
    else if (e.key === "ArrowDown") { e.preventDefault(); audio.volume = Math.max(0, audio.volume - 0.05); setSetting("volume", audio.volume); }
    else if (e.key.toLowerCase() === "n") next(true);
    else if (e.key.toLowerCase() === "p") prev();
    else if (e.key === "Escape") { closeNowPlaying(); $("#eqModal").classList.add("hidden"); $("#playlistModal").classList.add("hidden"); }
  });
}

function stopVizIfIdle() {
  if (audio.paused && !npOpen) stopViz();
}

function updateVolIcon() {
  const b = $("#volToggle");
  if (!b) return;
  b.dataset.ic = audio.muted || audio.volume === 0 ? "vol-mute" : "volume";
  injectIcons(b.parentElement);
  $("#volFill").style.width = (audio.muted ? 0 : (audio.volume || 0) * 100) + "%";
}

function updateMediaSession() {
  if (!("mediaSession" in navigator)) return;
  const s = state.current;
  if (!s) return;
  try {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: s.title,
      artist: s.artist || "",
      album: s.album || "",
      artwork: s.art ? [{ src: s.art, sizes: "512x512" }] : [],
    });
    navigator.mediaSession.playbackState = "playing";
  } catch {}
}

function findSongById(id) {
  if (state.current && state.current.id === id) return state.current;
  for (const s of state.renderList) if (s.id === id) return s;
  return null;
}

async function loadPlaylists() {
  try {
    const data = await api("/api/library/playlists");
    state.playlists = data.playlists;
  } catch {}
}

/* ---------------- init ---------------- */
async function init() {
  try {
    state.settings = await api("/api/settings");
  } catch {
    state.settings = {};
  }
  applySettingsToUi();
  applyLang(false);
  try {
    const liked = await api("/api/library/liked");
    state.likedIds = new Set((liked.songs || []).map((s) => s.id));
  } catch {}
  await loadPlaylists();
  wireEvents();
  setupMediaSession();
  injectIcons(document);
  updateYtmStatus();
  updateLfStatus();
  navigate("home");
}

init();
