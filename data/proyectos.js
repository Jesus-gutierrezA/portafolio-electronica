/*
  Aquí viven todos los proyectos del portafolio.
  Para agregar uno nuevo:
    1. Crea la carpeta proyectos/<id>/ y copia ahí tus imágenes.
    2. Copia un bloque de abajo, cambia el id (igual al nombre de la carpeta) y los textos.
  Los nombres de archivo de "portada" y "galeria" son relativos a proyectos/<id>/.
  Si una imagen todavía no existe, la página muestra un recuadro indicando qué archivo falta.
*/

window.AUTOR = {
  nombre: "Jesus Gutierrez",
  titulo: "Ingeniería Electrónica · Universidad del Magdalena",
  intro: "Proyectos de hardware, control, IoT y datos que diseñé y construí durante la carrera, con su resultado final, esquemáticos y circuitos impresos.",
  ubicacion: "Santa Marta, Colombia",
  enlaces: [
    { texto: "GitHub", url: "https://github.com/TU-USUARIO" },
    { texto: "LinkedIn", url: "www.linkedin.com/in/jesus-gutiérrez-a8a6073b0" },
    { texto: "Correo", url: "mailto:jesusgutierreza.15@gmail.com" },
    { texto: "Hoja de vida (PDF)", url: "assets/hoja-de-vida.pdf" }
  ]
};

