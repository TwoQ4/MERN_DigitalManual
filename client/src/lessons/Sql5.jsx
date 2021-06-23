import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql5 = () => {
    return (
        
        <div className="lesson">

        <div class="article-content"><h3>Арифметические операции</h3><hr/>&nbsp;<div class="markdown-container"><p>PostgreSQL предоставляет множество математических операций над числовыми данными. Вот только малая их часть:</p><ul><li><code>+</code> - сложение;</li><li><code>-</code> - вычитание;</li><li><code>*</code> - умножение;</li><li><code>/</code> - деление;</li><li><code>%</code> - остаток от деления;</li><li><code>^</code> - возведение в степень;</li><li><code>!</code> - факториал;</li><li><code>abs</code> - модуль числа;</li><li><code>sqrt</code> - квадратный корень.</li></ul><p>Пример использования:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token number">2</span><span class="token operator">+</span><span class="token number">3</span> <span class="token keyword">AS</span> plus<span class="token punctuation">,</span><p></p>
            <span class="token number">2</span><span class="token operator">-</span><span class="token number">3</span> <span class="token keyword">AS</span> minus<span class="token punctuation">,</span>
            <p></p>
            <span class="token number">2</span><span class="token operator">*</span><span class="token number">3</span> <span class="token keyword">AS</span> multiply<span class="token punctuation">,</span>
            <p></p>
            <span class="token number">2</span><span class="token operator">/</span><span class="token number">3</span> <span class="token keyword">AS</span> division<span class="token punctuation">,</span>
            <p></p>
            <span class="token number">5</span><span class="token operator">%</span><span class="token number">3</span> <span class="token keyword">AS</span> remainder_of_division<span class="token punctuation">,</span>
            <p></p>
            <span class="token number">2</span><span class="token operator">^</span><span class="token number">3</span> <span class="token keyword">AS</span> degree<span class="token punctuation">,</span>
            <p></p>
            <span class="token number">3</span><span class="token operator">!</span> <span class="token keyword">AS</span> factorial<span class="token punctuation">,</span>
            abs<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            sqrt<span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span></code></pre><p>Как обычно, аргументами могут быть значение столбца таблицы, строковый литерал, константа, вызов функции и любое выражение над всем вышеперечисленным.</p></div></div>

            &nbsp;<hr/>
            <div className="lesson-nav">
                <NavLink to="/sql4" className="waves-effect waves-light btn-large nav-bottom"> &larr; Предыдущий урок </NavLink>
                <NavLink to="/sql6" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </NavLink>
            </div>
        </div>
    );
}

export default Sql5;
