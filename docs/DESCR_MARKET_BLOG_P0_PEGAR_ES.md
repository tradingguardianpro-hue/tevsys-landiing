# P0 — Pegar en blog Market ES (770806)

**URL:** https://www.mql5.com/es/blogs/post/770806  
**Hecho en repo:** textos listos. **Tú en Seller:** editar el artículo y publicar.

## 1) Cifras — buscar y sustituir
- `114 operativas` → `116 operativas`
- `114 trades` (si aparece) → `116`
- Dejar ≈ **0,06 %** y atribución decisión vs ejecución.

## 2) Nueva sección (después de Precisión documentada o antes de Evidencia)
Título sugerido: **Operación abierta que cruza la medianoche**

Pegar el cuerpo:

---

Un límite diario suele rearmarse al cambiar el día. Para la mayoría de utilidades, eso significa que a las 00:00 el contador vuelve a cero — incluso con posiciones abiertas. Si operas swing u overnight, esa mecánica tiene un agujero: la operación que cruzó la medianoche empieza el nuevo día sin la capa que pactaste.

tevsys resuelve eso con otra decisión de producto: cuando la protección está activa y hay una operación abierta que cruza la medianoche, el fin de semana u otro corte de calendario, la protección no se reinicia a mitad de operación. Sigues bajo el pacto con los % que configuraste mientras la operación sigue y el programa vigila.

En el panel lo ves: el escenario intradía y el escenario que cruza calendario se muestran distintos, para que sepas qué estás mirando. No es una característica más: es la diferencia entre un límite que se resetea y una protección que dura lo mismo que tu exposición.

Detalle en web: https://www.tevsys.io/como-funciona#overnight-laborable · FAQ: https://www.tevsys.io/como-funciona#overnight-faq

---

## 3) Una línea HyperClose (opcional, anti-confusión Gemini)
En la sección HyperClose o tras Precisión, añade:

**HyperClose no es el cierre al llegar al límite diario/semanal** (eso es el motor de límites). HyperClose actúa si, con la protección ya activa, intentas abrir una operación nueva («una más») — también en días OFF — y deja registro del intento.

## 4) Market vs web (opcional, 2 frases)
La edición **Market Advanced** de esta ficha no requiere clave web ni WebRequest a tevsys.io. El canal web (licencia) sí puede requerir WebRequest según la guía de instalación. No mezclar canales.

## Checklist Seller
- [ ] 114 → 116 en lead + precisión
- [ ] Sección overnight pegada
- [ ] (Opcional) HyperClose aclarado + frase Market vs web
- [ ] Guardar / publicar artículo
