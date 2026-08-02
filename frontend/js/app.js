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
  new_releases: '<span class="msym">new_releases</span>',
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
  radio: '<span class="msym">radio</span>',
  chev_left: '<span class="msym">chevron_left</span>',
  chev_right: '<span class="msym">chevron_right</span>',
  library: '<span class="msym">library_music</span>',
  download: '<span class="msym">download</span>',
  up: '<span class="msym">expand_less</span>',
  edit: '<span class="msym">edit</span>',
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
  "nav.offline": { id: "Offline / Download", en: "Offline / Download", jp: "オフライン/ダウンロード" },
  "lib.mostPlayed": { id: "Paling sering diputar", en: "Most played", jp: "最も再生された" },
  "lib.shortcuts": { id: "Pintasan", en: "Shortcuts", jp: "ショートカット" },
  "lib.recentTitle": { id: "Baru-baru ini diputar", en: "Recently played", jp: "最近再生" },
  "lib.top50": { id: "Top 50 Saya", en: "My Top 50", jp: "マイトップ50" },
  "lib.offlineCard": { id: "Offline", en: "Offline", jp: "オフライン" },
  "lib.cacheCard": { id: "Tersimpan di Cache", en: "Saved in cache", jp: "キャッシュに保存" },
  "lib.noPlays": { id: "Belum ada riwayat putar", en: "No play history yet", jp: "再生履歴はまだありません" },
  "lib.noPlaysSub": { id: "Putar beberapa lagu dan paling sering diputar akan muncul di sini.", en: "Play some songs and your most played will appear here.", jp: "曲を再生すると、最も再生された曲がここに表示されます。" },
  "lib.emptyCache": { id: "Belum ada lagu offline", en: "No offline songs", jp: "オフライン曲はありません" },
  "lib.emptyCacheSub": { id: "Dukungan offline akan segera hadir. Untuk sekarang nikmati streaming online.", en: "Offline support is coming soon. For now enjoy online streaming.", jp: "オフライン対応は近日中に追加されます。今はオンラインストリーミングをお楽しみください。" },
  "lib.playsCount": { id: "{n} putaran", en: "{n} plays", jp: "{n}回再生" },
  "lib.artistsFromPlays": { id: "Artis dari riwayat putar", en: "Artists from your play history", jp: "再生履歴のアーティスト" },
  "nav.more": { id: "Lainnya", en: "More", jp: "その他" },
  "nav.releases": { id: "Rilisan Baru", en: "New Releases", jp: "新着リリース" },
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
  "releases.title": { id: "Rilisan Baru", en: "New Releases", jp: "新着リリース" },
  "releases.sub": { id: "Rilisan lagu terbaru dari YouTube Music.", en: "The latest releases from YouTube Music.", jp: "YouTube Music の最新リリース。" },
  "releases.count": { id: "RILISAN", en: "RELEASES", jp: "リリース" },
  "releases.all": { id: "Semua", en: "All", jp: "すべて" },
  "releases.album": { id: "Album", en: "Albums", jp: "アルバム" },
  "releases.single": { id: "Single", en: "Singles", jp: "シングル" },
  "releases.ep": { id: "EP", en: "EPs", jp: "EP" },
  "releases.none": { id: "Belum ada rilisan di kategori ini.", en: "No releases in this category yet.", jp: "このカテゴリのリリースはまだありません。" },
  "releases.err": { id: "Gagal memuat rilisan baru.", en: "Failed to load new releases.", jp: "新着リリースを読み込めませんでした。" },
  "search.tabAll": { id: "Semua", en: "All", jp: "すべて" },
  "search.tabSongs": { id: "Lagu", en: "Songs", jp: "曲" },
  "search.tabVideos": { id: "Video", en: "Videos", jp: "動画" },
  "search.tabAlbums": { id: "Album", en: "Albums", jp: "アルバム" },
  "search.tabArtists": { id: "Artis", en: "Artists", jp: "アーティスト" },
  "search.albums": { id: "Album", en: "Albums", jp: "アルバム" },
  "search.playlists": { id: "Playlist", en: "Playlists", jp: "プレイリスト" },
  "explore.artists": { id: "Artis", en: "Artists", jp: "アーティスト" },
  "mood.relax": { id: "Tenang & fokus", en: "Calm & focus", jp: "リラックス＆集中" },
  "mood.energize": { id: "Semangat pagi", en: "Morning energy", jp: "朝の活力" },
  "mood.commute": { id: "Temani perjalanan", en: "For the commute", jp: "通勤のお供" },
  "mood.feelgood": { id: "Bikin hari ceria", en: "Make your day", jp: "気分を明るく" },
  "mood.sad": { id: "Lagu melankolis", en: "Melancholy songs", jp: "メランコリック" },
  "mood.romantic": { id: "Romansa & kasih", en: "Romance & love", jp: "ロマンス＆愛" },
  "recent.played": { id: "Terakhir diputar", en: "Last played", jp: "最後に再生" },
  "share.noLink": { id: "Tidak ada link untuk lagu ini", en: "No link for this song", jp: "この曲のリンクはありません" },
  "common.play": { id: "Putar", en: "Play", jp: "再生" },
  "common.shuffle": { id: "Acak", en: "Shuffle", jp: "シャッフル" },
  "common.radio": { id: "Radio", en: "Radio", jp: "ラジオ" },
  "song.title": { id: "Judul", en: "Title", jp: "タイトル" },
  "song.artist": { id: "Artis", en: "Artist", jp: "アーティスト" },
  "song.album": { id: "Album", en: "Album", jp: "アルバム" },
  "song.duration": { id: "Durasi", en: "Duration", jp: "時間" },
  "stats.topArtists": { id: "Artis Teratas", en: "Top Artists", jp: "トップアーティスト" },
  "stats.topSongs": { id: "Lagu Teratas", en: "Top Songs", jp: "トップ曲" },
  "stats.perDay": { id: "Putaran per Hari", en: "Plays per Day", jp: "1日の再生数" },
  "stats.total": { id: "Total putaran", en: "Total plays", jp: "総再生数" },
  "stats.topArtist": { id: "Artis teratas", en: "Top artist", jp: "トップアーティスト" },
  "stats.topSongPlays": { id: "Putaran lagu teratas", en: "Top song plays", jp: "トップ曲の再生数" },
  "stats.daysTracked": { id: "Hari terpantau", en: "Days tracked", jp: "記録日数" },
  "stats.noPlays": { id: "Belum ada putaran", en: "No plays recorded yet", jp: "再生記録はまだありません" },
  "lib.songs": { id: "lagu", en: "songs", jp: "曲" },
  "lib.tracks": { id: "lagu", en: "tracks", jp: "曲" },
  "common.playTop": { id: "Putar lagu teratas", en: "Play top songs", jp: "トップ曲を再生" },
  "common.topSongs": { id: "Lagu teratas", en: "Top songs", jp: "トップ曲" },
  "liked.none": { id: "Belum ada lagu disukai", en: "No liked songs yet", jp: "好きな曲はまだありません" },
  "liked.noneSub": { id: "Ketuk hati pada lagu mana pun untuk menyimpannya di sini.", en: "Tap the heart on any song to save it here.", jp: "任意の曲のハートをタップしてここに保存してください。" },
  "playlists.none": { id: "Belum ada playlist", en: "No playlists yet", jp: "プレイリストはまだありません" },
  "playlists.noneSub": { id: "Buat satu untuk mulai mengumpulkan lagu.", en: "Create one to start collecting songs.", jp: "曲を集めるには作成してください。" },
  "playlists.empty": { id: "Playlist kosong", en: "Empty playlist", jp: "空のプレイリスト" },
  "playlists.emptySub": { id: "Tambahkan lagu dengan tombol +.", en: "Add songs with the + button.", jp: "+ボタンで曲を追加します。" },
  "artist.noTop": { id: "Tidak ada lagu teratas", en: "No top songs", jp: "トップ曲はありません" },
  "artist.noAlbums": { id: "Tidak ada album", en: "No albums", jp: "アルバムはありません" },
  "artist.noSongs": { id: "Tidak ada lagu", en: "No songs", jp: "曲はありません" },
  "playlists.rename": { id: "Ganti nama", en: "Rename", jp: "名前を変更" },
  "playlists.delete": { id: "Hapus", en: "Delete", jp: "削除" },
  "set.country": { id: "Negara chart", en: "Charts country", jp: "チャート国" },
  "set.countryDesc": { id: "Wilayah untuk chart beranda", en: "Region for home charts", jp: "ホームチャートの地域" },
  "set.eq": { id: "Equalizer", en: "Equalizer", jp: "イコライザー" },
  "set.eqDesc": { id: "EQ 10-band & visualizer", en: "10-band EQ & visualizer", jp: "10バンドEQとビジュアライザー" },
  "set.openEq": { id: "Buka EQ", en: "Open EQ", jp: "EQを開く" },
  "set.ytm": { id: "YouTube Music", en: "YouTube Music", jp: "YouTube Music" },
  "set.signin": { id: "Masuk (opsional)", en: "Sign in (optional)", jp: "ログイン（任意）" },
  "set.cookieDesc": { id: "Tempel cookie YouTube Music (dari browser yang sudah login) untuk mengakses akun & lagu disukai. Kosongkan untuk mode tamu.", en: "Paste your YouTube Music cookie (from a logged-in browser) to access your account & liked songs. Leave empty for guest mode.", jp: "ログイン済みブラウザのYouTube Music cookieを貼り付けて、アカウントと好きな曲にアクセスします。ゲストモードの場合は空のままにします。" },
  "set.cookiePh": { id: "tempel cookie...", en: "paste cookie...", jp: "cookieを貼り付け..." },
  "set.status": { id: "Status", en: "Status", jp: "ステータス" },
  "set.checking": { id: "memeriksa...", en: "checking...", jp: "確認中..." },
  "set.saveCookie": { id: "Simpan cookie", en: "Save cookie", jp: "Cookieを保存" },
  "set.lf": { id: "Scrobbling Last.fm", en: "Last.fm Scrobbling", jp: "Last.fm スクロブ" },
  "set.apiKey": { id: "API key", en: "API key", jp: "APIキー" },
  "set.sharedSecret": { id: "Shared secret", en: "Shared secret", jp: "共有シークレット" },
  "set.username": { id: "Username", en: "Username", jp: "ユーザー名" },
  "set.password": { id: "Kata sandi", en: "Password", jp: "パスワード" },
  "set.apiSecretPh": { id: "API secret", en: "API secret", jp: "APIシークレット" },
  "set.passPh": { id: "kata sandi", en: "password", jp: "パスワード" },
  "set.connect": { id: "Hubungkan", en: "Connect", jp: "接続" },
  "set.about": { id: "Tentang", en: "About", jp: "このアプリについて" },
  "set.aboutDesc": { id: "Port tidak resmi — backend Python + frontend HTML/CSS/JS. Didukung oleh YouTube Music API & yt-dlp. Tidak berafiliasi dengan Google.", en: "Unofficial port — Python backend + HTML/CSS/JS frontend. Powered by YouTube Music API & yt-dlp. Not affiliated with Google.", jp: "非公式ポート — Pythonバックエンド+HTML/CSS/JSフロントエンド。YouTube Music APIとyt-dlpを使用。Googleとは無関係です。" },
  "set.dark": { id: "Gelap", en: "Dark", jp: "ダーク" },
  "set.light": { id: "Terang", en: "Light", jp: "ライト" },
  "toast.cookieSaved": { id: "Cookie disimpan", en: "Cookie saved", jp: "Cookieを保存しました" },
  "toast.lfConnected": { id: "Terhubung ke Last.fm", en: "Connected to Last.fm", jp: "Last.fmに接続しました" },
  "lf.loginFailed": { id: "login gagal", en: "login failed", jp: "ログイン失敗" },
  "lyrics.noLocal": { id: "Tidak ada lirik untuk file lokal (cari di YTM sebagai gantinya).", en: "No lyrics for local files (search YTM instead).", jp: "ローカルファイルの歌詞はありません（代わりにYTMで検索してください）。" },
  "lyrics.fail": { id: "Tidak dapat memuat lirik.", en: "Could not load lyrics.", jp: "歌詞を読み込めませんでした。" },
  "lyrics.none": { id: "Tidak ada lirik ditemukan", en: "No lyrics found", jp: "歌詞が見つかりません" },
  "charts.none": { id: "Chart tidak tersedia", en: "No charts available", jp: "チャートがありません" },
  "charts.noneSub": { id: "Coba ubah negara chart di Pengaturan.", en: "Try changing the charts country in Settings.", jp: "設定でチャート国を変更してみてください。" },
  "local.none": { id: "Tidak ada musik ditemukan", en: "No music found", jp: "音楽が見つかりません" },
  "local.noneSub": { id: "Pilih folder yang berisi file audio.", en: "Choose a folder containing audio files.", jp: "オーディオファイルを含むフォルダを選択してください。" },
  "local.scanFail": { id: "Pemindaian gagal", en: "Scan failed", jp: "スキャンに失敗しました" },
  "folder.choose": { id: "Pilih folder berisi musik", en: "Choose a folder with music", jp: "音楽のあるフォルダを選択" },
  "folder.up": { id: ".. Naik", en: ".. Up", jp: ".. 上へ" },
  "folder.use": { id: "Gunakan folder ini", en: "Use this folder", jp: "このフォルダを使用" },
  "folder.none": { id: "Tidak ada folder di sini.", en: "No folders here.", jp: "フォルダはありません。" },
  "common.close": { id: "Tutup", en: "Close", jp: "閉じる" },
  "ytm.unavailable": { id: "YouTube Music tidak tersedia", en: "YouTube Music unavailable", jp: "YouTube Music を利用できません" },
  "ytm.unavailableSub": { id: "Coba atur VPN ke wilayah yang didukung, atau gunakan File Lokal.", en: "set a VPN to a supported region, or use Local Files.", jp: "対応地域のVPNを設定するか、ローカルファイルを使用してください。" },
  "search.noResults": { id: "Tidak ada hasil", en: "No results", jp: "結果がありません" },
  "search.nothingFor": { id: 'Tidak ada hasil untuk "{q}".', en: 'Nothing found for "{q}".', jp: '「{q}」の結果は見つかりませんでした。' },
  "search.failed": { id: "Pencarian gagal", en: "Search failed", jp: "検索に失敗しました" },
  "song.like": { id: "Suka", en: "Like", jp: "いいね" },
  "pl.addTo": { id: "Tambahkan ke playlist", en: "Add to playlist", jp: "プレイリストに追加" },
  "liked.playAll": { id: "Putar semua", en: "Play all", jp: "すべて再生" },
  "local.choose": { id: "Pilih folder", en: "Choose folder", jp: "フォルダを選択" },
  "local.chooseFirst": { id: "Pilih folder dulu", en: "Choose a folder first", jp: "先にフォルダを選択してください" },
  "local.chooseFirstSub": { id: "Klik 'Pilih folder' untuk memindai musik Anda.", en: "Click 'Choose folder' to scan your music.", jp: "「フォルダを選択」をクリックして音楽をスキャンします。" },
  "toast.playbackFailed": { id: "Pemutaran gagal: ", en: "Playback failed: ", jp: "再生に失敗しました: " },
  "toast.cantPlay": { id: "Tidak dapat memutar trek ini.", en: "Could not play this track.", jp: "この曲を再生できませんでした。" },
  "common.loading": { id: "Memuat...", en: "Loading...", jp: "読み込み中..." },
  "common.more": { id: "Lainnya", en: "More", jp: "もっと見る" },
  "common.share": { id: "Bagikan tautan", en: "Share link", jp: "リンクを共有" },
  "playlists.new": { id: "Playlist baru", en: "New playlist", jp: "新しいプレイリスト" },
  "playlists.name": { id: "Nama playlist:", en: "Playlist name:", jp: "プレイリスト名:" },
  "toast.plName": { id: "Masukkan nama playlist", en: "Enter a playlist name", jp: "プレイリスト名を入力してください" },
  "toast.plCreated": { id: "Playlist dibuat dan lagu ditambahkan", en: "Playlist created and song added", jp: "プレイリストを作成し、曲を追加しました" },
  "toast.plAdded": { id: "Ditambahkan ke playlist", en: "Added to playlist", jp: "プレイリストに追加しました" },
  "home.sub": { id: "Selamat datang kembali — ayo putar sesuatu yang bagus hari ini.", en: "Welcome back — let's play something great today.", jp: "おかえりなさい — 今日もいい音楽をかけよう。" },
  "home.quick": { id: "Pilihan Cepat", en: "Quick picks", jp: "クイックピック" },
  "home.continue": { id: "Lanjutkan Memutar", en: "Continue listening", jp: "再生の続き" },
  "home.artists": { id: "Artis Teratas", en: "Top Artists", jp: "トップアーティスト" },
  "home.topAlbum": { id: "Top Album", en: "Top Albums", jp: "トップアルバム" },
  "home.playlists": { id: "Playlist", en: "Playlists", jp: "プレイリスト" },
  "home.discover": { id: "Discover", en: "Discover", jp: "発見" },
  "explore.title": { id: "Jelajahi", en: "Explore", jp: "探索" },
  "explore.sub": { id: "Kategori, tren, dan saran untukmu.", en: "Categories, trends, and picks for you.", jp: "カテゴリ、トレンド、あなたへのおすすめ。" },
  "explore.moods": { id: "Mood & Genre", en: "Mood & Genre", jp: "気分とジャンル" },
  "explore.suggestions": { id: "Saran", en: "Suggestions", jp: "おすすめ" },
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
  "queue.upnextSub": { id: "Antrean selanjutnya", en: "Your queued songs", jp: "キュー内の曲" },
  "queue.recsSub": { id: "Memutar otomatis musik serupa", en: "Auto-playing similar music", jp: "似た曲を自動再生" },
  "queue.remove": { id: "Hapus dari antrean", en: "Remove from queue", jp: "キューから削除" },
  "queue.more": { id: "Opsi lainnya", en: "More options", jp: "その他のオプション" },
  "queue.playNext": { id: "Putar berikutnya", en: "Play next", jp: "次に再生" },
  "queue.addToQueue": { id: "Tambah ke antrean", en: "Add to queue", jp: "キューに追加" },
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
  "set.crossfade": { id: "Crossfade", en: "Crossfade", jp: "クロスフェード" },
  "set.crossfadeDesc": { id: "Lagu berikutnya fade-in lembut sebelum lagu selesai", en: "Next song fades in softly before the current one ends", jp: "曲が終わる前に次の曲をフェードイン" },
  "set.crossfadeDur": { id: "Durasi crossfade", en: "Crossfade duration", jp: "クロスフェード時間" },
  "set.crossfadeDurDesc": { id: "Detik sebelum lagu selesai lagu baru mulai muncul", en: "How many seconds before the end the next song starts", jp: "曲が終わる何秒前に次を開始するか" },
};

