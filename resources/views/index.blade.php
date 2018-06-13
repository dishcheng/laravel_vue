<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Larvuent</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body>
<div id="app"><router-view class="view"></router-view></div>
<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>