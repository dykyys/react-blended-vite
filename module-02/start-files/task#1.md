# Пошук зображень

Напиши застосунок пошуку зображень за ключовим словом. Прев'ю робочого
застосунку

[![Превью](https://i.gyazo.com/76384ee7d41664406ee52acb77351f07.jpg)](https://gyazo.com/76384ee7d41664406ee52acb77351f07)

Доповни компоненти `<SearchForm>`, `<ImageCard>`, `<Button>`. Для створення
сітки використовуй `<PhotosGallery>` та `<PhotosGalleryItem>`

## Інструкція Pexels API

Для HTTP-запитів використовуй публічний сервіс пошуку зображень
[ Pexels](https://www.pexels.com/api/documentation/).

Приклад HTTP-запиту.

```js
import axios from 'axios';

const API_KEY = 'тут вставити ключ';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};
```

Pexels API підтримує пагінацію, за замовчуванням параметр `page` дорівнює `1`.
Нехай у відповіді надходить по 15 об'єктів, встановлено в параметрі `per_page`.
Не забудь, що під час пошуку за новим ключовим словом, необхідно скидати
значення `page` до `1`.

У відповіді від API приходить масив об'єктів, в яких тобі цікаві лише наступні
властивості.

- `id` - унікальний ідентифікатор
- `avg_color` - колір фотографії,
- `alt` - опис фото,
- `src` - об'єкт з розмірами картинок, нам цікавий розмір `large`

## Опис компонента `<SearchForm>`

Компонент приймає один проп `onSubmit` - функцію для передачі значення інпута
під час сабміту форми. Він буде наступної структури.

```jsx
<form className={style.form}>
  <button className={style.button} type="submit">
    <FiSearch size="16px" />
  </button>
  <input
    className={style.input}
    placeholder="What do you want to write?"
    name="search"
    required
    autoFocus
  />
</form>
```

## Опис компонента галереї `<PhotosGallery/>`

Список карток зображень. Створює компонент наступної структури.

```jsx
<PhotosGallery>
  {/*
    Набір <PhotosGalleryItem/> із зображеннями
    */}
</PhotosGallery>
```

## Опис компонента `<PhotosGalleryItem>`

Компонент елемента списку із зображенням. Створює компонент наступної структури.

```jsx
<li className={style.item}>
  <div className={style.thumb}>
    <img src="" alt="" />
  </div>
</li>
```

## Опис компонента `<Button>`

При натисканні на кнопку `Load more` повинна довантажуватись наступна порція
зображень і рендеритися разом із попередніми. Кнопка повинна рендеритися лише
тоді, коли є якісь завантажені зображення. Якщо масив зображень порожній, кнопка
не рендериться.