function t(key, vars) {
  const lang = (state.settings && state.settings.lang) || "id";
  const e = T[key];
  if (!e) return key;
  let s = e[lang] || e.id || key;
  if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] != null ? vars[k] : m));
  return s;
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
  if (!song || !song.videoId) { toast(t("share.noLink")); return; }
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
  lib: null,
  libFilter: "all",
};

/* ---------------- audio & webaudio ---------------- */
const audio = $("#audio");
const audioXfade = $("#audioXfade");
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
  try {
    const xsrc = actx.createMediaElementSource(audioXfade);
    xsrc.connect(eqFilters[0]);
  } catch {}
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
function syncMsPlayback() {
  if (!("mediaSession" in navigator)) return;
  try {
    navigator.mediaSession.playbackState = !audio.paused && !audio.ended ? "playing" : "paused";
  } catch {}
}

function setupMediaSession() {
  if (!("mediaSession" in navigator)) return;
  const ms = navigator.mediaSession;
  try {
    ms.setActionHandler("play", () => { if (state.xfadeActive) cancelXfade(); audio.play(); syncMsPlayback(); });
    ms.setActionHandler("pause", () => { if (state.xfadeActive) cancelXfade(); audio.pause(); syncMsPlayback(); });
    ms.setActionHandler("previoustrack", () => prev());
    ms.setActionHandler("nexttrack", () => next(false));
    ms.setActionHandler("seekto", (d) => { if (state.xfadeActive) cancelXfade(); if (d.seekTime != null) audio.currentTime = d.seekTime; });
    ms.setActionHandler("seekforward", () => { if (state.xfadeActive) cancelXfade(); audio.currentTime = Math.min(audio.currentTime + 10, audio.duration || audio.currentTime + 10); });
    ms.setActionHandler("seekbackward", () => { if (state.xfadeActive) cancelXfade(); audio.currentTime = Math.max(0, audio.currentTime - 10); });
  } catch {}
}

/* ---------------- player core ---------------- */
function artUrl(song) {
  return song.art || "";
}

function playQueue(songs, index) {
  cancelXfade();
  state.queue = songs.map((s) => ({ ...s }));
  state.qIndex = index;
  state.scrobbled = false;
  state.statRecorded = false;
  playCurrent();
}

