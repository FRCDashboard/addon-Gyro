// This should be added inside the definition of the 'ui' object at the starting of ui.js.

    gyro: {
        container: document.getElementById('gyro'),
        val: 0,
        offset: 0,
        visualVal: 0,
        arm: document.getElementById('gyro-arm'),
        number: document.getElementById('gyro-number')
    },

// End section



// Copy this portion of the code into the large switch statement in the onValueChanged function

case '/SmartDashboard/Drive/NavX | Yaw': // Gyro rotation
    ui.gyro.val = value;
    ui.gyro.visualVal = Math.floor(ui.gyro.val - ui.gyro.offset);
    if (ui.gyro.visualVal < 0) { // Corrects for negative values
        ui.gyro.visualVal += 360;
    }
    ui.gyro.arm.style.transform = ('rotate(' + ui.gyro.visualVal + 'deg)');
    ui.gyro.number.innerHTML = ui.gyro.visualVal + 'º';
    break;

// End section



// Add this at the bottom of ui.js with the other listeners.
// You can skip this part if you don't want the gyro to have reset on click functionality.

// Reset gyro value to 0 on click
ui.gyro.container.onclick = function() {
	// Store previous gyro val, will now be subtracted from val for callibration
	ui.gyro.offset = ui.gyro.val;
	// Trigger the gyro to recalculate value.
	onValueChanged('/SmartDashboard/Drive/NavX | Yaw', ui.gyro.val);
};

// End section
