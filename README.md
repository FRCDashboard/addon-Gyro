# Gyroscope Widget addon for FRC Dashboard
Live updating, bare-bones gyro widget. Supports resetting to zero on click for calibration.

## Installation
1. Copy the contents of `gyro.html` to wherever in the dashboard you desire.
2. Copy `gyro.js` into the `components` directory of your FRCDashboard system.
3. Link the script from `index.html`, for example:

```html
<script src="components/gyro.js"></script>
```

4. Copy `gyro.css` to the `css` directory in your FRCDashboard system.
5. Link the CSS from `index.html`, for example:

```html
<link rel="stylesheet" href="css/gyro.css">
```

6. If necessary, change the keys of the NetworkTables values used in `gyro.js` to the keys your robot code uses.

Alternatively, you could just copy all the JavaScipt code into `ui.js` or other JavaScript script, but that's a bit tougher to keep organized.
