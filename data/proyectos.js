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
  },
  
  {
    id: "Amplificador-Estereo-Ecualizador",
    titulo: "Amplificador estéreo con ecualizador pasivo integrado",
    resumen: "Sistema de audio estéreo con filtros pasivos de tres bandas, preamplificación MOSFET, amplificación TDA2050 y analizador de espectro con Arduino.",
    contexto: "Proyecto académico · Electrónica II · Universidad del Magdalena",
    anio: "2024",
    area: "Analógica",
    estado: "Terminado",
    destacado: false,
    portada: "foto-final.jpg",
    galeria: [
      { archivo: "foto-final.jpg", titulo: "Amplificador terminado" },
      { archivo: "ecualizador.jpg", titulo: "Ecualizador implementado" },
      { archivo: "pcb.png", titulo: "Diseño de circuito impreso" },
      { archivo: "preamplificador.jpg", titulo: "Etapa de preamplificación con MOSFET 2N7000" },
      { archivo: "esquematico.png", titulo: "Esquemático del sistema" },
      { archivo: "simulacion-amplificador.jpg", titulo: "Simulación de amplificación" },
      { archivo: "respuesta-frecuencia.png", titulo: "Diagramas de Bode" }
    ],
    descripcion: [
      "Diseño y construcción de un amplificador de audio estéreo con ecualizador pasivo integrado, capaz de controlar independientemente las frecuencias bajas, medias y altas.",
      "El sistema incorpora filtros pasivos RC de segundo orden, una etapa de preamplificación basada en el transistor MOSFET 2N7000 y etapas de amplificación de potencia con circuitos integrados TDA2050.",
      "Como elemento adicional, se desarrolló un analizador de espectro mediante Arduino Nano, utilizando la biblioteca FHT para procesar la señal de audio y visualizar sus componentes de frecuencia en una matriz LED WS2812B de 8x32.",
      "El diseño físico del equipo se inspiró en la cultura picotera del Caribe colombiano."
    ],
    tecnologias: [
      "TDA2050",
      "MOSFET 2N7000",
      "Arduino Nano",
      "WS2812B 8x32",
      "Filtros RC",
      "PCB",
      "FHT"
    ],
    resultados: [
      "Construcción física de un amplificador estéreo.",
      "Implementación de ecualización de bajos, medios y altos.",
      "Diseño y fabricación de circuitos impresos.",
      "Integración de un analizador de espectro visual con matriz LED."
    ],
    rol: "Responsable del armado e implementación de los circuitos electrónicos, soldadura de componentes y pruebas de prototipos. Participé en la integración de las etapas electrónicas y en la verificación del funcionamiento del sistema.",
    enlaces: [
      { texto: "Informe técnico (PDF)", url: "documentos/informe-final.pdf" }
    ]
  },
  
{
  id: "towercopter-pid",
  titulo: "Control PID de altura para Towercopter",
  resumen: "Diseño e implementación de un sistema de control de altura para un monocóptero vertical mediante ESP32, motor brushless y controlador PID.",
  contexto: "Proyecto académico · Control automático",
  anio: "2026",
  area: "Control",
  estado: "Terminado",
  destacado: false,
  portada: "foto-final.jpg",
  galeria: [
    { archivo: "foto-final.jpg", titulo: "Prototipo físico terminado" },
    { archivo: "montaje.jpg", titulo: "Estructura y sistema mecánico" },
    { archivo: "simulink.png", titulo: "Modelo de control en Simulink" },
    { archivo: "respuesta.png", titulo: "Respuesta del sistema en lazo cerrado" },
    { archivo: "pid-tuner.png", titulo: "Sintonización del controlador PID" }
  ],
  descripcion: [
    "Diseño y construcción de un monocóptero vertical de un grado de libertad (Towercopter), capaz de desplazarse y regular su altura mediante el control de la velocidad de un motor brushless.",
    "El sistema integra un ESP32, un ESC de 40 A y un sensor ultrasónico para medir la posición de la plataforma móvil. La información adquirida se utiliza como retroalimentación para implementar el control automático en lazo cerrado.",
    "Se realizó la identificación de la planta a partir de datos experimentales y se evaluaron diferentes modelos mediante MATLAB PID Tuner. Se seleccionó un modelo de dos polos reales (Two Real Poles), con un ajuste del 95.64% respecto a los datos de identificación.",
    "Finalmente, se diseñó y ajustó el controlador PID en MATLAB/Simulink, comparando los parámetros obtenidos mediante sintonización automática y cálculo manual, y se realizaron pruebas sobre el prototipo físico."
  ],
  tecnologias: [
    "ESP32",
    "MATLAB",
    "Simulink",
    "Arduino IDE",
    "Control PID",
    "Motor BLDC",
    "ESC 40 A",
    "Sensor ultrasónico"
  ],
  resultados: [
    "Identificación de la planta con un ajuste del 95.64%.",
    "Implementación de control PID en lazo cerrado.",
    "Adquisición de datos experimentales mediante ESP32.",
    "Comparación entre sintonización automática y cálculo manual.",
    "Construcción y validación experimental del prototipo físico."
  ],
  rol: "Coautor del proyecto. Participación en el diseño, implementación y evaluación del sistema de control PID.",
  enlaces: [
    { texto: "Informe técnico (PDF)", url: "https://github.com/Jesus-gutierrezA/portafolio-electronica/blob/2ab22c8fd1de8b16915562262176c7e52ba97998/proyectos/towercopter-pid/informe-pid.pdf" }
  ]
},


];
