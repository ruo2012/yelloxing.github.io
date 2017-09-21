(function(window, Lazy, undefined) {
    'use strict';

    Lazy.extend({

        /*一个小型的sizzle.js选择器*/
        "doSelector": function(selector, context) {
            /**
             * 先把单纯的提取出来解决了
             */
            context=Lazy(context)[0];
            selector = selector.trim();
            //变量必须字母，下划线或美元符开头，除了开头的，还可以包含数字，-，
            if (/^#[_\w$](?:[_\w\d]|-)*$/.test(selector)) {
                //Id选择器
                var elem = context.getElementById(new String(selector).replace(/^#/, ''));
                if (elem) {
                    return [elem];
                } else {
                    return [];
                }
            } else if (/^([_\w$](?:[_\w\d]|-)*$)|\*/.test(selector)) {
                //标签选择器或者*
                //不区分大小写
                var elems = context.getElementsByTagName(selector);
                var resultData = [],
                    elem = null;
                var flag = 0;
                for (; flag < elems.length; flag++) {
                    elem = elems[flag];
                    if (elem && elem.nodeType && elem.nodeType === 1) {
                        resultData.push(elem);
                    }
                }
                return resultData;
            } else if (/^\[ *name *= *["|'][_\w$](?:[_\w\d]|-)*["|'] *\]$/.test(selector)) {
                //如果是name选择器Lazy('[name="username"]')
                selector = selector.replace(/^\[ *name *= *["|']/, '');
                selector = selector.replace(/["|'] *\]/, '').trim();
                var elems = context.getElementsByName(selector);

                var resultData = [],
                    elem = null;
                var flag = 0;
                for (; flag < elems.length; flag++) {
                    elem = elems[flag];
                    if (elem && elem.nodeType && elem.nodeType === 1) {
                        resultData.push(elem);
                    }
                }
                return resultData;
            } else if (/^\.[_\w$](?:[_\w\d]|-)*$/.test(selector)) {
                //如果是class选择器
                selector = selector.replace(/^\./, '');
                var elems = [];
                if (document.getElementsByClassName) {
                    elems = context.getElementsByClassName(selector);
                } else {
                    return Lazy(context).find("." + selector);
                }
                return elems;
            } else {
                /**
                 * 对于不是上面简单的字符串，进行下面的选择查找
                 */
                return Lazy.doFind(selector, context);
            }
        }
    });
})(window, window.Lazy);
