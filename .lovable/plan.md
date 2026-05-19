## Изменения по сайту-приглашению

### 1. Блок «Дресс-код» — замена цветов
В `DressCode.tsx` заменить 3 цвета в массиве и подписать их названия:
- `#f7c9d4` → `#56442f` (Coffee)
- `#AC8266` → `#93795a` (Bronze)
- `#7b917b` → `#d6baa5` (Champagne)

### 2. Уменьшить заголовки секций на 1 ступень Tailwind
- «Программа дня» (`Programme.tsx`): `text-5xl md:text-6xl` → `text-4xl md:text-5xl`
- «Место проведения» (`Venue.tsx`): `text-5xl md:text-6xl` → `text-4xl md:text-5xl`
- «Дресс-код» (`DressCode.tsx`): `text-5xl md:text-6xl` → `text-4xl md:text-5xl`
- «Анкета гостя» (`Rsvp.tsx`): `text-4xl md:text-5xl` → `text-3xl md:text-4xl`

### 3. Hero — замена символа «&» на «и»
В `Hero.tsx` убрать SVG-амперсанд и вставить букву «и» шрифтом `font-script` (`Great Vibes`) тем же размером, что и имена (`text-6xl sm:text-7xl md:text-8xl`).

### 4. Блок «Программа дня» — корректировка шрифтов
- Названия событий (`h3`): `text-lg` → `text-xl` (увеличить на 1)
- Время (`font-num text-3xl`): `text-3xl` → `text-2xl` (уменьшить на 1)
