# Instrucciones primera vez con licencia — tevsys

**Para:** Clientes que acaban de comprar (reciben la clave por email).  
**Uso:** Incluir en el email de licencia (webhook), en la web y en el futuro vídeo de activación.  
**Origen:** Proyecto TGP — este es una copia para referencia web.

---

## Los 3 pasos obligatorios (antes de pegar la clave)

Cada cliente con licencia debe hacer esto **una sola vez** en su MT5:

### 1. Activar trading algorítmico

- **Herramientas** → **Opciones** → pestaña **Asesores Expertos**
- Marcar **"Permitir el comercio algorítmico"**
- Pulsar **Aceptar**

### 2. Añadir tevsys.io a WebRequest (OBLIGATORIO para licencias)

- En la misma ventana (**Opciones** → **Asesores Expertos**)
- Marcar **"Permitir WebRequest para las siguientes direcciones URL"**
- En el cuadro de texto, añadir exactamente: `https://tevsys.io` (sin punto final, sin espacio)
- Pulsar **Aceptar**

**Por qué:** El EA necesita conectar con tevsys.io para validar tu licencia. MT5 bloquea las conexiones externas salvo que autorices la URL explícitamente.

### 3. Pegar la clave en el EA

- Carga tevsys en el gráfico
- Pulsa **F7** (o clic derecho en el EA → Inputs)
- En el campo **License Key**, pega la clave de 10 caracteres que recibiste por email
- Acepta

---

## Vídeo pendiente

**Pendiente:** Crear vídeo corto "Primera vez con licencia" que muestre estos 3 pasos.  
**Uso:** Enviar por link a compradores, colgar en web (footer Guías).  
**Duración estimada:** 1–2 minutos.

---

**Última actualización:** 23 Mar 2026
