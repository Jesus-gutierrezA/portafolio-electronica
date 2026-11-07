## Código fuente

El firmware fue desarrollado en Arduino IDE utilizando un ESP32. Su función es controlar la velocidad del motor brushless mediante un controlador PID y regular la altura del Towercopter utilizando la información proporcionada por el sensor ultrasónico.

### Funciones implementadas

- Lectura de altura mediante sensor ultrasónico.
- Filtrado de mediciones mediante promedio de muestras.
- Cálculo del error entre la altura deseada y la altura medida.
- Ejecución del algoritmo de control PID.
- Generación de señales PWM para controlar el ESC.
- Comunicación con el usuario mediante el monitor serial.

### Archivo de programación

- **Firmware ESP32:** `towercopter_pid.ino`
- **Entorno de desarrollo:** Arduino IDE

## Archivos del proyecto

- Código fuente: [towercopter_pid.ino](towercopter_pid.ino)
- Informe técnico: [informe-pid.pdf](informe-pid.pdf)