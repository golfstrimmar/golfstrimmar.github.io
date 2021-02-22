<?php 
$phone = trim($_POST['phone']);
$name = trim($_POST['name']);
$dt = date('Y-m-d H:i:s');

if( $phone == '' || $name == ''){
  // если Поля пустые
  echo 'Заполните  все поля';
}
// elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)){
//   // валидация полей формы
// echo 'Введите корректный адрес электронной почты';
// }
else{
  // Если всё хорошо выйдет единица Пишет данные в файл
file_put_contents('apps.txt' , "$dt $email $phone $name \n" , FILE_APPEND);
echo '1';
}


?>