# CSS Specificity

Si hay dos o más reglas CSS que apuntan al mismo elemento y cambian la misma propiedad, el navegador le da más peso al que tiene el selector más específico.

Mientras más especifico es el selector más alto es la prioridad

![hierarchy](./images/jerarquia.png)

fuente: <https://medium.com/@ae_cordova/avoid-headaches-by-understanding-css-specificity-4aa214557eb>

Para calcular la especificación se utiliza

![specificity](./images/specificityw3.PNG)

## Ejemplos

Utilizando esta arquitectura html

![html](./images/htmlexample.PNG)

Indicamos que todo será color rojo

![css1](./images/1csshtml.PNG)
