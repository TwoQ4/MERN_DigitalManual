import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql10 = () => {
    return (
        
        <div className="lesson">

            <div class="article-content"><h3>Операции сравнения</h3><hr/>&nbsp;<div class="markdown-container"><p>В предложении <code>WHERE</code> помимо проверки на равенство можно использовать и другие операции сравнения. Доступны следующие операторы:</p><ul><li><code>&lt;</code> - меньше;</li><li><code>&gt;</code> - больше;</li><li><code>&lt;=</code> - меньше или равно;</li><li><code>&gt;=</code> - больше или равно;</li><li><code>=</code> - равно;</li><li><code>!=</code> или <code>&lt;&gt;</code> - не равно.</li></ul><p>Например, запрос для получения товаров заказа с количеством более 10 штук</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>
            <p></p><span class="token keyword">FROM</span> purchase_item
            <p></p><span class="token keyword">WHERE</span> count <span class="token operator">&gt;</span> <span class="token number">10</span></code></pre><table><thead><tr><th >purchase_item_id</th><th >purchase_id</th><th >product_id</th><th >price</th><th >count</th></tr></thead><tbody><tr><td >2</td><td >1</td><td >2</td><td >26100.00</td><td >30</td></tr></tbody></table></div></div>

            &nbsp;<hr/>
            <div className="lesson-nav">
                <NavLink to="/sql9" className="waves-effect waves-light btn-large nav-bottom"> &larr; Предыдущий урок </NavLink>
                <NavLink to="/sql11" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </NavLink>
            </div>
        </div>
    );
}

export default Sql10;
