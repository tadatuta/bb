---
title: Переименование bem-controls в bem-components
tags:
    - lib
---

По давно намеченному плану мы переименовали репозиторий bem-controls в bem-components. В дальнейшем такие действия позволят нам сделать его расширяемым, например, другими блоками.

Для обратной совместимости репозиторий [bem-controls](https://github.com/bem/bem-controls/) содержит копию на момент 
переименования, в которой отключены issues.

Все старые ссылки на issues, к сожалению, не работают. Нужно вручную изменять в урлах вида
https://github.com/bem/bem-controls/issues/106 строку "bem-controls" на "bem-components" 
(https://github.com/bem/bem-compoments/issues/106).

Сделать репозиторий read-only нельзя, поэтому большая просьба к вам туда по возможности ничего не пушить.

Если вы все-таки случайно ошиблись, убедитесь, что аналогичный коммит запушили в [bem-components](https://github.com/bem/bem-components/).
