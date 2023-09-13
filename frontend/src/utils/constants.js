// Константы для отображения карточек с фильмами на странице,
//по нажатию на кнопку 'еще', на различных разрешениях экрана.
const NUMBER_OF_MOVIES_DESKTOP = 3
const TABLET_ITEMS_PER_PAGE = 2
const MOBILE_ITEMS_PER_PAGE = 2

//Эта переменная определяет значение, которое используется
// в фильтре длительности фильмов.
const MAX_SHORT_DURATION = 40

// Регулярное выражение для проверки корректности формата email
const EMAIL_REGEX = "[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\\.[a-z]{2,}"

// Количество фильмов, отображаемое при поиске
const DESKTOP_FILM_COUNT = 12
const TABLET_FILM_COUNT = 8
const MOBILE_FILM_COUNT = 5

// Точки перестроения экрана
const DESKTOP_BREAKPOINT = 1180
const MID_DESKTOP_BREAKPOINT = 1024
const TABLET_BREAKPOINT = 767

//Экспорт констант в другие части приложения
export {
  NUMBER_OF_MOVIES_DESKTOP,
  TABLET_ITEMS_PER_PAGE,
  MOBILE_ITEMS_PER_PAGE,
  MAX_SHORT_DURATION,
  EMAIL_REGEX,
  DESKTOP_FILM_COUNT,
  TABLET_FILM_COUNT,
  MOBILE_FILM_COUNT,
  DESKTOP_BREAKPOINT,
  MID_DESKTOP_BREAKPOINT,
  TABLET_BREAKPOINT,
}