window.PROYECTOS = [
  {
    id: "solarmapx",
    titulo: "SolarMapX",
    resumen: "Monitoreo en tiempo real de un sistema fotovoltaico con ESP32, sensores AC y tablero en ThingsBoard.",
    contexto: "Proyecto de grado · Equipo 4",
    anio: "",
    area: "IoT",
    estado: "Terminado",
    destacado: true,
    portada: "foto-final.jpg",
    galeria: [
      { archivo: "foto-final.jpg", titulo: "Resultado final" },
      { archivo: "esquematico.png", titulo: "Esquemático" },
      { archivo: "pcb.png", titulo: "Circuito impreso" },
      { archivo: "dashboard.png", titulo: "Tablero de monitoreo" }
    ],
    descripcion: [
      "Sistema de monitoreo para una instalación fotovoltaica que mide variables eléctricas con sensores AC, las procesa en un ESP32 y las envía a una plataforma IoT para visualizarlas en tiempo real.",
      "La telemetría inicialmente usaba MQTT, pero la red de Docker en Windows bloqueaba la conexión; se migró a la API REST de ThingsBoard por HTTP, lo que dejó el flujo de datos estable.",
      "El tablero se personalizó a partir del JSON de ThingsBoard con un estilo tipo SCADA oscuro y cubre las siete variables medidas."
    ],
    tecnologias: ["ESP32", "ThingsBoard", "HTTP REST", "Docker", "Sensores AC"],
    resultados: [
      "Telemetría continua de 7 variables eléctricas",
      "Tablero SCADA personalizado en ThingsBoard"
    ],
    rol: "Integrante del Equipo 4. Describe aquí tu parte: firmware, comunicación, tablero.",
    enlaces: [
      { texto: "Código fuente", url: "" },
      { texto: "Documento del proyecto (PDF)", url: "" }
    ]
  },
  {
    id: "medidor-potencia-ac",
    titulo: "Medidor de potencia AC",
    resumen: "Medidor de voltaje, corriente y potencia con PIC16F887, ZMPT101B y SCT-013 con ADS1115.",
    contexto: "Proyecto de curso",
    anio: "",
    area: "Instrumentación",
    estado: "Terminado",
    destacado: false,
    portada: "foto-final.jpg",
    galeria: [
      { archivo: "foto-final.jpg", titulo: "Resultado final" },
      { archivo: "esquematico.png", titulo: "Esquemático" },
      { archivo: "pcb.png", titulo: "Circuito impreso" }
    ],
    descripcion: [
      "Medidor de energía AC basado en el microcontrolador PIC16F887. El voltaje se mide con un ZMPT101B y la corriente con un transformador SCT-013 leído por un ADC ADS1115; los valores se muestran en una pantalla LCD.",
      "Durante el desarrollo se resolvieron desbordamientos de pila causados por printf con flotantes en la pila de 8 niveles del PIC16, y la corrupción de la LCD por lectura-modificación-escritura usando un registro sombra.",
      "Los sensores se calibraron contra mediciones de referencia."
    ],
    tecnologias: ["PIC16F887", "ZMPT101B", "SCT-013", "ADS1115", "LCD"],
    resultados: [
      "Medición calibrada de voltaje y corriente RMS",
      "Firmware estable tras corregir pila y puerto de la LCD"
    ],
    rol: "",
    enlaces: [{ texto: "Código fuente", url: "" }]
  },
  {
    id: "llave-acustica-pll",
    titulo: "Llave acústica con PLL",
    resumen: "Cerradura que abre una puerta solo al detectar un tono de 1 kHz ±5 %, con PLL CD4046 y etapas analógicas.",
    contexto: "Proyecto integrador · Electrónica III",
    anio: "2026",
    area: "Analógica",
    estado: "En desarrollo",
    destacado: false,
    portada: "foto-final.jpg",
    galeria: [
      { archivo: "foto-final.jpg", titulo: "Maqueta final" },
      { archivo: "esquematico.png", titulo: "Esquemático" },
      { archivo: "pcb.png", titulo: "Circuito impreso" }
    ],
    descripcion: [
      "Sistema de acceso que reconoce un tono de 1 kHz con un margen de aceptación de ±5 % y abre la puerta de una maqueta de casa.",
      "La señal pasa por una etapa de adquisición y amplificación, un filtro activo pasabanda MFB con Q = 5 y un PLL CD4046 que se engancha a la frecuencia objetivo. Un comparador y un temporizador 555 generan la orden de apertura, y un microcontrolador se usa únicamente para mover el servomotor de la puerta."
    ],
    tecnologias: ["CD4046", "Filtro MFB", "555", "Comparador", "Servomotor"],
    resultados: [
      "Acondicionamiento y filtro MFB funcionando"
    ],
    rol: "Trabajo en grupo. Describe aquí tu parte.",
    enlaces: [{ texto: "Informe (PDF)", url: "" }]
  },
  {
    id: "balanza-pid-bldc",
    titulo: "Balancín PID con motores BLDC",
    resumen: "Barra pivotada de 55 cm que se equilibra por empuje diferencial de dos motores sin escobillas, con ESP32 y MPU6050.",
    contexto: "Proyecto de control",
    anio: "",
    area: "Control",
    estado: "Terminado",
    destacado: false,
    portada: "foto-final.jpg",
    galeria: [
      { archivo: "foto-final.jpg", titulo: "Montaje final" },
      { archivo: "esquematico.png", titulo: "Esquemático" },
      { archivo: "simulink.png", titulo: "Modelo en Simulink" },
      { archivo: "respuesta.png", titulo: "Respuesta al escalón" }
    ],
    descripcion: [
      "Balancín de un eje: una barra de 55 cm pivotada en el centro, con un motor BLDC 2212 y hélice en cada extremo. El ESP32 lee la inclinación con un MPU6050 y controla los dos ESC de 30 A para mantener la barra horizontal.",
      "El sistema se modeló en Simulink, primero como modelo no lineal completo y luego reducido a primer orden para la velocidad angular. La respuesta al escalón en lazo abierto se reprodujo en el hardware para estimar la fricción real del pivote y ajustar las ganancias del PID."
    ],
    tecnologias: ["ESP32", "MPU6050", "BLDC 2212", "ESC 30 A", "MATLAB / Simulink"],
    resultados: [
      "Modelo de primer orden validado en simulación",
      "Prueba de escalón en hardware con registro CSV"
    ],
    rol: "",
    enlaces: [{ texto: "Código y modelos", url: "" }]
  },
  {
    id: "vumetro-ws2812b",
    titulo: "Vúmetro en matriz LED",
    resumen: "Analizador de espectro de audio en una matriz WS2812B de 8×32 controlada por Arduino Nano.",
    contexto: "Proyecto personal",
    anio: "",
    area: "Embebidos",
    estado: "Terminado",
    destacado: false,
    portada: "foto-final.jpg",
    galeria: [
      { archivo: "foto-final.jpg", titulo: "Resultado final" },
      { archivo: "esquematico.png", titulo: "Esquemático" },
      { archivo: "pcb.png", titulo: "Circuito impreso" }
    ],
    descripcion: [
      "Vúmetro interactivo que toma una entrada de audio, calcula su espectro y lo dibuja como barras en una matriz de 256 LED WS2812B.",
      "Dos pulsadores cambian el color y el brillo, y al encender la matriz muestra el texto de bienvenida IEDI Bellavista."
    ],
    tecnologias: ["Arduino Nano", "WS2812B 8×32", "FHT", "Adafruit NeoPixel"],
    resultados: [],
    rol: "",
    enlaces: [{ texto: "Video funcionando", url: "" }]
  },
  {
    id: "isla-calor-santa-marta",
    titulo: "Islas de calor en Santa Marta",
    resumen: "Detección de islas de calor urbanas con imágenes satelitales y aprendizaje automático.",
    contexto: "Proyecto de datos",
    anio: "",
    area: "Datos",
    estado: "En desarrollo",
    destacado: false,
    portada: "mapa.png",
    galeria: [
      { archivo: "mapa.png", titulo: "Mapa de temperatura superficial" },
      { archivo: "resultado-modelo.png", titulo: "Clasificación del modelo" }
    ],
    descripcion: [
      "Análisis de imágenes satelitales de Santa Marta y el Magdalena para identificar zonas urbanas con temperatura superficial más alta que su entorno.",
      "Se seleccionaron los conjuntos de datos disponibles y se entrena un modelo de aprendizaje automático para clasificar las zonas."
    ],
    tecnologias: ["Python", "Imágenes satelitales", "Machine learning"],
    resultados: [],
    rol: "",
    enlaces: [{ texto: "Notebook", url: "" }]
  }
];
