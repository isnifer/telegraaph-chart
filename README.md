### Some pages of Telegraaf.nl website are quite complex because we need to provide a user with a lot of information. This makes us create different interactive components. You can see some examples at this page http://www.telegraaf.nl/dft/koersen/koers_amsterdam/?cid=menu ###

- Am user can see stoke courses graphs for different periods. Links "1D", "5D", "1M" and so on serve
this. Can you explain how exactly it works and what happens on a page when a user clicks any of this links?
- Can you think of any improvements or other techniques that may be used for the same functionality?
Please explain how do these techniques improve user experience and performance? Are they good for
future support?

##### Decision: ######

1. I use css-modifier for active element instead of .html() method for rewrite html.
2. I use data-attributes to save data in DOM about graph and current period.

It's your code. I don't know why you need to use "class" attribute to save data, it's bad place.

```js

    function getKoersGraphCode(){
      var code = 12272;
      $('.streaming_koers_box.medium').each(function( index ){
        var classes = $(this).attr('class').split(" ");
        for( i in classes){
          if( classes[i].indexOf("isin-") == 0){
            code = classes[i].split("-")[1];
            break;
          }
        }
      });
      return code;
    }

    changeGraphs = function(graphId) {
    
        var graphIdArray = ['1D','5D','1M','3M','6M','1Y','Interactief'];
        
        var code = getKoersGraphCode();
        
        $(".koers_graph.medium .graph .vwdiframe").attr('src','http://charting.vwdservices.com/hchart/v1/telegraaf/template/price/iframe?culture=nl-NL&series=issueid:'+code+'&period=P'+graphId);

        // Why so difficult? One Event handler is more simply decision for this.
        for(i = 0 ;i < graphIdArray.length; i++) {
            if (graphIdArray[i] == graphId){
                $('.koers_graph.medium .legend .' + graphIdArray[i]).html("<b>" + graphIdArray[i] + "</b>");
            } else {
              $('.koers_graph.medium .legend .' + graphIdArray[i]).html(graphIdArray[i]);
            }
        }
        
    }
    
```


###### Решение: ######

1. Использование модификатора для смены активного состояния вместо метода .html()
2. Использование дата-атрибутов для хранения данных о графе и текущем периоде

Итог: Логика лежит внутри js-файла. Один event-handler. Всем БЭМ

```js

    function getKoersGraphCode(){
      var code = 12272;
      $('.streaming_koers_box.medium').each(function( index ){
        var classes = $(this).attr('class').split(" ");
        for( i in classes){
          if( classes[i].indexOf("isin-") == 0){
            code = classes[i].split("-")[1];
            break;
          }
        }
      });
      return code;
    }

    changeGraphs = function(graphId) {
    
        var graphIdArray = ['1D','5D','1M','3M','6M','1Y','Interactief'];
        
        var code = getKoersGraphCode();
        
        $(".koers_graph.medium .graph .vwdiframe").attr('src','http://charting.vwdservices.com/hchart/v1/telegraaf/template/price/iframe?culture=nl-NL&series=issueid:'+code+'&period=P'+graphId);

        for(i = 0 ;i < graphIdArray.length; i++) {
            if (graphIdArray[i] == graphId){
                $('.koers_graph.medium .legend .' + graphIdArray[i]).html("<b>" + graphIdArray[i] + "</b>");
            } else {
              $('.koers_graph.medium .legend .' + graphIdArray[i]).html(graphIdArray[i]);
            }
        }
        
    }
    
```