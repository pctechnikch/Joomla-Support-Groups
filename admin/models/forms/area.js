/*--------------------------------------------------------------------------------------------------------|  www.vdm.io  |------/
    __      __       _     _____                 _                                  _     __  __      _   _               _
    \ \    / /      | |   |  __ \               | |                                | |   |  \/  |    | | | |             | |
     \ \  / /_ _ ___| |_  | |  | | _____   _____| | ___  _ __  _ __ ___   ___ _ __ | |_  | \  / | ___| |_| |__   ___   __| |
      \ \/ / _` / __| __| | |  | |/ _ \ \ / / _ \ |/ _ \| '_ \| '_ ` _ \ / _ \ '_ \| __| | |\/| |/ _ \ __| '_ \ / _ \ / _` |
       \  / (_| \__ \ |_  | |__| |  __/\ V /  __/ | (_) | |_) | | | | | |  __/ | | | |_  | |  | |  __/ |_| | | | (_) | (_| |
        \/ \__,_|___/\__| |_____/ \___| \_/ \___|_|\___/| .__/|_| |_| |_|\___|_| |_|\__| |_|  |_|\___|\__|_| |_|\___/ \__,_|
                                                        | |
                                                        |_|
/-------------------------------------------------------------------------------------------------------------------------------/

	@version		1.0.11
	@build			6th January, 2021
	@created		24th February, 2016
	@package		Support Groups
	@subpackage		area.js
	@author			Llewellyn van der Merwe <http://www.vdm.io>
	@copyright		Copyright (C) 2015. All Rights Reserved
	@license		GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html

	Support Groups

/-----------------------------------------------------------------------------------------------------------------------------*/

// Initial Script
jQuery(document).ready(function()
{
	var region_vvvvvvv = jQuery("#jform_region").val();
	vvvvvvv(region_vvvvvvv);
});

// the vvvvvvv function
function vvvvvvv(region_vvvvvvv)
{
	if (isSet(region_vvvvvvv) && region_vvvvvvv.constructor !== Array)
	{
		var temp_vvvvvvv = region_vvvvvvv;
		var region_vvvvvvv = [];
		region_vvvvvvv.push(temp_vvvvvvv);
	}
	else if (!isSet(region_vvvvvvv))
	{
		var region_vvvvvvv = [];
	}
	var region = region_vvvvvvv.some(region_vvvvvvv_SomeFunc);


	// set this function logic
	if (region)
	{
	}
	else
	{
	}
}

// the vvvvvvv Some function
function region_vvvvvvv_SomeFunc(region_vvvvvvv)
{
	// set the function logic
	if (isSet(region_vvvvvvv))
	{
		return true;
	}
	return false;
}

// the isSet function
function isSet(val)
{
	if ((val != undefined) && (val != null) && 0 !== val.length){
		return true;
	}
	return false;
} 