function playCurrent() {
  const song = state.queue[state.qIndex];
  if (!song) return;
  resetXfade();
  state.current = song;
  const src = song.source === "local" ? `/api/local/file/${song.id.split(":")[1]}` : `/api/stream/${song.videoId}`;
  audio.src = src;
  audio.playbackRate = parseFloat(state.settings.speed || 1);
  audio.volume = state.settings.volume ?? 1;
  audio.play().catch((e) => toast(t("toast.playbackFailed") + e.message));
  updateNowPlayingUI();
  loadLyrics(song);
  recordPlay();
  updateMediaSession();
  if (state.settings.dynamic_color) sampleArtColor(song);
  scheduleNextUp();
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

async function openArtistFromCurrent() {
  const s = state.current;
  const a = s && s.artists && s.artists[0];
  if (a && a.browseId) {
    closeNowPlaying();
    navigate("artist", { browseId: a.browseId });
    return;
  }
  if (s && s.artist) {
    closeNowPlaying();
    try {
      const data = await api(`/api/ytm/search?q=${encodeURIComponent(s.artist)}&type=artists&limit=5`);
      const first = (data.items || [])[0];
      if (first && first.browseId) {
        navigate("artist", { browseId: first.browseId });
        return;
      }
    } catch {}
    navigate("search", { q: s.artist, type: "artists" });
  }
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
  if (state.xfadeActive) cancelXfade();
  if (audio.paused) audio.play(); else audio.pause();
}
function playPauseIcon() {
  const playing = !audio.paused && !audio.ended;
  syncMsPlayback();
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
  cancelXfade();
  let i = state.qIndex + 1;
  if (state.shuffle && state.queue.length > 1) {
    do { i = Math.floor(Math.random() * state.queue.length); } while (i === state.qIndex);
  }
  if (i >= state.queue.length) {
    if (state.repeat === "all") i = 0;
    else if (state.nextUpSug && state.nextUpSug.length) {
      state.queue = state.queue.concat(state.nextUpSug.map((s) => ({ ...s })));
      state.nextUpSug = [];
      i = state.qIndex + 1;
    }
    else {
      if (manual) { advanceIntoRecs(); return; }
      audio.pause();
      return;
    }
  }
  state.qIndex = i;
  state.scrobbled = false;
  state.statRecorded = false;
  playCurrent();
}

async function advanceIntoRecs() {
  await fetchNextUp();
  if (!state.nextUpSug || !state.nextUpSug.length) return;
  state.queue = state.queue.concat(state.nextUpSug.map((s) => ({ ...s })));
  state.nextUpSug = [];
  state.qIndex += 1;
  state.scrobbled = false;
  state.statRecorded = false;
  playCurrent();
  if (npOpen) renderQueuePanel();
}
function prev() {
  if (!state.queue.length) return;
  cancelXfade();
  if (audio.currentTime > 3) { audio.currentTime = 0; return; }
  let i = state.qIndex - 1;
  if (i < 0) i = state.queue.length - 1;
  state.qIndex = i;
  state.scrobbled = false;
  state.statRecorded = false;
  playCurrent();
}

/* ---------------- crossfade (ala Apple Music) ---------------- */
let xfadeTimer = null;
let xfadeUiTimer = null;
state.xfadeActive = false;
state.xfadeLoaded = false;
state.xfadeNextIndex = null;

const XFADE_UI_ELS = ["#playerArt", "#playerTitle", "#playerArtist", "#npArt", "#npTitle", "#npArtist"];

function xfadeUiReset() {
  clearTimeout(xfadeUiTimer);
  xfadeUiTimer = null;
  XFADE_UI_ELS.forEach((sel) => {
    const el = $(sel);
    if (el) { el.style.transition = ""; el.style.opacity = ""; }
  });
}

function uiCrossfadeTo(song) {
  if (!song) return;
  const xf = getXfade();
  const half = (xf / 2) * 1000;
  const fade = (sel, to) => {
    const el = $(sel);
    if (el) { el.style.transition = `opacity ${half / 1000}s ease`; el.style.opacity = to; }
  };
  XFADE_UI_ELS.forEach((sel) => fade(sel, 0));
  clearTimeout(xfadeUiTimer);
  xfadeUiTimer = setTimeout(() => {
    const src = artUrl(song) || "/static/img/icon.png";
    $("#playerArt").src = src;
    $("#playerTitle").textContent = song.title;
    $("#playerArtist").textContent = song.artist || "";
    $("#npArt").src = src;
    $("#npTitle").textContent = song.title;
    $("#npArtist").textContent = song.artist || "";
    XFADE_UI_ELS.forEach((sel) => fade(sel, 1));
    setTimeout(() => { XFADE_UI_ELS.forEach((sel) => { const el = $(sel); if (el) { el.style.transition = ""; } }); }, half + 100);
  }, half);
}

function getXfade() {
  const v = parseFloat(state.settings.crossfade);
  return Number.isFinite(v) && v > 0 ? Math.min(10, v) : 0;
}

function computeNextIndex() {
  if (!state.queue.length) return null;
  let i = state.qIndex + 1;
  if (state.shuffle && state.queue.length > 1) {
    do { i = Math.floor(Math.random() * state.queue.length); } while (i === state.qIndex);
  }
  if (i >= state.queue.length) {
    if (state.repeat === "all") i = 0;
    else if (state.nextUpSug && state.nextUpSug.length) {
      state.queue = state.queue.concat(state.nextUpSug.map((s) => ({ ...s })));
      state.nextUpSug = [];
      i = state.qIndex + 1;
    } else i = null;
  }
  return i;
}

function resetXfade() {
  clearInterval(xfadeTimer);
  xfadeTimer = null;
  state.xfadeActive = false;
  state.xfadeLoaded = false;
  state.xfadeNextIndex = null;
  xfadeUiReset();
  audioXfade.pause();
  audioXfade.removeAttribute("src");
  try { audioXfade.load(); } catch {}
  audioXfade.volume = 0;
}

function cancelXfade() {
  const wasActive = state.xfadeActive;
  resetXfade();
  if (wasActive) {
    audio.volume = state.settings.volume ?? 1;
    if (state.current) updateNowPlayingUI();
  }
}

function preloadXfade() {
  if (state.xfadeLoaded || state.xfadeActive) return;
  const idx = computeNextIndex();
  if (idx == null) return;
  const song = state.queue[idx];
  if (!song) return;
  state.xfadeNextIndex = idx;
  state.xfadeLoaded = true;
  audioXfade.src = song.source === "local" ? `/api/local/file/${song.id.split(":")[1]}` : `/api/stream/${song.videoId}`;
  audioXfade.playbackRate = parseFloat(state.settings.speed || 1);
  audioXfade.volume = 0;
}

function startXfadePlayback() {
  if (!state.xfadeLoaded || state.xfadeActive) return;
  if (audio.paused || !audio.duration) return;
  state.xfadeActive = true;
  const baseVol = state.settings.volume ?? 1;
  const nextSong = state.xfadeNextIndex != null ? state.queue[state.xfadeNextIndex] : null;
  uiCrossfadeTo(nextSong);
  audioXfade.play().catch(() => cancelXfade());
  const xf = getXfade();
  const dt = 0.05;
  let elapsed = 0;
  clearInterval(xfadeTimer);
  xfadeTimer = setInterval(() => {
    elapsed += dt;
    const k = Math.min(1, elapsed / xf);
    audioXfade.volume = baseVol * k;
    audio.volume = baseVol * (1 - k);
    if (k >= 1) { clearInterval(xfadeTimer); xfadeTimer = null; }
  }, dt * 1000);
}

function handoffXfade() {
  const pos = audioXfade.readyState >= 2 ? (audioXfade.currentTime || 0) : 0;
  const idx = state.xfadeNextIndex;
  resetXfade();
  if (idx == null || idx >= state.queue.length) { next(false); return; }
  state.qIndex = idx;
  state.scrobbled = false;
  state.statRecorded = false;
  const song = state.queue[idx];
  if (!song) { next(false); return; }
  state.current = song;
  const src = song.source === "local" ? `/api/local/file/${song.id.split(":")[1]}` : `/api/stream/${song.videoId}`;
  audio.src = src;
  audio.playbackRate = parseFloat(state.settings.speed || 1);
  audio.volume = state.settings.volume ?? 1;
  audio.currentTime = pos;
  audio.play().catch(() => {});
  updateNowPlayingUI();
  loadLyrics(song);
  recordPlay();
  updateMediaSession();
  if (state.settings.dynamic_color) sampleArtColor(song);
  scheduleNextUp();
  if (npOpen) renderQueuePanel();
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

async function loadLyrics(song, provider) {
  state.lyrics = null;
  $("#lyrics").innerHTML = `<div class="lyrics-empty">${t("lyrics.loading")}</div>`;
  if (song.source === "local") {
    $("#lyrics").innerHTML = `<div class="lyrics-empty">${t("lyrics.noLocal")}</div>`;
    setLyricsProviderUi(null);
    return;
  }
  setLyricsProviderUi(provider || state.settings.lyrics_provider || "auto");
  try {
    const data = await api(`/api/lyrics?title=${encodeURIComponent(song.title)}&artist=${encodeURIComponent(song.artist || "")}&duration=${song.duration || 0}&provider=${encodeURIComponent(provider || "auto")}&video_id=${encodeURIComponent(song.videoId || "")}`);
    if (data.error) {
      $("#lyrics").innerHTML = `<div class="lyrics-empty">${esc(data.error)}</div>`;
      return;
    }
    state.lyrics = data;
    setLyricsProviderUi(data.provider || "auto");
    renderLyrics();
  } catch {
    $("#lyrics").innerHTML = `<div class="lyrics-empty">${t("lyrics.fail")}</div>`;
  }
}

function setLyricsProviderUi(provider) {
  const row = $("#lyrProviders");
  if (!row) return;
  row.classList.toggle("hidden", !provider || provider === "auto");
  $$("#lyrProviders .lp-btn").forEach((b) => b.classList.toggle("active", b.dataset.lyrProvider === provider));
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
    wrap.innerHTML = `<div class="lyrics-empty">${t("lyrics.none")}</div>`;
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
  const arr = Array.isArray(song) ? song : [song];
  state.pendingSong = arr;
  await loadPlaylists();
  const modal = $("#playlistModal");
  const list = $("#plList");
  list.innerHTML = state.playlists.map((p) =>
    `<div class="pl-row" data-pl-add="${p.id}"><div class="lib-art ph">${ICONS.list}</div><div><div class="lib-name">${esc(p.name)}</div><div class="lib-count">${p.songs.length} ${t("lib.songs")}</div></div><span style="margin-left:auto;color:var(--primary)">${ICONS.plus}</span></div>`
  ).join("") || `<div class="lyrics-empty">${t("playlists.none")}</div>`;
  $("#plModalTitle").textContent = arr.length > 1 ? `${t("pl.save")}: ${arr.length} ${t("lib.tracks")}` : `${t("pl.save")}: "${arr[0].title}"`;
  injectIcons(modal);
  modal.classList.remove("hidden");
  $("#plNewCreate").addEventListener("click", async () => {
    const name = $("#plNewName").value.trim();
    if (!name) { toast(t("toast.plName")); return; }
    try {
      const p = await api("/api/library/playlists", { method: "POST", body: JSON.stringify({ name }) });
      for (const s of arr) await api(`/api/library/playlists/${p.id}/songs`, { method: "POST", body: JSON.stringify(s) });
      toast(t("toast.plCreated"));
      $("#playlistModal").classList.add("hidden");
      await loadPlaylists();
    } catch (e) { toast(e.message); }
  });
}

async function addSongToPlaylist(pid) {
  const arr = Array.isArray(state.pendingSong) ? state.pendingSong : state.pendingSong ? [state.pendingSong] : [];
  if (!arr.length) return;
  try {
    for (const s of arr) await api(`/api/library/playlists/${pid}/songs`, { method: "POST", body: JSON.stringify(s) });
    toast(t("toast.plAdded"));
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
  const group = $("#libGroup");
  if (group) {
    const inLib = LIB_SUBPAGES.includes(name);
    setLibOpen(inLib ? true : group.classList.contains("open"));
    $("#libToggle").classList.toggle("lib-active", inLib);
  }
}

function setLibOpen(open) {
  const group = $("#libGroup");
  if (!group) return;
  group.classList.toggle("open", open);
  const caret = $("#libCaret");
  if (caret) { caret.dataset.ic = open ? "up" : "down"; injectIcons($("#libToggle")); }
}

const LIB_SUBPAGES = ["library", "liked", "playlists", "local", "offline", "top-songs"];

function navigate(name, params = {}) {
  state.view = name;
  state.viewParams = params;
  setActiveNav(name);
  viewEl.scrollTop = 0;
  if (name === "search") return renderSearch();
  if (name === "home") return renderHome();
  if (name === "library") return renderLibrary();
  if (name === "liked") return renderLiked();
  if (name === "playlists") return renderPlaylists();
  if (name === "local") return renderLocal();
  if (name === "offline") return renderOffline();
  if (name === "top-songs") return renderTopSongs();
  if (name === "stats") return renderStats();
  if (name === "releases") return renderReleases();
  if (name === "settings") return renderSettings();
  if (name === "album") return renderAlbum(params.browseId);
  if (name === "artist") return renderArtist(params.browseId);
  if (name === "playlist") return renderPlaylist(params.browseId);
  if (name === "local-playlist") return renderLocalPlaylist(params.pid);
  renderHome();
}

const MOODS = [["relax", "mood.relax"], ["energize", "mood.energize"], ["commute", "mood.commute"], ["feel-good", "mood.feelgood"], ["sad", "mood.sad"], ["romantic", "mood.romantic"]];

const SEARCH_TABS = [
  { id: "all", i18n: "search.tabAll", icon: "apps" },
  { id: "songs", i18n: "search.tabSongs", icon: "music" },
  { id: "videos", i18n: "search.tabVideos", icon: "smart" },
  { id: "albums", i18n: "search.tabAlbums", icon: "disc" },
  { id: "artists", i18n: "search.tabArtists", icon: "mic" },
];

const EXPLORE_CATEGORIES = [
  { id: "relax", label: "Relax", subKey: "mood.relax", icon: "self_improvement" },
  { id: "energize", label: "Energize", subKey: "mood.energize", icon: "bolt" },
  { id: "commute", label: "Commute", subKey: "mood.commute", icon: "directions_bus" },
  { id: "feel-good", label: "Feel Good", subKey: "mood.feelgood", icon: "sentiment_satisfied" },
  { id: "sad", label: "Sad", subKey: "mood.sad", icon: "water_drop" },
  { id: "romantic", label: "Romantic", subKey: "mood.romantic", icon: "heart" },
];

async function renderHome() {
  viewEl.innerHTML = `<div class="mood-row" id="moodRow">${MOODS.map(([k, sk]) => `<button class="chip mood" data-mood="${k}">${t(sk)}</button>`).join("")}</div>
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

    let hero = null;
    let side = [];
    let albums = [];
    if (vids.length) {
      const [trendTracks, albumRes] = await Promise.all([
        vids[0].browseId ? api(`/api/ytm/playlist/${encodeURIComponent(vids[0].browseId)}`).catch(() => null) : Promise.resolve(null),
        api(`/api/ytm/search?q=${encodeURIComponent("top albums")}&type=albums&limit=10`).catch(() => ({ items: [] })),
      ]);
      if (trendTracks && trendTracks.tracks && trendTracks.tracks.length) {
        const tk = trendTracks.tracks[0];
        hero = { videoId: tk.videoId, title: tk.title, artist: tk.artist, art: tk.art };
      } else {
        hero = vids[0];
      }
      side = vids.slice(1, 5);
      albums = (albumRes.items || []).slice(0, 10);
    }
    state.homeHero = hero;
    state.homeAlbums = albums;

    const html = [
      vids.length ? quickPicksHtml(hero, side) : "",
      plays.length ? continueHtml(plays) : "",
      arts.length ? artistsHtml(arts) : "",
      albums.length ? albumsHtml(albums) : "",
      vids.length ? playlistsHtml(vids) : "",
      gens.length ? genresHtml(gens) : "",
    ].filter(Boolean).join("");

    if (!html) body.innerHTML = emptyState(t("charts.none"), t("charts.noneSub"));
    else body.innerHTML = html;
  } catch (e) {
    body.innerHTML = emptyState(t("ytm.unavailable"), e.message + " — " + t("ytm.unavailableSub"));
  }
  injectIcons(body);
  return chartsSkeleton(body);
}

function secHeadHtml(icon, title) {
  return `<div class="sec-head">
    <div class="sec-title">${icon ? `<span class="msym">${icon}</span>` : ""}<span>${esc(title)}</span></div>
    <div class="sec-arrows">
      <button class="icon-btn small" data-scroll-back data-ic="chev_left" title=""></button>
      <button class="icon-btn small" data-scroll-fwd data-ic="chev_right" title=""></button>
    </div>
  </div>`;
}

function quickPicksHtml(hero, side) {
  const heroImg = hero.art
    ? `<img class="qp-hero-art" src="${esc(hero.art)}" loading="lazy">`
    : `<div class="qp-hero-art ph">${ICONS.music}</div>`;
  const heroInner = `${heroImg}
    <div class="qp-hero-grad"></div>
    <div class="qp-hero-meta">
      <div class="qp-hero-tag">${esc(t("home.quick"))}</div>
      <div class="qp-hero-title">${esc(hero.title || t("home.quick"))}</div>
      ${hero.artist ? `<div class="qp-hero-sub">${esc(hero.artist)}</div>` : hero.subtitle ? `<div class="qp-hero-sub">${esc(hero.subtitle)}</div>` : ""}
    </div>
    <div class="qp-hero-play">${ICONS.play}</div>`;
  const heroAttrs = hero.videoId
    ? `data-hero-play="1"`
    : `data-card data-type="${hero.type === "chart" ? "playlist" : hero.type}" data-browse="${esc(hero.browseId)}"`;
  const sideHtml = side.map((v) => `
    <div class="qp-side-item" data-card data-type="playlist" data-browse="${esc(v.browseId)}">
      ${v.art ? `<div class="qp-side-art"><img src="${esc(v.art)}" loading="lazy"></div>` : `<div class="qp-side-art ph">${ICONS.music}</div>`}
      <div class="qp-side-meta">
        <div class="qp-side-title">${esc(v.title || "Playlist")}</div>
        <div class="qp-side-sub">${esc(v.subtitle || "Playlist")}</div>
      </div>
      <span class="qp-side-ic">${ICONS.play}</span>
    </div>`).join("");
  return `<section class="home-sec"><div class="quick-picks">
    <div class="qp-hero" ${heroAttrs}>${heroInner}</div>
    <div class="qp-side">${sideHtml}</div>
  </div></section>`;
}

function continueHtml(plays) {
  const items = plays.map((p, i) => {
    const s = songFromPlay(p);
    return `<div class="cl-item" data-cl-play="${i}">
      ${s.art ? `<div class="cl-art"><img src="${esc(s.art)}" loading="lazy" onerror="this.remove()"></div>` : `<div class="cl-art ph">${ICONS.music}</div>`}
      <div class="cl-title">${esc(s.title || "Untitled")}</div>
      <div class="cl-sub">${esc(s.artist || "")}</div>
    </div>`;
  }).join("");
  return `<section class="home-sec">${secHeadHtml("history", t("home.continue"))}<div class="hscroll">${items}</div></section>`;
}

function artistsHtml(arts) {
  const items = arts.map((a) => `
    <div class="artist-card" data-card data-type="artist" data-browse="${esc(a.browseId)}">
      <div class="artist-art">${a.art ? `<img src="${esc(a.art)}" loading="lazy">` : `<div class="artist-art ph">${ICONS.music}</div>`}</div>
      <div class="artist-name">${esc(a.name)}</div>
      <div class="artist-sub">${esc(a.subscribers || "")}</div>
    </div>`).join("");
  return `<section class="home-sec">${secHeadHtml("mic", t("home.artists"))}<div class="hscroll">${items}</div></section>`;
}

function albumsHtml(albums) {
  const items = albums.map((a) => cardHtml(a.title, a.art, "album", a.browseId, a.artist || a.year || "")).join("");
  return `<section class="home-sec">${secHeadHtml("disc", t("home.topAlbum"))}<div class="hscroll">${items}</div></section>`;
}

function playlistsHtml(vids) {
  const items = vids.map((v) => cardHtml(v.title, v.art, "playlist", v.browseId, v.subtitle || "Playlist")).join("");
  return `<section class="home-sec">${secHeadHtml("list", t("home.playlists"))}<div class="hscroll">${items}</div></section>`;
}

function genresHtml(gens) {
  const items = gens.map((g) => cardHtml(g.title, g.art, "playlist", g.browseId, "Genre")).join("");
  return `<section class="home-sec">${secHeadHtml("apps", t("home.discover"))}<div class="hscroll">${items}</div></section>`;
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
    ? `<div class="card-art">${ICONS.music}<img src="${esc(art)}" loading="lazy" onerror="var p=this.parentElement;this.remove();p.classList.add('placeholder')"></div>`
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
    return { id: p.id || "ytm:" + vid, videoId: vid, title: p.title, artist: p.artist, album: p.album, duration: p.duration || 0, art: hdArt(p.art), source: "ytm", artists: p.artists || [], browseId: p.browseId };
  }
  return { id: p.id, videoId: "", title: p.title, artist: p.artist, album: p.album, duration: p.duration || 0, art: hdArt(p.art), source: "local", filepath: p.filepath || "", artists: p.artists || [] };
}

function recentRowHtml(p, i) {
  const art = hdArt(p.art);
  const artHtml = art
    ? `<div class="s-art">${ICONS.music}<img src="${esc(art)}" loading="lazy" onerror="var p=this.parentElement;this.remove();p.classList.add('ph')"></div>`
    : `<div class="s-art ph">${ICONS.music}</div>`;
  return `<div class="song-row recent-row" data-i="${i}">
    <span class="num">${i + 1}</span>
    ${artHtml}
    <span class="s-title">${esc(p.title || "Untitled")}</span>
    <span class="s-artist">${esc(p.artist || "")}</span>
    <span class="s-album">${esc(p.album || "")}</span>
    <span class="s-dur" title="${t("recent.played")}">${timeAgo(p.ts)}</span>
    <span class="rp-play">${ICONS.play}</span>
  </div>`;
}

async function renderSearch() {
  const q = state.viewParams.q || "";
  if (state.viewParams.type && SEARCH_TABS.some((tb) => tb.id === state.viewParams.type)) state.searchType = state.viewParams.type;
  if (!q) {
    viewEl.innerHTML = '<div id="searchLanding"></div>';
    injectIcons(viewEl);
    renderExploreLanding($("#searchLanding"));
    return;
  }
  viewEl.innerHTML = `<div class="tabs" id="searchTabs">
    ${SEARCH_TABS.map((tab) =>
      `<button class="tab ${state.searchType === tab.id ? "active" : ""}" data-tab="${tab.id}">
        <span class="t-ic">${ICONS[tab.icon]}</span><span class="t-label">${t(tab.i18n)}</span>
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
      results.innerHTML = emptyState(t("search.noResults"), t("search.nothingFor").replace("{q}", q));
      return;
    }
    if (state.searchType === "songs" || state.searchType === "videos") {
      state.renderList = data.items;
      results.innerHTML = searchListHtml(data.items, { title: "Top results" });
      bindSearchRows(results, data.items);
      markPlaying();
      return;
    }
    const type = state.searchType;
    results.innerHTML = searchGridHtml(type, data.items);
  } catch (e) {
    results.innerHTML = emptyState(t("search.failed"), e.message);
  }
}

function searchListHtml(items, { title = "Top results", idxMap = null } = {}) {
  const rows = items.map((s, i) => songRowHtml(s, idxMap ? (idxMap.get(s.videoId) ?? i) : i, { showAlbum: true })).join("");
  return `<div class="top-label"><span class="top-bar"></span><span class="tl-text">${esc(title)}</span></div>
    <div class="song-table">${rows}</div>`;
}

function searchGridHtml(type, items) {
  const cfg = { albums: [t("search.tabAlbums"), "album"], artists: [t("explore.artists"), "artist"], playlists: [t("search.playlists"), "playlist"] }[type] || [type, type];
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
    results.innerHTML = emptyState(t("search.noResults"), t("search.nothingFor").replace("{q}", q));
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
    if (restSongs.length) html += `<section class="srch-section">${searchListHtml(restSongs, { title: t("search.tabSongs"), idxMap })}</section>`;
    if (restVids.length) html += `<section class="srch-section">${searchListHtml(restVids, { title: t("search.tabVideos"), idxMap })}</section>`;
  }
  if (aList.length) html += `<section class="srch-section">${searchGridHtml("albums", aList)}</section>`;
  if (rList.length) html += `<section class="srch-section">${searchGridHtml("artists", rList)}</section>`;
  if (pList.length) html += `<section class="srch-section">${searchGridHtml("playlists", pList)}</section>`;
  results.innerHTML = html;
  bindSearchRows(results, combined);
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

    html += `<section class="section"><div class="section-title">${t("explore.moods")}</div>
      <div class="exp-grid">${EXPLORE_CATEGORIES.map((c, i) => {
        const art = vids[i % Math.max(1, vids.length)];
        return `<button class="exp-card grad-${i % 6}" data-mood="${c.id}">
          ${art && art.art ? `<span class="exp-thumb"><img src="${esc(art.art)}" loading="lazy" alt=""></span>` : `<span class="exp-ic">${ICONS[c.icon]}</span>`}
          <span class="exp-label">${t(c.subKey)}</span>
        </button>`;
      }).join("")}</div></section>`;

    if (vids.length) {
      html += `<section class="section"><div class="section-title">${ICONS.trending_up} ${t("explore.suggestions")}</div>
        <div class="sugg-grid">${vids.slice(0, 10).map((v, i) => `
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
      html += `<section class="section"><div class="section-title">${ICONS.mic} ${t("explore.artists")}</div>
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

    content.innerHTML = html || emptyState(t("charts.none"), t("charts.noneSub"));
  } catch (e) {
    content.innerHTML = emptyState(t("ytm.unavailable"), e.message + " — " + t("ytm.unavailableSub"));
  }
  injectIcons(content);
}

function loadingHtml() {
  return '<div class="empty-state"><div class="es-ic" style="animation:discspin 1s linear infinite">' + ICONS.disc + '</div><p>' + t("common.loading") + '</p></div>';
}

function songRowHtml(s, i, { showAlbum = true, actions = true, list = false, artFallback = "" } = {}) {
  const artSrc = s.art || artFallback;
  const artHtml = artSrc
    ? `<div class="s-art">${ICONS.music}<img src="${esc(artSrc)}" loading="lazy" onerror="var p=this.parentElement;this.remove();p.classList.add('ph')"></div>`
    : `<div class="s-art ph">${ICONS.music}</div>`;
  const acts = actions
    ? `<div class="s-actions">
        <button class="icon-btn s-hl" data-heart data-sid="${esc(s.id)}" title="${t("song.like")}">${ICONS["heart-out"]}</button>
        <button class="icon-btn s-hl" data-pl-add-btn title="${t("pl.save")}">${ICONS.plus}</button>
        <button class="icon-btn s-more" data-more title="${t("common.more")}">${ICONS.more}</button>
        <div class="s-more-menu" data-more-menu>
          <button class="m-item" data-heart data-sid="${esc(s.id)}">${ICONS.heart}<span>${t("song.like")}</span></button>
          <button class="m-item" data-pl-add-btn>${ICONS.plus}<span>${t("pl.addTo")}</span></button>
          <button class="m-item" data-share>${ICONS.share}<span>${t("common.share")}</span></button>
        </div>
      </div>`
    : "";
  if (list) {
    const sub = [s.artist, s.duration ? fmtTime(s.duration) : ""].filter(Boolean).join(" • ");
    return `<div class="song-row srow-list" data-i="${i}" data-sid="${esc(s.id)}">
    <span class="num">${i + 1}</span>
    ${artHtml}
    <div class="s-main"><span class="s-title">${esc(s.title)}</span>${sub ? `<span class="s-sub">${esc(sub)}</span>` : ""}</div>
    ${acts}
  </div>`;
  }
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

function songTableHtml(songs, showAlbum = true, actions = true, list = false, artFallback = "") {
  const head = list
    ? `<div class="song-table-head srow-list-head"><span></span><span></span><span>${t("song.title")}</span><span></span></div>`
    : `<div class="song-table-head">
    <span></span><span></span><span>${t("song.title")}</span><span>${t("song.artist")}</span>${showAlbum ? `<span class='h-album'>${t("song.album")}</span>` : ""}<span style='text-align:right'>${t("song.duration")}</span><span></span>
  </div>`;
  const rows = songs.map((s, i) => songRowHtml(s, i, { showAlbum, actions, list, artFallback })).join("");
  return `<div class="song-table">${head}${rows}</div>`;
}

async function loadLib() {
  if (!state.lib) {
    const [sum, recent, liked, pls] = await Promise.all([
      api("/api/library/summary"),
      api("/api/library/recent?limit=12").catch(() => ({ plays: [] })),
      api("/api/library/liked").catch(() => ({ songs: [] })),
      api("/api/library/playlists").catch(() => ({ playlists: [] })),
    ]);
    state.lib = { sum, recent: recent.plays || [], liked: liked.songs || [], playlists: pls.playlists || [] };
  }
  return state.lib;
}

function libHighlightHtml(sum) {
  const top = sum.top_song;
  if (!top) {
    return `<section class="lib-highlight"><div class="lh-art ph">${ICONS.trending_up}</div>
      <div class="lh-meta"><div class="lh-label">${t("lib.mostPlayed")}</div>
      <div class="lh-title">${t("lib.noPlays")}</div><div class="lh-sub">${t("lib.noPlaysSub")}</div></div></section>`;
  }
  const art = hdArt(top.art);
  return `<section class="lib-highlight">
    <div class="lh-art${art ? "" : " ph"}">${ICONS.music}${art ? `<img src="${esc(art)}" loading="lazy" onerror="var p=this.parentElement;this.remove();p.classList.add('ph')">` : ""}</div>
    <div class="lh-meta">
      <div class="lh-label">${t("lib.mostPlayed")}</div>
      <div class="lh-title">${esc(top.title || "Untitled")}${top.artist ? " • " + esc(top.artist) : ""}</div>
      <div class="lh-sub">${t("lib.playsCount", { n: top.plays })}</div>
    </div>
    <div class="hero-actions" style="margin:0"><button class="btn-stadium" id="libHLPlay">${ICONS.play} ${t("common.play")}</button></div>
  </section>`;
}

function libShortcutsHtml(sum) {
  const items = [
    { nav: "liked", icon: "heart", name: t("nav.liked"), sub: `${sum.liked_count} ${t("lib.songs")}` },
    { nav: "offline", icon: "download", name: t("lib.offlineCard"), sub: `0 ${t("lib.songs")}`, muted: true },
    { nav: "local", icon: "folder", name: t("nav.local"), sub: `${sum.local_songs} ${t("lib.songs")}` },
    { nav: "offline", icon: "download", name: t("lib.cacheCard"), sub: `0 ${t("lib.songs")}`, muted: true },
    { nav: "top-songs", icon: "trending_up", name: t("lib.top50"), sub: `${sum.top_songs.length} ${t("lib.songs")}` },
  ];
  return `<section class="section">
    <div class="section-title">${ICONS.apps} ${t("lib.shortcuts")}</div>
    <div class="lib-shortcuts">${items.map((it) => `
      <button class="ls-card${it.muted ? " disabled" : ""}" data-ls-nav="${it.nav}">
        <span class="ls-ic">${ICONS[it.icon]}</span>
        <span><div class="ls-name">${esc(it.name)}</div><div class="ls-sub">${esc(it.sub)}</div></span>
      </button>`).join("")}</div>
  </section>`;
}

function libRecentHtml(recent) {
  if (!recent.length) return "";
  return `<section class="section">
    <div class="section-title">${ICONS.history} ${t("lib.recentTitle")}</div>
    <div class="hscroll" id="libRecent">${recent.map((p) => {
      const art = hdArt(p.art);
      return `<div class="cl-item" data-lib-play="${esc(p.id)}" title="${esc(p.title || "")}">
        <div class="cl-art${art ? "" : " ph"}">${ICONS.music}${art ? `<img src="${esc(art)}" loading="lazy" onerror="var p=this.parentElement;this.remove();p.classList.add('ph')">` : ""}</div>
        <div class="cl-title">${esc(p.title || "Untitled")}</div>
        <div class="cl-sub">${esc(p.artist || "")}</div>
      </div>`;
    }).join("")}</div>
  </section>`;
}

function libPlaylistsSection() {
  const pls = state.lib.playlists || [];
  return `<section class="section">
    <div class="section-title">${ICONS.list} ${t("nav.playlists")}</div>
    ${pls.length ? `<div class="card-grid">${pls.map((p) => `
      <div class="card" data-local-pl="${p.id}">
        <div class="card-art placeholder" style="background:var(--accent-grad)">${ICONS.list}</div>
        <div class="card-title">${esc(p.name)}</div>
        <div class="card-sub">${p.songs.length} ${t("lib.songs")}</div>
      </div>`).join("")}</div>` : emptyState(t("playlists.none"), t("playlists.noneSub"))}
  </section>`;
}

function libArtistsSection(sum, full = false) {
  const rows = sum.top_artists || [];
  if (!rows.length) return "";
  const list = full ? rows : rows.slice(0, 6);
  return `<section class="section">
    <div class="section-title">${ICONS.mic} ${t("search.tabArtists")}</div>
    <div style="display:flex;flex-direction:column;gap:10px">${list.map((r) => `
      <div class="lib-artist-row">
        <span class="la-av">${ICONS.mic}</span>
        <span><div class="la-name">${esc(r[0])}</div><div class="la-plays">${t("lib.playsCount", { n: r[1] })}</div></span>
      </div>`).join("")}</div>
  </section>`;
}

function bindLibEvents() {
  const body = $("#libBody");
  if (!body) return;
  const play = $("#libHLPlay");
  if (play) play.addEventListener("click", () => {
    const songs = (state.lib.sum.top_songs || []).map(songFromPlay);
    if (songs.length) playQueue(songs, 0);
  });
  $$(".ls-card").forEach((c) => c.addEventListener("click", () => navigate(c.dataset.lsNav)));
  $$(".card[data-local-pl]").forEach((c) => c.addEventListener("click", () => renderLocalPlaylist(c.dataset.localPl)));
  $$(".cl-item[data-lib-play]").forEach((c) => c.addEventListener("click", async () => {
    const p = state.lib.recent.find((x) => (x.id || "") === c.dataset.libPlay);
    if (!p) return;
    const song = songFromPlay(p);
    await api("/api/library/play", { method: "POST", body: JSON.stringify(song) }).catch(() => {});
    playQueue([song], 0);
  }));
  const tbl = body.querySelector(".song-table");
  if (tbl) {
    state.renderList = state.lib.liked;
    bindSongRows(tbl, state.lib.liked);
    markPlaying();
  }
}

async function renderLibrary() {
  const LIB_FILTERS = [["all", "releases.all"], ["playlists", "nav.playlists"], ["songs", "search.tabSongs"], ["artists", "search.tabArtists"]];
  const f = state.libFilter || "all";
  viewEl.innerHTML = `<div class="lib-chips">${LIB_FILTERS.map(([id, k]) => `<button class="chip mood ${f === id ? "active" : ""}" data-lib-filter="${id}">${t(k)}</button>`).join("")}</div>
    <div id="libBody">${loadingHtml()}</div>`;
  injectIcons(viewEl);
  $$(".lib-chips .chip").forEach((c) => c.addEventListener("click", () => { state.libFilter = c.dataset.libFilter; renderLibrary(); }));
  try {
    await loadLib();
  } catch (e) { $("#libBody").innerHTML = emptyState("Error", e.message); injectIcons(viewEl); return; }
  const { sum, recent, liked } = state.lib;
  const parts = [];
  if (f === "all") {
    parts.push(libHighlightHtml(sum), libShortcutsHtml(sum), libRecentHtml(recent));
    if (sum.playlists_count) parts.push(libPlaylistsSection());
    if (sum.top_songs.length) parts.push(libArtistsSection(sum));
  }
  if (f === "playlists") parts.push(libPlaylistsSection());
  if (f === "songs") parts.push(`<section class="section"><div class="section-title">${ICONS.heart} ${t("nav.liked")}</div>${liked.length ? songTableHtml(liked) : emptyState(t("liked.none"), t("liked.noneSub"))}</section>`);
  if (f === "artists") parts.push(libArtistsSection(sum, true));
  $("#libBody").innerHTML = parts.join("") || emptyState(t("playlists.none"), t("playlists.noneSub"));
  injectIcons(viewEl);
  bindLibEvents();
}

async function renderOffline() {
  viewEl.innerHTML = `<div class="page-head"><div class="page-title">${t("nav.offline")}</div><div class="page-sub">${t("lib.emptyCacheSub")}</div></div><div id="offlineBody"></div>`;
  $("#offlineBody").innerHTML = emptyState(t("lib.emptyCache"), t("lib.emptyCacheSub"));
  injectIcons(viewEl);
}

async function renderTopSongs() {
  viewEl.innerHTML = `<div class="hero">
    <div class="hero-art ph">${ICONS.trending_up}</div>
    <div class="hero-meta">
      <div class="hero-type">${t("common.topSongs")}</div>
      <div class="hero-title">${t("lib.top50")}</div>
      <div class="hero-sub" id="topCount"></div>
      <div class="hero-actions">
        <button class="btn-stadium" id="topPlay">${ICONS.play} ${t("common.playTop")}</button>
        <button class="circ" id="topShuffle" data-ic="shuffle" title="${t("common.shuffle")}"></button>
      </div>
    </div></div><div id="topBody">${loadingHtml()}</div>`;
  injectIcons(viewEl);
  try {
    const data = await api("/api/library/stats");
    const songs = (data.top_songs || []).map(songFromPlay);
    state.renderList = songs;
    $("#topCount").textContent = `${songs.length} ${t("lib.songs")}`;
    const body = $("#topBody");
    if (!songs.length) { body.innerHTML = emptyState(t("stats.noPlays"), t("lib.noPlaysSub")); injectIcons(viewEl); return; }
    body.innerHTML = songTableHtml(songs);
    bindSongRows(body, songs);
    $("#topPlay").addEventListener("click", () => playQueue(songs, 0));
    $("#topShuffle").addEventListener("click", () => { state.shuffle = true; playQueue(songs, Math.floor(Math.random() * songs.length)); syncShuffle(); });
    markPlaying();
  } catch (e) { $("#topBody").innerHTML = emptyState("Error", e.message); }
  injectIcons(viewEl);
}

async function renderLiked() {
  viewEl.innerHTML = `<div class="hero">
    <div class="hero-art ph">${ICONS.heart}</div>
    <div class="hero-meta">
      <div class="hero-type">${t("nav.bliked")}</div>
      <div class="hero-title">${t("page.liked")}</div>
      <div class="hero-sub" id="likedCount"></div>
      <div class="hero-actions">
        <button class="btn-stadium" id="likedPlayAll">${ICONS.play} ${t("common.play")}</button>
        <button class="circ" id="likedShuffle" data-ic="shuffle" title="${t("common.shuffle")}"></button>
      </div>
    </div></div><div id="likedBody">${loadingHtml()}</div>`;
  injectIcons(viewEl);
  try {
    const data = await api("/api/library/liked");
    const songs = data.songs || [];
    $("#likedCount").textContent = `${songs.length} ${t("lib.songs")}`;
    const body = $("#likedBody");
    if (!songs.length) {
      body.innerHTML = emptyState(t("liked.none"), t("liked.noneSub"));
      return;
    }
    state.renderList = songs;
    body.innerHTML = songTableHtml(songs);
    bindSongRows(body, songs);
    $("#likedPlayAll").addEventListener("click", () => playQueue(songs, 0));
    $("#likedShuffle").addEventListener("click", () => { state.shuffle = true; playQueue(songs, Math.floor(Math.random() * songs.length)); syncShuffle(); });
    markPlaying();
  } catch (e) {
    $("#likedBody").innerHTML = emptyState("Error", e.message);
  }
  injectIcons(viewEl);
}

async function renderPlaylists() {
  viewEl.innerHTML = `<div class="page-head"><div class="page-title">${t("page.playlists")}</div><div class="page-sub">${t("playlists.sub")}</div>
    <div style="margin-top:14px"><button class="btn" id="plCreate">${ICONS.plus} ${t("playlists.new")}</button></div></div>
    <div id="plGrid"></div>`;
  injectIcons(viewEl);
  const grid = $("#plGrid");
  $("#plCreate").addEventListener("click", async () => {
    const name = prompt(t("playlists.name"));
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
      grid.innerHTML = emptyState(t("playlists.none"), t("playlists.noneSub"));
      return;
    }
    grid.innerHTML = `<div class="card-grid">${state.playlists.map((p) => `
      <div class="card" data-local-pl="${p.id}">
        <div class="card-art placeholder" style="background:var(--accent-grad)">${ICONS.list}</div>
        <div class="card-title">${esc(p.name)}</div>
        <div class="card-sub">${p.songs.length} ${t("lib.songs")}</div>
      </div>`).join("")}</div>`;
  } catch (e) { grid.innerHTML = emptyState("Error", e.message); }
  injectIcons(grid);
}

async function renderLocalPlaylist(pid) {
  const p = state.playlists.find((x) => x.id === pid);
  if (!p) { renderPlaylists(); return; }
  const songs = p.songs || [];
  viewEl.innerHTML = `<div class="hero">
    <div class="hero-art ph">${ICONS.list}</div>
    <div class="hero-meta">
      <div class="hero-type">${t("page.playlist")}</div>
      <div class="hero-title">${esc(p.name)}</div>
      <div class="hero-sub">${p.description ? esc(p.description) : ""} ${songs.length} ${t("lib.songs")}</div>
      <div class="hero-actions">
        <button class="btn-stadium" id="lpPlay">${ICONS.play} ${t("common.play")}</button>
        <button class="circ" id="lpShuffle" data-ic="shuffle" title="${t("common.shuffle")}"></button>
        <button class="circ" id="lpRename" data-ic="edit" title="${t("playlists.rename")}"></button>
        <button class="circ danger" id="lpDelete" data-ic="trash" title="${t("playlists.delete")}"></button>
      </div>
    </div></div><div id="lpBody"></div>`;
  injectIcons(viewEl);
  const body = $("#lpBody");
  state.renderList = songs;
  body.innerHTML = songs.length ? songTableHtml(songs) : emptyState(t("playlists.empty"), t("playlists.emptySub"));
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
      <button class="btn ghost" id="localBrowse">${ICONS.folder} ${t("local.choose")}</button>
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
      if (!root) { body.innerHTML = emptyState(t("local.chooseFirst"), t("local.chooseFirstSub")); return; }
      data = await api("/api/local/scan", { method: "POST", body: JSON.stringify({ root }) });
    } else {
      data = await api("/api/local/library");
    }
    state.local = data;
    const songs = data.songs || [];
    if (!songs.length) {
      body.innerHTML = emptyState(t("local.none"), t("local.noneSub"));
      return;
    }
    state.renderList = songs;
    body.innerHTML = `<div class="section-title">${songs.length} ${t("lib.tracks")}</div>` + songTableHtml(songs, true);
    bindSongRows(body, songs);
    markPlaying();
  } catch (e) {
    body.innerHTML = emptyState(t("local.scanFail"), e.message);
  }
  injectIcons(body);
}

async function renderFolderBrowser(path) {
  const box = $("#folderBrowser");
  box.classList.remove("hidden");
  box.innerHTML = loadingHtml();
  try {
    const data = await api("/api/local/dir?path=" + encodeURIComponent(path));
    let html = `<div class="section-title">${t("folder.choose")}</div>
      <div style="margin-bottom:10px;display:flex;gap:8px">
        <button class="btn ghost" id="fbUp" ${!data.path ? "disabled" : ""}>${t("folder.up")}</button>
        <span class="set-desc" style="align-self:center">${esc(data.path || "Drives")}</span>
      </div>`;
    if (data.items && data.items.length) {
      html += data.items.filter((i) => i.isDir).map((i) =>
        `<div class="dir-row" data-fb-dir="${esc(i.path)}">${ICONS.folder}<span>${esc(i.name)}</span></div>`).join("");
      html += `<div style="margin-top:14px"><button class="btn" id="fbUse">${ICONS.check} ${t("folder.use")}</button></div>`;
    } else {
      html += `<div class="lyrics-empty">${t("folder.none")}</div>`;
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
      <div class="hero-art${a.art ? "" : " ph"}">${ICONS.music}${a.art ? `<img src="${esc(a.art)}" alt="" onerror="var h=this.parentElement;this.remove();h.classList.add('ph')">` : ""}</div>
      <div class="hero-meta">
        <div class="hero-type">${t("page.album")}</div>
        <div class="hero-title">${esc(a.title)}</div>
        <div class="hero-sub">${esc(a.artist)}${a.year ? " • " + esc(a.year) : ""}</div>
        <div class="hero-actions">
          <button class="btn-stadium" id="alPlay">${ICONS.play} ${t("common.play")}</button>
          <button class="circ" id="alShuffle" data-ic="shuffle" title="${t("common.shuffle")}"></button>
          <button class="circ" id="alAdd" data-ic="plus" title="${t("pl.addTo")}"></button>
        </div>
      </div></div><div id="alTracks"></div>`;
    const tracks = a.tracks || [];
    state.renderList = tracks;
    $("#alTracks").innerHTML = songTableHtml(tracks, false, true, true, a.art || "");
    bindSongRows($("#alTracks"), tracks);
    $("#alPlay").addEventListener("click", () => playQueue(tracks, 0));
    $("#alShuffle").addEventListener("click", () => { state.shuffle = true; playQueue(tracks, Math.floor(Math.random() * tracks.length)); syncShuffle(); });
    $("#alAdd").addEventListener("click", () => openPlaylistModal(tracks));
    markPlaying();
  } catch (e) { viewEl.innerHTML = emptyState("Error", e.message); }
  injectIcons(viewEl);
}

async function renderArtist(browseId) {
  viewEl.innerHTML = loadingHtml();
  try {
    const a = await api("/api/ytm/artist/" + browseId);
    if (a.error) throw new Error(a.error);
    const subLine = [a.subscribers, a.monthlyListeners].filter(Boolean).join(" • ");
    viewEl.innerHTML = `<div class="hero artist-hero">
      <div class="hero-art${a.art ? "" : " ph"}">${ICONS.music}${a.art ? `<img src="${esc(a.art)}" alt="" onerror="var h=this.parentElement;this.remove();h.classList.add('ph')">` : ""}</div>
      <div class="hero-meta">
        <div class="hero-type">${t("page.artist")}</div>
        <div class="hero-title">${esc(a.name)}</div>
        <div class="hero-sub">${subLine ? esc(subLine) : ""}</div>
        <div class="hero-actions">
          <button class="btn-stadium" id="arPlayTop">${ICONS.play} ${t("common.playTop")}</button>
          <button class="circ" id="arShuffle" data-ic="shuffle" title="${t("common.shuffle")}"></button>
          ${a.songs_browse_id ? `<button class="circ" id="arRadio" data-ic="radio" title="${t("common.radio")}"></button>` : ""}
        </div>
      </div></div>
      <div class="section"><div class="section-title">${t("search.albums")}</div><div id="arAlbums" class="card-grid"></div></div>
      <div class="section"><div class="section-title">${t("common.topSongs")}</div><div id="arSongs"></div></div>`;
    injectIcons(viewEl);
    $("#arAlbums").innerHTML = (a.albums || []).map((al) => cardHtml(al.title, al.art, "album", al.browseId, al.year || t("page.album"))).join("") || emptyState(t("artist.noAlbums"), "");
    if (a.songs_browse_id) {
      $("#arPlayTop").addEventListener("click", async () => {
        const res = await api("/api/ytm/artist/" + browseId + "/songs");
        if (res.tracks) playQueue(res.tracks, 0);
      });
      $("#arShuffle").addEventListener("click", async () => {
        const res = await api("/api/ytm/artist/" + browseId + "/songs");
        if (res.tracks && res.tracks.length) {
          state.shuffle = true;
          playQueue(res.tracks, Math.floor(Math.random() * res.tracks.length));
          syncShuffle();
        }
      });
      if (a.songs_browse_id) {
        $("#arRadio").addEventListener("click", async () => {
          const songs = await api("/api/ytm/artist/" + browseId + "/songs");
          const seed = songs.tracks && songs.tracks[0];
          if (!seed || !seed.videoId) return;
          const res = await api("/api/ytm/nextup/" + seed.videoId + "?limit=40");
          if (res.items && res.items.length) playQueue(res.items, 0);
        });
      }
      const res = await api("/api/ytm/artist/" + browseId + "/songs");
      if (res.error) $("#arSongs").innerHTML = emptyState(t("artist.noSongs"), res.error);
      else {
        const tracks = res.tracks || [];
        state.renderList = tracks;
        $("#arSongs").innerHTML = songTableHtml(tracks.slice(0, 20), true);
        bindSongRows($("#arSongs"), tracks);
        markPlaying();
      }
    } else {
      $("#arSongs").innerHTML = emptyState(t("artist.noTop"), "");
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
      <div class="hero-art${p.art ? "" : " ph"}">${ICONS.list}${p.art ? `<img src="${esc(p.art)}" alt="" onerror="var h=this.parentElement;this.remove();h.classList.add('ph')">` : ""}</div>
      <div class="hero-meta">
        <div class="hero-type">${t("page.playlist")}</div>
        <div class="hero-title">${esc(p.title)}</div>
        <div class="hero-sub">${p.trackCount || tracks.length} ${t("lib.songs")}${p.description ? " • " + esc(p.description) : ""}</div>
        <div class="hero-actions">
          <button class="btn-stadium" id="plPlay">${ICONS.play} ${t("common.play")}</button>
          <button class="circ" id="plShuffle" data-ic="shuffle" title="${t("common.shuffle")}"></button>
          <button class="circ" id="plAdd" data-ic="plus" title="${t("pl.addTo")}"></button>
        </div>
      </div></div><div id="plTracks"></div>`;
    state.renderList = tracks;
    $("#plTracks").innerHTML = songTableHtml(tracks, false, true, true, p.art || "");
    bindSongRows($("#plTracks"), tracks);
    $("#plPlay").addEventListener("click", () => playQueue(tracks, 0));
    $("#plShuffle").addEventListener("click", () => { state.shuffle = true; playQueue(tracks, Math.floor(Math.random() * tracks.length)); syncShuffle(); });
    $("#plAdd").addEventListener("click", () => openPlaylistModal(tracks));
    markPlaying();
  } catch (e) { viewEl.innerHTML = emptyState("Error", e.message); }
  injectIcons(viewEl);
}

async function renderStats() {
  viewEl.innerHTML = `<div class="page-head"><div class="page-title">${t("page.stats")}</div><div class="page-sub">${t("stats.sub")}</div></div>
  <div class="stat-cards" id="statCards"></div>
  <div class="set-group"><h3>${ICONS.stats} ${t("stats.topArtists")}</h3><div class="bar-chart" id="statArtists"></div></div>
  <div class="set-group"><h3>${ICONS.music} ${t("stats.topSongs")}</h3><div class="bar-chart" id="statSongs"></div></div>
  <div class="set-group"><h3>${ICONS.clock} ${t("stats.perDay")}</h3><div class="bar-chart" id="statDays"></div></div>`;
  injectIcons(viewEl);
  try {
    const s = await api("/api/library/stats");
    const cards = [
      [t("stats.total"), s.total_plays, "history"],
      [t("stats.topArtist"), s.top_artists[0] ? s.top_artists[0][0] : "-", "mic"],
      [t("stats.topSongPlays"), s.top_songs[0] ? s.top_songs[0].plays : "-", "trending_up"],
      [t("stats.daysTracked"), Object.keys(s.plays_per_day || {}).length, "calendar_month"],
    ];
    $("#statCards").innerHTML = cards.map(([l, n, ic]) =>
      `<div class="stat-card"><div class="stat-ic">${ICONS[ic]}</div><div class="stat-num">${esc(n)}</div><div class="stat-label">${esc(l)}</div></div>`
    ).join("");
    const artistArt = {};
    (s.top_songs || []).forEach((sng) => { if (sng.artist && !artistArt[sng.artist] && sng.art) artistArt[sng.artist] = sng.art; });
    const maxA = Math.max(1, ...(s.top_artists || []).map((a) => a[1]));
    $("#statArtists").innerHTML = (s.top_artists || []).slice(0, 15).map((a) => barRow(a[0], a[1], maxA, artistArt[a[0]] || "", true)).join("");
    const maxS = Math.max(1, ...(s.top_songs || []).map((a) => a.plays));
    $("#statSongs").innerHTML = (s.top_songs || []).slice(0, 15).map((a) => barRow(`${a.title} — ${a.artist}`, a.plays, maxS, a.art || "")).join("");
    const days = Object.entries(s.plays_per_day || {}).sort((a, b) => (a[0] < b[0] ? -1 : 1)).slice(-30);
    const maxD = Math.max(1, ...days.map((d) => d[1]));
    $("#statDays").innerHTML = days.length ? days.map((d) => barRow(d[0], d[1], maxD)).join("") : `<div class="lyrics-empty">${t("stats.noPlays")}</div>`;
  } catch (e) {
    viewEl.innerHTML = emptyState("Error", e.message);
  }
}
function barRow(name, val, max, art = "", round = false) {
  const pct = Math.max(3, Math.round((val / max) * 100));
  const artHtml = art
    ? `<span class="b-art${round ? " round" : ""}"><img src="${esc(art)}" loading="lazy" alt="" onerror="var p=this.parentElement;this.remove();p.classList.add('ph')"></span>`
    : "";
  return `<div class="bar-row">${artHtml}<span class="b-row-txt"><span class="b-name" title="${esc(name)}">${esc(name)}</span></span><div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div><span class="b-val">${esc(val)}</span></div>`;
}

/* ---------------- new releases ---------------- */
const REL_FILTERS = ["all", "Album", "Single", "EP"];

function releaseCardHtml(r) {
  return `<div class="rel-card" data-card data-type="album" data-browse="${esc(r.browseId)}">
    <div class="rel-art">
      ${r.art ? `<img src="${esc(r.art)}" loading="lazy" alt="">` : `<div class="rel-art-ph">${ICONS.music}</div>`}
      ${r.explicit ? `<span class="rel-e">E</span>` : ""}
      <button class="rel-play" data-rel-play="${esc(r.browseId)}" title="${esc(t("common.play"))}">${ICONS.play}</button>
    </div>
    <div class="rel-title" title="${esc(r.title)}">${esc(r.title)}</div>
    <div class="rel-sub" title="${esc(r.artists)}">${esc(r.artists)}</div>
  </div>`;
}

async function renderReleases() {
  viewEl.innerHTML = `<div class="page-head">
    <div class="page-title">${t("releases.title")}</div>
    <div class="page-sub">${t("releases.sub")}</div>
  </div>
  <div id="relContent">${loadingHtml()}</div>`;
  injectIcons(viewEl);
  const content = $("#relContent");
  try {
    const d = await api("/api/ytm/new_releases");
    if (d.error) throw new Error(d.error);
    const items = d.items || [];
    const groups = {
      all: items,
      Album: items.filter((x) => x.type === "Album"),
      Single: items.filter((x) => x.type === "Single"),
      EP: items.filter((x) => x.type === "EP"),
    };
    content.innerHTML = `
      <div class="rel-bar">
        <div class="rel-count"><span class="rel-num">${items.length}</span><span class="rel-label">${t("releases.count")}</span></div>
        <div class="rel-tabs">
          ${REL_FILTERS.map((f) => `<button class="chip rel-chip${f === "all" ? " active" : ""}" data-rel-filter="${f}">${t(f === "all" ? "releases.all" : "releases." + f.toLowerCase())}</button>`).join("")}
        </div>
      </div>
      <div id="relSections">${relSectionsHtml(groups, "all")}</div>`;
    $$("#relContent .rel-chip").forEach((ch) => {
      ch.addEventListener("click", () => {
        $$("#relContent .rel-chip").forEach((x) => x.classList.remove("active"));
        ch.classList.add("active");
        $("#relSections").innerHTML = relSectionsHtml(groups, ch.dataset.relFilter);
        injectIcons($("#relSections"));
      });
    });
  } catch (e) {
    content.innerHTML = emptyState(t("releases.err"), e.message || "");
  }
  injectIcons(content);
}

function relSectionsHtml(groups, filter) {
  let html = "";
  for (const type of ["Album", "Single", "EP"]) {
    const list = filter === "all" ? groups[type] : filter === type ? groups[type] : [];
    if (!list.length) continue;
    html += `<section class="section"><div class="section-title">${t("releases." + type.toLowerCase())}<span class="rel-sec-count">${list.length}</span></div>
      <div class="rel-grid">${list.map(releaseCardHtml).join("")}</div></section>`;
  }
  return html || `<div class="lyrics-empty">${t("releases.none")}</div>`;
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
        <button class="chip ${s.theme !== "light" ? "active" : ""}" data-theme-set="dark">${t("set.dark")}</button>
        <button class="chip ${s.theme === "light" ? "active" : ""}" data-theme-set="light">${t("set.light")}</button>
      </div></div>
    <div class="set-row"><div><div class="set-label">${t("set.accent")}</div><div class="set-desc">${t("set.accentDesc")}</div></div>
      <div class="swatches">${accents.map((a) => `<div class="swatch ${(s.accent || "#ff4f8b").toLowerCase() === a ? "active" : ""}" data-accent="${a}" style="background:${a}"></div>`).join("")}
      <input type="color" id="accentCustom" value="${s.accent || "#ff4f8b"}"></div></div>
    <div class="set-row"><div><div class="set-label">${t("set.dynamic")}</div><div class="set-desc">${t("set.dynamicDesc")}</div></div>
      <label class="switch"><input type="checkbox" id="setDynamic" ${s.dynamic_color ? "checked" : ""}><span></span></label></div>
    <div class="set-row"><div><div class="set-label">${t("set.country")}</div><div class="set-desc">${t("set.countryDesc")}</div></div>
      <select id="setCountry"><option>US</option><option>ID</option><option>JP</option><option>GB</option><option>IN</option><option>KR</option><option>BR</option><option>DE</option><option>FR</option><option>PH</option><option>SG</option><option>MY</option></select></div>
  </div>

  <div class="set-group"><h3>${ICONS.eq} ${t("set.playback")}</h3>
    <div class="set-row"><div><div class="set-label">${t("set.speed")}</div><div class="set-desc">${t("set.speedDesc")}</div></div>
      <select id="setSpeed">${[0.5, 0.75, 1, 1.25, 1.5, 2].map((v) => `<option value="${v}" ${(+s.speed || 1) === v ? "selected" : ""}>${v}×</option>`).join("")}</select></div>
    <div class="set-row"><div><div class="set-label">${t("set.crossfade")}</div><div class="set-desc">${t("set.crossfadeDesc")}</div></div>
      <label class="switch"><input type="checkbox" id="setCrossfade" ${s.crossfade > 0 ? "checked" : ""}><span></span></label></div>
    <div class="set-row" id="xfadeDurRow" ${s.crossfade > 0 ? "" : 'style="display:none"'}><div><div class="set-label">${t("set.crossfadeDur")}</div><div class="set-desc">${t("set.crossfadeDurDesc")}</div></div>
      <select id="setXfadeDur">${[2, 4, 6, 8].map((v) => `<option value="${v}" ${(+s.crossfade || 2) === v ? "selected" : ""}>${v}s</option>`).join("")}</select></div>
    <div class="set-row"><div><div class="set-label">${t("set.eq")}</div><div class="set-desc">${t("set.eqDesc")}</div></div>
      <button class="btn ghost" id="setOpenEq">${t("set.openEq")}</button></div>
  </div>

  <div class="set-group"><h3>${ICONS.disc} ${t("set.ytm")}</h3>
    <div class="set-row"><div><div class="set-label">${t("set.signin")}</div>
      <div class="set-desc">${t("set.cookieDesc")}</div></div>
      <input type="text" id="setCookie" placeholder="${t("set.cookiePh")}" value="${esc(s.ytm_cookie || "")}"></div>
    <div class="set-row"><div><div class="set-label">${t("set.status")}</div><div class="set-desc" id="ytmStatusText">${t("set.checking")}</div></div>
      <button class="btn ghost" id="setSaveCookie">${t("set.saveCookie")}</button></div>
  </div>

  <div class="set-group"><h3>${ICONS.stats} ${t("set.lf")}</h3>
    <div class="set-row"><div><div class="set-label">${t("set.apiKey")}</div></div><input type="text" id="lfKey" value="${esc(s.lastfm_api_key || "")}" placeholder="${t("set.apiKey")}"></div>
    <div class="set-row"><div><div class="set-label">${t("set.sharedSecret")}</div></div><input type="password" id="lfSecret" value="${esc(s.lastfm_api_secret || "")}" placeholder="${t("set.apiSecretPh")}"></div>
    <div class="set-row"><div><div class="set-label">${t("set.username")}</div></div><input type="text" id="lfUser" value="${esc(s.lastfm_username || "")}"></div>
    <div class="set-row"><div><div class="set-label">${t("set.password")}</div></div><input type="password" id="lfPass" placeholder="${t("set.passPh")}"></div>
    <div class="set-row"><div><div class="set-label">${t("set.status")}</div><div class="set-desc" id="lfStatus">...</div></div>
      <button class="btn ghost" id="lfConnect">${t("set.connect")}</button></div>
  </div>

  <div class="set-group"><h3>${ICONS.info || ICONS.home} ${t("set.about")}</h3>
    <div class="set-row"><div><div class="set-label">ArchiveTune for Windows</div><div class="set-desc">${t("set.aboutDesc")}</div></div></div>
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
  $("#setCrossfade").addEventListener("change", (e) => {
    const dur = $("#setXfadeDur").value || 2;
    setSetting("crossfade", e.target.checked ? +dur : 0);
    $("#xfadeDurRow").style.display = e.target.checked ? "" : "none";
  });
  $("#setXfadeDur").addEventListener("change", (e) => setSetting("crossfade", +e.target.value));
  $("#setOpenEq").addEventListener("click", () => openEq());
  $("#setSaveCookie").addEventListener("click", async () => {
    const cookie = $("#setCookie").value.trim();
    try {
      await api("/api/ytm/cookie", { method: "POST", body: JSON.stringify({ cookie }) });
      state.settings.ytm_cookie = cookie;
      toast(t("toast.cookieSaved"));
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
      if (res.ok) { toast(t("toast.lfConnected")); state.settings.lastfm_username = $("#lfUser").value.trim(); updateLfStatus(); }
      else toast("Last.fm: " + (res.error || t("lf.loginFailed")));
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
  if (key === "accent" || (key === "dynamic_color" && !value)) state.dynamicApplied = false;
  applySettingsToUi();
}

function applySettingsToUi() {
  const s = state.settings;
  document.body.classList.toggle("light", s.theme === "light");
  const themeBtn = $("#themeToggle");
  if (themeBtn) themeBtn.dataset.ic = s.theme === "light" ? "moon" : "sun";
  injectIcons($("#topbar"));
  if (!state.dynamicApplied) setAccent(s.accent || "#ff4f8b");
  if (!state.xfadeActive) audio.volume = s.volume ?? 1;
  audioXfade.volume = 0;
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
        <div class="s-art">${s.art ? `<img src="${esc(s.art)}">` : ICONS.music}
          ${i === state.qIndex ? `<span class="q-eq ${audio.paused ? "" : "an"}"><i></i><i></i><i></i></span>` : ""}
        </div>
        <div class="q-info"><div class="q-title">${esc(s.title)}</div><div class="q-sub">${esc(s.artist || "")}</div></div>
        <span class="q-dur">${fmtTime(s.duration)}</span>
        <div class="q-more">
          <button class="icon-btn small" data-more title="${t("queue.more")}">${ICONS.more}</button>
          <div class="s-more-menu" data-more-menu>
            <button class="m-item" data-q-del="${i}">${ICONS.trash}<span>${t("queue.remove")}</span></button>
          </div>
        </div>
      </div>`).join("")
    : `<div class="lyrics-empty">${t("queue.empty")}</div>`;
  const recHtml = state.nextUpSug && state.nextUpSug.length
    ? state.nextUpSug.map((s, i) => `
      <div class="queue-item sug" data-sug-play="${i}">
        <div class="s-art">${s.art ? `<img src="${esc(s.art)}">` : ICONS.music}</div>
        <div class="q-info"><div class="q-title">${esc(s.title)}</div><div class="q-sub">${esc(s.artist || "")}</div></div>
        <span class="q-dur">${fmtTime(s.duration)}</span>
        <div class="q-more">
          <button class="icon-btn small" data-more title="${t("queue.more")}">${ICONS.more}</button>
          <div class="s-more-menu" data-more-menu>
            <button class="m-item" data-sug-next="${i}">${ICONS.next}<span>${t("queue.playNext")}</span></button>
            <button class="m-item" data-sug-add="${i}">${ICONS.plus}<span>${t("queue.addToQueue")}</span></button>
          </div>
        </div>
      </div>`).join("")
    : loadingHtml();
  qp.innerHTML = `<div class="queue-inner">
    <div class="q-head">
      <div class="q-head-block">
        <div class="q-head-title">${t("queue.upnext")}${state.queue.length ? ` <span class="q-cnt">${state.queue.length}</span>` : ""}</div>
        <div class="q-head-sub">${t("queue.upnextSub")}</div>
      </div>
      <button class="icon-btn" data-close="queue" data-ic="x" title="${t("common.close")}"></button>
    </div>${queueRows}
    <div class="q-sec">
      <div class="q-sec-title">${t("queue.recs")}</div>
      <div class="q-sec-sub">${t("queue.recsSub")}</div>
    </div>
    <div id="nextUpList" class="queue-sug">${recHtml}</div>
  </div>`;
  injectIcons(qp);
  if (!state.nextUpSug || !state.nextUpSug.length) loadNextUp();
}

async function fetchNextUp() {
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
  state.nextUpSug = items;
  return items;
}

function renderNextUpList(list) {
  if (!list) return;
  if (!state.nextUpSug || !state.nextUpSug.length) {
    list.innerHTML = `<div class="lyrics-empty">${t("queue.recFail")}</div>`;
    return;
  }
  list.innerHTML = state.nextUpSug.map((s, i) => `
    <div class="queue-item sug" data-sug-play="${i}">
      <div class="s-art">${s.art ? `<img src="${esc(s.art)}">` : ICONS.music}</div>
      <div class="q-info"><div class="q-title">${esc(s.title)}</div><div class="q-sub">${esc(s.artist || "")}</div></div>
      <span class="q-dur">${fmtTime(s.duration)}</span>
      <div class="q-more">
        <button class="icon-btn small" data-more title="${t("queue.more")}">${ICONS.more}</button>
        <div class="s-more-menu" data-more-menu>
          <button class="m-item" data-sug-next="${i}">${ICONS.next}<span>${t("queue.playNext")}</span></button>
          <button class="m-item" data-sug-add="${i}">${ICONS.plus}<span>${t("queue.addToQueue")}</span></button>
        </div>
      </div>
    </div>`).join("");
  injectIcons(list);
}

async function loadNextUp() {
  const list = $("#nextUpList");
  if (!list) return;
  await fetchNextUp();
  renderNextUpList(list);
}

let nextUpTimer = null;
function scheduleNextUp() {
  if (state.nextUpSug && state.nextUpSug.length) return;
  clearTimeout(nextUpTimer);
  nextUpTimer = setTimeout(() => {
    fetchNextUp().then(() => {
      const list = $("#nextUpList");
      if (list && state.nextUpSug && state.nextUpSug.length) renderNextUpList(list);
    });
  }, 250);
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
      let sr = 0, sg = 0, sb = 0, sn = 0;
      let ar = 0, ag = 0, ab = 0, an = 0;
      for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] < 200) continue;
        const rr = data[i], gg = data[i + 1], bb = data[i + 2];
        if (Math.max(rr, gg, bb) < 32) continue; // skip near black
        ar += rr; ag += gg; ab += bb; an++;
        if (Math.max(rr, gg, bb) - Math.min(rr, gg, bb) > 45) { sr += rr; sg += gg; sb += bb; sn++; }
      }
      if (an < 20) return;
      // prefer the vibrant (saturated) swatch when available, else the average
      const use = sn > 2;
      let r = Math.round((use ? sr : ar) / (use ? sn : an));
      let g = Math.round((use ? sg : ag) / (use ? sn : an));
      let b = Math.round((use ? sb : ab) / (use ? sn : an));
      // clamp lightness so white glyphs stay readable
      const mx = Math.max(r, g, b);
      if (mx > 200) { const k = 200 / mx; r = Math.round(r * k); g = Math.round(g * k); b = Math.round(b * k); }
      let hex = "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
      // keep dynamic accents from turning washed-out / muddy
      const [h0, s0, l0] = hexToHsl(hex);
      if (s0 < 40) hex = hslToHex(h0, 40, l0);
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
      const song = songs[+row.dataset.i];
      if (!song) return;
      if (song.source === "local") playQueue(songs, +row.dataset.i);
      else playQueue([song], 0);
    });
  });
}

function bindSearchRows(container, songs) {
  container.querySelectorAll(".song-row[data-i]").forEach((row) => {
    row.addEventListener("click", (e) => {
      if (e.target.closest("button")) return;
      const song = songs[+row.dataset.i];
      if (song) playQueue([song], 0);
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
      const row = moreBtn.closest(".song-row, .queue-item");
      const menu = row && row.querySelector("[data-more-menu]");
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

    const heroPlay = e.target.closest("[data-hero-play]");
    if (heroPlay) {
      const hero = state.homeHero;
      if (hero && hero.videoId) playQueue([{ ...hero }], 0);
      return;
    }
    const clPlay = e.target.closest("[data-cl-play]");
    if (clPlay) {
      const p = state.recentPlays && state.recentPlays[+clPlay.dataset.clPlay];
      if (p) playQueue([songFromPlay(p)], 0);
      return;
    }
    const scrollFwd = e.target.closest("[data-scroll-fwd]");
    if (scrollFwd) {
      const sec = scrollFwd.closest(".home-sec");
      const hs = sec && sec.querySelector(".hscroll");
      if (hs) hs.scrollBy({ left: hs.clientWidth * 0.85, behavior: "smooth" });
      return;
    }
    const scrollBack = e.target.closest("[data-scroll-back]");
    if (scrollBack) {
      const sec = scrollBack.closest(".home-sec");
      const hs = sec && sec.querySelector(".hscroll");
      if (hs) hs.scrollBy({ left: -hs.clientWidth * 0.85, behavior: "smooth" });
      return;
    }

    const relPlay = e.target.closest("[data-rel-play]");
    if (relPlay) {
      const bid = relPlay.dataset.relPlay;
      (async () => {
        try {
          const a = await api("/api/ytm/album/" + bid);
          if (a.error) throw new Error(a.error);
          if (a.tracks && a.tracks.length) playQueue(a.tracks, 0);
        } catch (err) {
          toast(err.message);
        }
      })();
      return;
    }

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

    const qDel = e.target.closest("[data-q-del]");
    if (qDel) {
      state.queue.splice(+qDel.dataset.qDel, 1);
      if (state.qIndex >= state.queue.length) state.qIndex = state.queue.length - 1;
      if (+qDel.dataset.qDel < state.qIndex) state.qIndex--;
      renderQueuePanel();
      return;
    }
    const sugNext = e.target.closest("[data-sug-next]");
    if (sugNext) {
      const songs = state.nextUpSug || [];
      const i = +sugNext.dataset.sugNext;
      if (songs[i]) { state.queue.splice(state.qIndex + 1, 0, songs[i]); renderQueuePanel(); }
      return;
    }
    const sugAdd = e.target.closest("[data-sug-add]");
    if (sugAdd) {
      const songs = state.nextUpSug || [];
      const i = +sugAdd.dataset.sugAdd;
      if (songs[i]) { state.queue.push(songs[i]); renderQueuePanel(); }
      return;
    }
    const qGo = e.target.closest("[data-q-go]");
    if (qGo && !e.target.closest("[data-more-menu]")) { state.qIndex = +qGo.dataset.qGo; state.scrobbled = false; state.statRecorded = false; playCurrent(); renderQueuePanel(); return; }
    const sugPlay = e.target.closest("[data-sug-play]");
    if (sugPlay && !e.target.closest("[data-more-menu]")) {
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
  bind("#playerArtist", (e) => { e.stopPropagation(); openArtistFromCurrent(); });
  bind("#npArtist", () => openArtistFromCurrent());
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
  $$("#lyrProviders .lp-btn").forEach((b) => b.addEventListener("click", () => {
    const p = b.dataset.lyrProvider;
    setSetting("lyrics_provider", p);
    if (state.current) loadLyrics(state.current, p);
  }));
  bind("#npToggle", () => openNowPlaying());
  bind("#themeToggle", () => setSetting("theme", state.settings.theme === "light" ? "dark" : "light"));
  bind("#eqToggle", () => openEq());
  bind("#volToggle", () => { audio.muted = !audio.muted; updateVolIcon(); });
  bind("#mpMain", () => openNowPlaying());
  bind("#historyBtn", () => navigate("stats"));
  bind("#settingsBtn", () => navigate("settings"));
  bind("#calendarBtn", () => navigate("releases"));
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
  seekBar($("#npBar"), $("#npBarFill"), $("#npBarDot"), (p) => { audio.currentTime = p * (audio.duration || 0); });
  seekBar($("#volBar"), $("#volFill"), null, async (p) => {
    audio.volume = p;
    audio.muted = false;
    await setSetting("volume", p);
    updateVolIcon();
  });

  // nav
  $$("#nav .nav-item").forEach((b) => b.addEventListener("click", () => navigate(b.dataset.nav)));
  $$("#bnav .bnav-item").forEach((b) => b.addEventListener("click", () => navigate(b.dataset.nav)));
  bind("#libToggle", () => {
    const group = $("#libGroup");
    setLibOpen(!group.classList.contains("open"));
  });

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
    $("#npBarDot").style.left = pct + "%";
    highlightLyric();
    if (!state.scrobbled && dur && cur > dur * 0.5) scrobbleNow();
    const xf = getXfade();
    if (xf && state.current && dur && !audio.paused) {
      const remaining = dur - cur;
      if (remaining > 0 && remaining <= xf + 8 && !state.xfadeLoaded && !state.xfadeActive) preloadXfade();
      if (remaining > 0 && state.xfadeLoaded && !state.xfadeActive && remaining <= xf + 0.25) startXfadePlayback();
    }
  });
  audio.addEventListener("ended", () => {
    if (state.xfadeActive) handoffXfade();
    else next(false);
  });
  audio.addEventListener("error", () => { if (audio.src) toast(t("toast.cantPlay")); });

  // keyboard
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.code === "Space") { e.preventDefault(); togglePlay(); }
    else if (e.key === "ArrowRight") { if (state.xfadeActive) cancelXfade(); audio.currentTime += 5; }
    else if (e.key === "ArrowLeft") { if (state.xfadeActive) cancelXfade(); audio.currentTime -= 5; }
    else if (e.key === "ArrowUp") { e.preventDefault(); if (state.xfadeActive) cancelXfade(); audio.volume = Math.min(1, audio.volume + 0.05); setSetting("volume", audio.volume); }
    else if (e.key === "ArrowDown") { e.preventDefault(); if (state.xfadeActive) cancelXfade(); audio.volume = Math.max(0, audio.volume - 0.05); setSetting("volume", audio.volume); }
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
    const artwork = [];
    if (s.art) {
      try { artwork.push({ src: new URL(s.art, location.origin).href, sizes: "512x512" }); } catch {}
    }
    navigator.mediaSession.metadata = new MediaMetadata({
      title: s.title,
      artist: s.artist || "",
      album: s.album || "",
      artwork,
    });
    syncMsPlayback();
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
