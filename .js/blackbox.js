
        // iOvation Integration using Callback Function Collection Method

        // basic configuration
        var io_install_stm = false; // do not install Active X
        var io_exclude_stm = 12; // do not run Active X
        var io_install_flash = false; // do not install Flash
        var io_enable_rip = true; // collect Real IP information
        var deviceFingerPrint = '';

        /**
         * The Callback Function Collection Method allows you to manage blackbox generation in a more event-driven manner.
         * As blackbox collection progresses, snare.js fires update events when a collection method has completed.
         * These events trigger a user-defined callback function to update the page with the new blackbox value.
         * When all of the collection methods are completed, a Boolean flag is set indicating no further updates are
         * expected and the value is final blackbox value.
         * This method requires:
         * 1. Enabling collection of Real IP information by setting io_enable_rip.
         * 2. Setting the variables to handle user notifications: io_install_flash.
         * 3. Set io_bb_callback to a function that processes the new blackbox value.
         * @param bb : the updated value of the blackbox.
         * @param isComplete : a Boolean indicating whether all the collection methods have completed.
         */
        var io_bb_callback = function (bb, isComplete)
        {
            console.log('io_bb_callback function called with isComplete: ' + isComplete);
            if (isComplete) {
                deviceFingerPrint = bb;
                console.log('Blackbox collection completed. bb: ' + bb);
            }
        };
    
