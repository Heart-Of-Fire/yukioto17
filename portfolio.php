<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet">
<?php
// Читаем works.txt и выводим работы
$works = [];
if (file_exists('works.txt')) {
    $lines = file('works.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        $parts = explode('|', $line);
        if (count($parts) >= 3) {
            $works[] = [
                'title' => trim($parts[0]),
                'description' => trim($parts[1]),
                'image' => 'works/' . trim($parts[2])
            ];
        }
    }
}
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>yukioto17 — Портфолио</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        <h1 class="handwritten">Мои работы ✨</h1>
        <div class="gallery">
            <?php foreach ($works as $work): ?>
                <div class="work-card">
                    <img src="<?= $work['image'] ?>" alt="<?= $work['title'] ?>">
                    <h3><?= $work['title'] ?></h3>
                    <p><?= $work['description'] ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</body>
</html>