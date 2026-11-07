# series-homework
# ניהול סדרות ועדכונים בלתי-משתנים (Immutable Updates)

פרויקט זה הוא ספריית כלי עזר ב-JavaScript המיועדת לשאילתות, סינון ועדכון אימוטבילי של נתוני סדרות, עונות ופרקים.

## הרצת הבדיקות

כדי להריץ את מערך הבדיקות האוטומטי ולוודא את תקינות כל חלקי הפרויקט, יש להריץ את הפקודה הבאה בטרמינל[cite: 15]:
```bash
node check.js
Answers to Questions
1. In the addEpisode function, writing { ...show } alone is not enough. Which objects and arrays did you recreate anew, and why?
Writing a shallow copy like { ...show } only duplicates the top-level properties of the show object while keeping nested references intact. To achieve true immutability, we must also recreate the nested structures: we use .map() on the seasons array to return brand-new season object copies, and we use the spread operator ([...season.episodes, episode]) to create a brand-new episodes array containing the added episode. This ensures that the original objects and arrays stored in memory are never mutated in place.

2. In Bug #3, the colleague did use a copy (...), but why didn't that help?
Using a top-level spread operator (like { ...show } or { ...season }) only performs a shallow copy. The nested properties—such as the seasons array and the individual season objects inside it—still shared the exact same memory references as the original data. As a result, any modifications or additions made to the inner arrays directly affected and mutated the original dataset. 