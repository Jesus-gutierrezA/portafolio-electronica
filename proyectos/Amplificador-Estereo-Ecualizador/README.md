
# Amplificador Estéreo con Ecualizador Pasivo Integrado

![Resultado final](imagenes/foto-final.jpg)

**Contexto:** Proyecto académico – Electrónica II, Universidad del Magdalena (2024).

**Estado:** Terminado.

**Área:** Electrónica analógica, procesamiento de señales y sistemas embebidos.

## Problema y objetivo

Diseñar e implementar un sistema de amplificación de audio estéreo con ecualización independiente de frecuencias bajas, medias y altas, permitiendo controlar las características del sonido y mejorar su reproducción.

El proyecto también buscó integrar un analizador de espectro visual en tiempo real, utilizando Arduino y una matriz LED, para representar gráficamente las frecuencias de la señal de audio.

## Cómo funciona

El sistema está compuesto por las siguientes etapas:

1. **Adquisición de audio:** recepción de la señal de entrada mediante un módulo de reproducción MP3/Bluetooth.

2. **Ecualización:** implementación de filtros pasivos RC de segundo orden para separar las frecuencias bajas (graves), medias y altas (agudos). Se incorporaron potenciómetros para ajustar cada banda.

3. **Preamplificación:** utilización de un transistor MOSFET 2N7000 para recuperar la amplitud de la señal después de su paso por los filtros pasivos.

4. **Amplificación de potencia:** implementación de etapas basadas en el circuito integrado TDA2050 para amplificar independientemente los canales izquierdo y derecho.

5. **Analizador de espectro:** procesamiento de la señal de audio mediante Arduino Nano y la biblioteca FHT, visualizando el comportamiento de las frecuencias en una matriz LED WS2812B de 8x32.

## Esquemáticos

Se desarrollaron y simularon diferentes etapas del sistema antes de su implementación física.

![Preamplificador](imagenes/preamplificador.jpg)

![Ecualizador](imagenes/ecualizador.jpg)

Los esquemáticos completos y sus respectivos documentos se encuentran en la carpeta `esquematicos/`.

## Circuito impreso

Se diseñaron placas PCB para integrar los componentes electrónicos de las etapas de ecualización y preamplificación.

![PCB del ecualizador](imagenes/pcb.jpg)

Los diseños y archivos disponibles se encuentran en la carpeta `pcb/`.

## Componentes principales

| Componente | Función |
|---|---|
| TDA2050 | Amplificación de potencia de audio |
| 2N7000 | Preamplificación de la señal |
| Arduino Nano | Procesamiento de la señal para el analizador |
| WS2812B 8x32 | Visualización del espectro de audio |
| Resistencias y capacitores | Implementación de filtros RC |
| Potenciómetros | Control de bajos, medios y altos |
| LM7805 | Regulación de voltaje |
| Módulo MP3/Bluetooth | Entrada y reproducción de audio |

## Resultados

Se consiguió implementar un sistema de audio estéreo con ecualización de tres bandas y visualización dinámica del espectro de frecuencias.

Entre los principales resultados se destacan:

- Construcción física del amplificador y su encapsulado.
- Implementación de filtros pasivos para bajos, medios y altos.
- Integración de etapas de preamplificación y amplificación.
- Diseño e implementación de circuitos PCB.
- Desarrollo de un analizador de espectro con Arduino y matriz LED.
- Integración de los componentes en un sistema funcional.

### Producto final

![Amplificador construido](imagenes/foto-final.jpg)

## Mi rol

Participé en el armado e implementación de los circuitos electrónicos, realizando el montaje de componentes, soldadura y pruebas de los prototipos.

También participé en la integración de las diferentes etapas del sistema, verificando su funcionamiento durante el proceso de construcción y contribuyendo a la solución de problemas encontrados en la implementación.

El proyecto fue desarrollado en equipo, distribuyendo las responsabilidades entre diseño de circuitos, PCB, investigación e implementación.

## Archivos

- **Informe técnico:** [Informe final](documentos/informe-final.pdf)
- **Esquemáticos:** carpeta `esquematicos/`.
- **Diseños PCB:** carpeta `pcb/`.
- **Código del analizador:** carpeta `codigo/`.
