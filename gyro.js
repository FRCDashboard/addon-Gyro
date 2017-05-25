// Set a global alias for the select box.
ui.gyro = {
    container: document.getElementById('gyro'),
    val: 0,
    offset: 0,
    visualVal: 0,
    arm: document.getElementById('gyro-arm'),
    number: document.getElementById('gyro-number')
};

NetworkTables.addKeyListener('/SmartDashboard/drive/navx/yaw', (key, value) => {
    ui.gyro.val = value;
    ui.gyro.visualVal = Math.floor(ui.gyro.val - ui.gyro.offset);
    if (ui.gyro.visualVal < 0) { // Corrects for negative values
        ui.gyro.visualVal += 360;
    }
    ui.gyro.arm.style.transform = ('rotate(' + ui.gyro.visualVal + 'deg)');
    ui.gyro.number.innerHTML = ui.gyro.visualVal + 'º';
});

// You can remove this part if you don't want the gyro to have reset on click functionality.

// Reset gyro value to 0 on click
ui.gyro.container.onclick = function() {
	// Store previous gyro val, will now be subtracted from val for callibration
	ui.gyro.offset = ui.gyro.val;
    // Show the gyro as zeroed out.
    // TODO: This feels hacky, fix it.
    ui.gyro.arm.style.transform = 'rotate(0)';
};
