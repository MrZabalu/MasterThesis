"use strict";var TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi;!function(TcHmi){if(!window.hasOwnProperty("jQuery")||null===jQuery)throw new ReferenceError('Object "jQuery" is missing!');if(!window.hasOwnProperty("$")||null===$)throw new ReferenceError('Object "$" is missing!');if(!window.hasOwnProperty("acorn")||null===acorn)throw new ReferenceError('Object "acorn" is missing!');let flagOverrides=window.localStorage.getItem("TCHMI_FLAG_OVERRIDES");if(TCHMI_FLAG_OVERRIDES=null,flagOverrides)try{TCHMI_FLAG_OVERRIDES=JSON.parse(flagOverrides)}catch(e){}TCHMI_DEBUG_TIME_LOAD_LIBRARY=Date.now(),TCHMI_DYNAMIC_INSTANCE_ID="unset",TCHMI_ENGINEERING??(TCHMI_ENGINEERING=TCHMI_ENABLE_DESIGNER_MODE??!1),TCHMI_ENABLE_DESIGNER_MODE=TCHMI_ENGINEERING,TCHMI_DESIGNER??(TCHMI_DESIGNER=TCHMI_ENABLE_DESIGNER_MODE_MASTER??!1),TCHMI_ENABLE_DESIGNER_MODE_MASTER=TCHMI_DESIGNER,TCHMI_LIVEVIEW??(TCHMI_LIVEVIEW=TCHMI_ENABLE_DESIGNER_MODE_SLAVE??!1),TCHMI_ENABLE_DESIGNER_MODE_SLAVE=TCHMI_LIVEVIEW,TCHMI_RUNTIME=!TCHMI_ENGINEERING,TCHMI_TARGET_PARTIAL=void 0===TCHMI_TARGET_PARTIAL?void 0!==TCHMI_ENABLE_DESIGNER_MODE_TARGET_PARTIAL?tchmi_path(TCHMI_ENABLE_DESIGNER_MODE_TARGET_PARTIAL):"":tchmi_path(TCHMI_TARGET_PARTIAL),TCHMI_ENABLE_DESIGNER_MODE_TARGET_PARTIAL=TCHMI_TARGET_PARTIAL,TCHMI_CONFIG_OVERRIDE??(TCHMI_CONFIG_OVERRIDE=TCHMI_ENABLE_DESIGNER_MODE_FALLBACK_CONFIG_JSON??null),TCHMI_ENABLE_DESIGNER_MODE_FALLBACK_CONFIG_JSON=TCHMI_CONFIG_OVERRIDE,TCHMI_ENGINEERING_WEBSOCKET??(TCHMI_ENGINEERING_WEBSOCKET=TCHMI_ENABLE_DESIGNER_MODE_WEBSOCKET_URL??""),TCHMI_ENABLE_DESIGNER_MODE_WEBSOCKET_URL=TCHMI_ENGINEERING_WEBSOCKET,TCHMI_CONSOLE_LOG_LEVEL??(TCHMI_CONSOLE_LOG_LEVEL=0),TCHMI_FLAG_OVERRIDES&&void 0!==TCHMI_FLAG_OVERRIDES.TCHMI_CONSOLE_LOG_LEVEL&&null!==TCHMI_FLAG_OVERRIDES.TCHMI_CONSOLE_LOG_LEVEL&&(TCHMI_CONSOLE_LOG_LEVEL=TCHMI_FLAG_OVERRIDES.TCHMI_CONSOLE_LOG_LEVEL),TCHMI_CONSOLE_LOG_PERSISTENT??(TCHMI_CONSOLE_LOG_PERSISTENT=!1),TCHMI_FLAG_OVERRIDES&&void 0!==TCHMI_FLAG_OVERRIDES.TCHMI_CONSOLE_LOG_PERSISTENT&&null!==TCHMI_FLAG_OVERRIDES.TCHMI_CONSOLE_LOG_PERSISTENT&&(TCHMI_CONSOLE_LOG_PERSISTENT=TCHMI_FLAG_OVERRIDES.TCHMI_CONSOLE_LOG_PERSISTENT),TCHMI_CONSOLE_LOG_PERSISTENT_MAX_ENTRIES??(TCHMI_CONSOLE_LOG_PERSISTENT_MAX_ENTRIES=2e4),TCHMI_FLAG_OVERRIDES&&void 0!==TCHMI_FLAG_OVERRIDES.TCHMI_CONSOLE_LOG_PERSISTENT_MAX_ENTRIES&&null!==TCHMI_FLAG_OVERRIDES.TCHMI_CONSOLE_LOG_PERSISTENT_MAX_ENTRIES&&(TCHMI_CONSOLE_LOG_PERSISTENT_MAX_ENTRIES=TCHMI_FLAG_OVERRIDES.TCHMI_CONSOLE_LOG_PERSISTENT_MAX_ENTRIES),TCHMI_CONSOLE_LOG_TCHMISERVER_MESSAGES??(TCHMI_CONSOLE_LOG_TCHMISERVER_MESSAGES=!1),TCHMI_FLAG_OVERRIDES&&void 0!==TCHMI_FLAG_OVERRIDES.TCHMI_CONSOLE_LOG_TCHMISERVER_MESSAGES&&null!==TCHMI_FLAG_OVERRIDES.TCHMI_CONSOLE_LOG_TCHMISERVER_MESSAGES&&(TCHMI_CONSOLE_LOG_TCHMISERVER_MESSAGES=TCHMI_FLAG_OVERRIDES.TCHMI_CONSOLE_LOG_TCHMISERVER_MESSAGES),TCHMI_CONSOLE_LOG_ENGINEERING_COM_MESSAGES??(TCHMI_CONSOLE_LOG_ENGINEERING_COM_MESSAGES=TCHMI_CONSOLE_LOG_DESIGNER_MODE_COM_MESSAGES??!1),TCHMI_CONSOLE_LOG_DESIGNER_MODE_COM_MESSAGES=TCHMI_CONSOLE_LOG_ENGINEERING_COM_MESSAGES,TCHMI_NUGET_METADATA??(TCHMI_NUGET_METADATA={}),TCHMI_UNITTEST_MODE??(TCHMI_UNITTEST_MODE=!1),TCHMI_EVENT_OPTION_OBJECT_SUPPORTED=!0,"number"!=typeof TCHMI_SERVER_STATE_WATCH_INTERVAL&&(TCHMI_SERVER_STATE_WATCH_INTERVAL=1e3),"boolean"!=typeof TCHMI_DIAGNOSTICS_SERVER&&(TCHMI_DIAGNOSTICS_SERVER=!1),"number"!=typeof TCHMI_DIAGNOSTICS_SERVER_REQUEST_HISTORY_MAX_BUFFER&&(TCHMI_DIAGNOSTICS_SERVER_REQUEST_HISTORY_MAX_BUFFER=500),"number"!=typeof TCHMI_DIAGNOSTICS_SERVER_REQUEST_RESPONSE_HISTORY_MAX_BUFFER&&(TCHMI_DIAGNOSTICS_SERVER_REQUEST_RESPONSE_HISTORY_MAX_BUFFER=10),"boolean"!=typeof TCHMI_DIAGNOSTICS_SERVER_REQUEST_RESPONSE_HISTORY_MESSAGES&&(TCHMI_DIAGNOSTICS_SERVER_REQUEST_RESPONSE_HISTORY_MESSAGES=!1)}(TcHmi||(TcHmi={})),function(TcHmi){TcHmi.Config=
/**
     * Provides resources for accessing configuration data.
     * @preserve (Part of the public API)
     */
class{
/**
         * Returns a copy of the current object which is constructed from tchmiconfig.json
         * @preserve (Part of the public API)
         */
static get(){return tchmi_clone_object(TcHmi.System.config)}
/**
         * Returns a Dictionary with all nuget packages of the project.
         * Key is the Nuget ID.
         * @preserve (Part of the public API)
         */static getNugetPackagesMetadata(){return tchmi_clone_object(TcHmi.System.nugetPackagesMetadata)}}}(TcHmi||(TcHmi={})),function(TcHmi){TcHmi.Access=
/**
     * Provides functions for checking rights.
     * @preserve (Part of the public API)
     */
class{
/**
         * Checks if a right is allowed for the current user on this control or its parents
         * Rules for granting access:
         * - Designer Mode Master => true
         * - Server Auth is not restricted (IsAuthRequired == false in Server) => TRUE
         * - Server Auth is not known right now => null
         * - Server Auth loading error => false
         * - On this control: 1 Group  has  ALLOW => TRUE
         * - On this control: 0 Groups have ALLOW, but 1 Group has DENY => FALSE
         * - On this control: 0 Groups have ALLOW, 0 Groups have DENY => Ask Parent
         * - use control default of the bottom most control with this right. TcHmi.Controls.System.TcHmiView has operate/observe set to TRUE
         * - control has no parent (detached control) => null
         * @param control Control to check
         * @param requestedAccessright name of the access right
         * @returns Returns true/false or null if the state is not known right now
         * @preserve (Part of the public API)
         */
static checkAccess(control,requestedAccessright){return control instanceof TcHmi.Controls.System.baseTcHmiControl!=!1&&(!TcHmi.System.isParameterTypeInvalid(requestedAccessright,"requestedAccessright",{type:"string",required:"valueNeeded",minStringLength:1})&&(TcHmi.System.Services.accessManager?TcHmi.System.Services.accessManager.checkAccess(control,requestedAccessright):null))}static setControlRightOverride(control,accessrightToOverride,forcedRight){return control instanceof TcHmi.Controls.System.baseTcHmiControl!=!1&&(!TcHmi.System.isParameterTypeInvalid(accessrightToOverride,"accessrightToForce",{type:"string",required:"valueNeeded",minStringLength:1})&&(("Deny"===forcedRight||null===forcedRight)&&(!!TcHmi.System.Services.accessManager&&(TcHmi.System.Services.accessManager.setControlRightOverride(control,accessrightToOverride,forcedRight),!0))))}static getControlRightOverrides(control){return tchmi_clone_object(TcHmi.System.Services.accessManager?.getControlRightOverrides(control)??new Set,{cloneSets:{deepCloneValues:!1}})}}}(TcHmi||(TcHmi={})),function(TcHmi){TcHmi.AnimationProvider=class{
/**
         * Deprecated. Please use new TcHmi.Animation()
         * Creates a new animation
         * @param controlName The name of the control for which the animation is intendend.
         * @param selector A CSS selector to identify the element inside the control to animate.
         * @preserve (Part of the public API)
         * @deprecated Please use new TcHmi.Animation()
         */
static create(controlName,selector=""){return new Animation(controlName,selector)}};class Animation{
/**
         * Creates a new animation
         * @param controlName The name of the control for which the animation is intendend.
         * @param selector A CSS selector to identify the element inside the control to animate.
         * @preserve (Part of the public API)
         */
constructor(controlName,selector=""){Object.defineProperty(this,"__controlName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__selector",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__animationName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__keyframes",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"__duration",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"__delay",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"__iterationCount",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"__direction",{enumerable:!0,configurable:!0,writable:!0,value:"normal"}),Object.defineProperty(this,"__timingFunction",{enumerable:!0,configurable:!0,writable:!0,value:"ease"}),Object.defineProperty(this,"__fillMode",{enumerable:!0,configurable:!0,writable:!0,value:"none"}),Object.defineProperty(this,"__cleanup",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"__useCss",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(this,"__eventHandlers",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"__state",{enumerable:!0,configurable:!0,writable:!0,value:Animation.Status.CONFIGURE}),Object.defineProperty(this,"__stateUpdater",{enumerable:!0,configurable:!0,writable:!0,value:status=>{this.__state=status}}),Object.defineProperty(this,"__animationController",{enumerable:!0,configurable:!0,writable:!0,value:null}),this.__controlName=controlName,this.__selector=selector,this.__animationName=`anim-${tchmi_create_guid()}`}
/**
         * Returns the name of the control the animation is intended for.
         * @returns The name of the control.
         * @preserve (Part of the public API)
         */controlName(){return this.__controlName}
/**
         * Returns the selector of the element to animate.
         * @returns The selector.
         * @preserve (Part of the public API)
         */selector(){return this.__selector}
/**
         * Returns the name of the animation.
         * @returns The name of the animation.
         * @preserve (Part of the public API)
         */animationName(){return this.__animationName}
/**
         * Returns the state of the animation.
         * @returns The state.
         * @preserve (Part of the public API)
         */state(){return this.__state}
/**
         * Adds a keyframe.
         * This function throws an exception if the progressPoint of the keyframe is not between 0 and 1 inclusive.
         * @preserve (Part of the public API)
         */
addKeyframe(keyframeOrStylesOrProperty,valueOrProgressPoint,progressPoint){if(!this.__configAllowed())return this;if(1===arguments.length){if(keyframeOrStylesOrProperty.progressPoint<0||keyframeOrStylesOrProperty.progressPoint>1)throw new Error("Argument out of range: progressPoint must be between 0 and 1 inclusive.");this.__keyframes.push(keyframeOrStylesOrProperty)}else if(2===arguments.length&&"number"==typeof valueOrProgressPoint){if(valueOrProgressPoint<0||valueOrProgressPoint>1)throw new Error("Argument out of range: progressPoint must be between 0 and 1 inclusive.");let keyframe={styles:{},progressPoint:valueOrProgressPoint};for(const[key,value]of Object.entries(keyframeOrStylesOrProperty))keyframe.styles[key]="string"==typeof value?[value]:value;this.__keyframes.push(keyframe)}else if("string"==typeof keyframeOrStylesOrProperty&&("string"==typeof valueOrProgressPoint||Array.isArray(valueOrProgressPoint))){if(void 0===progressPoint||progressPoint<0||progressPoint>1)throw new Error("Argument out of range: progressPoint must be between 0 and 1 inclusive.");let keyframe={styles:{},progressPoint:progressPoint};keyframe.styles[keyframeOrStylesOrProperty]="string"==typeof valueOrProgressPoint?[valueOrProgressPoint]:valueOrProgressPoint,this.__keyframes.push(keyframe)}return this}
/**
         * Removes all keyframes.
         * @preserve (Part of the public API)
         */clearKeyframes(){return this.__configAllowed()?(this.__keyframes=[],this):this}
/**
         * Reverses the keyframes by subtracting the progressPoint from 1 and setting that as the new progressPoint.
         * @preserve (Part of the public API)
         */reverseKeyframes(){return this.__keyframes.forEach((keyframe=>{keyframe.progressPoint=1-keyframe.progressPoint})),this}
/**
         * Gets the keyframes of this animation.
         * @returns The keyframes.
         * @preserve (Part of the public API)
         */keyframes(){return this.__keyframes}
/**
         * Sets the duration for this animation. Default is 0.
         * @param valueNew The new duration.
         * @preserve (Part of the public API)
         */duration(valueNew){return void 0===valueNew?this.__duration:this.__configAllowed()?(this.__duration=null===valueNew?0:valueNew,this):this}
/**
         * Sets the delay before this animation starts. Default is 0.
         * @param valueNew {number} The new delay.
         * @preserve (Part of the public API)
         */delay(valueNew){return void 0===valueNew?this.__delay:this.__configAllowed()?(this.__delay=null===valueNew?0:valueNew,this):this}
/**
         * Sets the iteration count for this animation. Default is 1.
         * @param valueNew The new iteration count.
         * @preserve (Part of the public API)
         */iterationCount(valueNew){return void 0===valueNew?this.__iterationCount:this.__configAllowed()?(this.__iterationCount=null===valueNew?1:valueNew,this):this}
/**
         * Sets the order in which the keyframes are used. Default is 'normal'.
         * @param valueNew The new direction.
         * @preserve (Part of the public API)
         */direction(valueNew){return void 0===valueNew?this.__direction:this.__configAllowed()?(this.__direction=null===valueNew?"normal":valueNew,this):this}
/**
         * Sets the timing function for this animation. Default is 'ease'.
         * @param valueNew The new timing function. Possible values: "linear", "ease(-in/-out/-in-out)", "step-start/-end", "cubic-bezier(<number>, <number>, <number>, <number)", "steps(<number>, start/end)".
         * @preserve (Part of the public API)
         */timingFunction(valueNew){return void 0===valueNew?this.__timingFunction:this.__configAllowed()?(this.__timingFunction=null===valueNew?"ease":valueNew,this):this}
/**
         * Sets the fill mode. The fill mode determines whether the state of the first keyframe is applied to the element before the animation starts ('backwards'),
         * the state of the last keyframe is applied to the element after the animation ends ('forwards'), both or none. Default is 'none'.
         * @param valueNew The new fill mode.
         * @preserve (Part of the public API)
         */fillMode(valueNew){return void 0===valueNew?this.__fillMode:this.__configAllowed()?(this.__fillMode=null===valueNew?"none":valueNew,this):this}
/**
         * Set whether to schedule a cleanup after the animation has finished. A cleanup removes all animation specific CSS and, depending on fillMode, persists the properties of the last keyframe to the element CSS. Default is false.
         * @param valueNew {boolean} The cleanup value.
         * @preserve (Part of the public API)
         */cleanup(valueNew){return void 0===valueNew?this.__cleanup:(this.__cleanup=null!==valueNew&&valueNew,this.__state===Animation.Status.ENDED&&null!==this.__animationController&&this.__animationController.cleanup(),this)}
/**
         * Sets whether to render the animation via CSS or JavaScript. JavaScript may offer better performance if the animation is often changed and restarted.
         * If the animation has been configured with features unsupported by CSS, JavaScript will be used regardless of the value of useCss. Default is true.
         * @param valueNew {boolean} Whether to use CSS, when available.
         * @preserve (Part of the public API)
         */useCss(valueNew){return void 0===valueNew?this.__canUseCss()&&this.__useCss:this.__configAllowed()?(this.__useCss=null===valueNew||valueNew,this):this}
/**
         * Registers an event handler for one of the events animationstart, animationend or animationiteration.
         * @param name The name of the event.
         * @param callback The callback function.
         * @preserve (Part of the public API)
         */registerEventHandler(name,callback){return this.__eventHandlers.push({name:name,callback:callback}),this}
/**
         * Unregisters a previously registered event handler.
         * @param name The name of the event.
         * @param callback The callback function to unregister.
         * @preserve (Part of the public API)
         */unregisterEventHandler(name,callback){return this.__eventHandlers=this.__eventHandlers.filter((handler=>!(handler.name===name&&(void 0===callback||handler.callback===callback)))),this}
/**
         * Gets all event handlers
         * @returns The event handlers.
         * @preserve (Part of the public API)
         */eventHandlers(){return this.__eventHandlers}
/**
         * Run the animation.
         * @preserve (Part of the public API)
         */run(){return 0===this.__keyframes.length?(TcHmi.Log.error("[Source=Framework, Module=TcHmi.Animation] This animation has no keyframes defined."),this):0===this.__keyframes.filter((keyframe=>0===keyframe.progressPoint)).length?(TcHmi.Log.error("[Source=Framework, Module=TcHmi.Animation] This animation has no start keyframe with progressPoint 0 defined."),this):0===this.__keyframes.filter((keyframe=>1===keyframe.progressPoint)).length?(TcHmi.Log.error("[Source=Framework, Module=TcHmi.Animation] This animation has no end keyframe with progressPoint 1 defined."),this):TcHmi.System.Services.animationProvider?(null!==this.__animationController&&this.__animationController.isValid()||(this.__animationController=TcHmi.System.Services.animationProvider.createAnimationController(this,this.__stateUpdater)),this.__animationController.run(),this):(TcHmi.Log.error("[Source=Framework, Module=TcHmi.Animation] System not ready."),this)}
/**
         * Pause the animation.
         * @preserve (Part of the public API)
         */pause(){return null!==this.__animationController&&this.__animationController.pause(),this}
/**
         * Cancels the animation and writes the last keyframe styles into the element CSS.
         * @preserve (Part of the public API)
         */skip(){return null!==this.__animationController&&this.__animationController.skip(),this}
/**
         * Resets the animation. This is an asynchronous operation.
         * @param callback The function to call when the animation has been reset.
         * @preserve (Part of the public API)
         */reset(callback){return null!==this.__animationController&&this.__animationController.reset(callback),this}__canUseCss(){return"string"==typeof this.__timingFunction}__configAllowed(){return this.__state===Animation.Status.CONFIGURE||this.__state===Animation.Status.ENDED||(TcHmi.Log.warn("[Source=Framework, Module=TcHmi.Animation] Configuring an animation is only allowed when it has the state CONFIGURE or ENDED."),!1)}}TcHmi.Animation=Animation,function(Animation){let Status;!function(Status){Status[Status.CONFIGURE=0]="CONFIGURE",Status[Status.INITIALIZED=1]="INITIALIZED",Status[Status.RUNNING=2]="RUNNING",Status[Status.PAUSED=3]="PAUSED",Status[Status.ENDED=4]="ENDED"}(Status=Animation.Status||(Animation.Status={}))}(Animation=TcHmi.Animation||(TcHmi.Animation={}))}(TcHmi||(TcHmi={})),function(TcHmi){TcHmi.Base64BinaryReader=
/**
     * Provides methods to read base64 encoded data.
     * @preserve (Part of the public API)
     */
class{
/**
         * Creates a new Base64BinaryReader.
         * This constructor throws an exception if the data is not valid base64.
         * @param data The base64 encoded string to read from.
         * @param endianness Whether the encoded data uses little endian (default) or big endian to store numbers.
         * @preserve (Part of the public API)
         */
constructor(data,endianness=TcHmi.Endianness.LittleEndian){Object.defineProperty(this,"__data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__endianness",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__offset",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"__stringEncodings",{enumerable:!0,configurable:!0,writable:!0,value:{"UTF-8":{decode:(bytes,_endianness)=>{let codePoints=[];for(let i=0,byteLength=bytes.length;i<byteLength;i++){let byte=bytes[i];if(0===byte)return{codePoints:codePoints,byteCount:i+1};if(byte<=127)codePoints.push(byte);else if(byte>=194&&byte<=244){let followBytes=1,firstByteMask=31,mask=32;for(;mask>0;)(byte&mask)>0?(followBytes++,firstByteMask>>>=1,mask>>>=1):mask=0;let codePoint=byte&firstByteMask,lastByteIndex=i+followBytes;if(lastByteIndex>=byteLength)codePoint=65533;else for(;i<lastByteIndex;){i++;let byte=bytes[i];if(byte<128||byte>191){codePoint=65533,i--;break}codePoint=codePoint<=67108863?(codePoint<<6|63&byte)>>>0:codePoint*Math.pow(2,6)+(63&byte)}codePoints.push(codePoint)}else codePoints.push(65533)}return{codePoints:codePoints,byteCount:bytes.length}}},"Latin-1":{decode:(bytes,_endianness)=>{const terminatorIndex=bytes.indexOf(0);return-1!==terminatorIndex?{codePoints:bytes.slice(0,terminatorIndex),byteCount:terminatorIndex+1}:{codePoints:bytes,byteCount:bytes.length}}},"Windows-1252":{decode:(bytes,_endianness)=>{const differencesToLatin1={128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376},terminatorIndex=bytes.indexOf(0);return-1!==terminatorIndex?{codePoints:bytes.slice(0,terminatorIndex).map((byte=>byte in differencesToLatin1?differencesToLatin1[byte]:byte)),byteCount:terminatorIndex+1}:{codePoints:bytes.map((byte=>byte in differencesToLatin1?differencesToLatin1[byte]:byte)),byteCount:bytes.length}}}}});let decoded=tchmi_base64decode(data);if(null===decoded)throw new Error(`Could not decode string "${data}" as base64.`);this.__data=[];for(let i=0,ii=decoded.length;i<ii;i++)this.__data.push(decoded.charCodeAt(i));this.__endianness=endianness}__getChunk(length){if(this.__offset+length>this.__data.length)throw new RangeError(`Trying to read ${length} bytes from offset ${this.__offset} exceeds the length of the data.`);let chunk=this.__data.slice(this.__offset,this.__offset+length);return this.__offset+=length,this.__endianness===TcHmi.Endianness.BigEndian&&(chunk=chunk.reverse()),chunk}__readInteger(lengthInBytes,signed){let chunk=this.__getChunk(lengthInBytes),result=0;for(let i=0,ii=chunk.length;i<ii;i++){let byte=255&chunk[i];i<4?result=(result|byte<<8*i)>>>0:result+=byte*Math.pow(256,i)}if(signed){let mask=Math.pow(2,8*lengthInBytes-1);lengthInBytes<=4?result=(result&~mask)-((result&mask)>>>0):128&~chunk[chunk.length-1]||(result-=2*mask)}return result}__readBigInteger(lengthInBytes,signed){let chunk=this.__getChunk(lengthInBytes),result=0n;for(let i=0,ii=chunk.length;i<ii;i++){let byte=0xffn&BigInt(chunk[i]);result=BigInt.asUintN(8*lengthInBytes,result|byte<<8n*BigInt(i))}if(signed){let mask=BigInt(2n**(8n*BigInt(lengthInBytes)-1n));lengthInBytes<=4?result=-BigInt.asUintN(8,result&mask)+(result&~mask):128&~chunk[chunk.length-1]||(result-=2n*mask),result=BigInt.asIntN(8*lengthInBytes,result)}else result=BigInt.asUintN(8*lengthInBytes,result);return result}__readFloatingPointNumber(lengthInBytes){let chunk=this.__getChunk(lengthInBytes),exponentBits=8,significandBits=23;switch(lengthInBytes){case 4:exponentBits=8,significandBits=23;break;case 8:exponentBits=11,significandBits=52}let bias=Math.pow(2,exponentBits-1)-1,parts=[{value:0,bitsToRead:significandBits},{value:0,bitsToRead:exponentBits},{value:0,bitsToRead:1}],partIndex=0,shift=0;for(let i=0;i<lengthInBytes||parts[partIndex].bitsToRead<0;i++){let carryOver=0;parts[partIndex].bitsToRead<0?(carryOver=8+parts[partIndex].bitsToRead,i--,partIndex++,shift=0):0===parts[partIndex].bitsToRead&&(partIndex++,shift=0);let byte=(255&chunk[i])>>>carryOver;parts[partIndex].bitsToRead<8&&(byte&=Math.pow(2,parts[partIndex].bitsToRead)-1),shift<=24?parts[partIndex].value=(parts[partIndex].value|byte<<shift)>>>0:parts[partIndex].value+=byte*Math.pow(2,shift),shift+=8-carryOver,parts[partIndex].bitsToRead-=8-carryOver}let significand=parts[0].value,exponent=parts[1].value,sign=parts[2].value;return exponent===Math.pow(2,exponentBits)-1?significand>0?NaN:1/0*(1===sign?-1:1):0===exponent&&0===significand?0*(1===sign?-1:1):0===exponent?(1===sign?-1:1)*significand*Math.pow(2,1-bias-significandBits):(1===sign?-1:1)*(1+significand/Math.pow(2,significandBits))*Math.pow(2,exponent-bias)}
/**
         * Reads a boolean value.
         * This function throws an exception if reading from the current offset position would exceed the length of the available data.
         * @preserve (Part of the public API)
         */readBoolean(){return 0!==this.__readInteger(1,!1)}
/**
         * Reads a single byte of data.
         * This function throws an exception if reading from the current offset position would exceed the length of the available data.
         * @preserve (Part of the public API)
         */readByte(){return this.__readInteger(1,!1)}
/**
         * Reads a signed byte.
         * This function throws an exception if reading from the current offset position would exceed the length of the available data.
         * @preserve (Part of the public API)
         */readSByte(){return this.__readInteger(1,!0)}
/**
         * Reads a signed 16-bit integer.
         * This function throws an exception if reading from the current offset position would exceed the length of the available data.
         * @preserve (Part of the public API)
         */readInt16(){return this.__readInteger(2,!0)}
/**
         * Reads an unsigned 16-bit integer.
         * This function throws an exception if reading from the current offset position would exceed the length of the available data.
         * @preserve (Part of the public API)
         */readUInt16(){return this.__readInteger(2,!1)}
/**
         * Reads a signed 32-bit integer.
         * This function throws an exception if reading from the current offset position would exceed the length of the available data.
         * @preserve (Part of the public API)
         */readInt32(){return this.__readInteger(4,!0)}
/**
         * Reads an unsigned 32-bit integer.
         * This function throws an exception if reading from the current offset position would exceed the length of the available data.
         * @preserve (Part of the public API)
         */readUInt32(){return this.__readInteger(4,!1)}
/**
         * Reads a signed 64-bit integer.
         * This function throws an exception if reading from the current offset position would exceed the length of the available data.
         * @preserve (Part of the public API)
         */readInt64(){return this.__readBigInteger(8,!0)}
/**
         * Reads an unsigned 64-bit integer.
         * This function throws an exception if reading from the current offset position would exceed the length of the available data.
         * @preserve (Part of the public API)
         */readUInt64(){return this.__readBigInteger(8,!1)}
/**
         * Reads a single precision floating point number.
         * This function throws an exception if reading from the current offset position would exceed the length of the available data.
         * @preserve (Part of the public API)
         */readFloat(){return this.__readFloatingPointNumber(4)}
/**
         * Reads a double precision floating point number.
         * This function throws an exception if reading from the current offset position would exceed the length of the available data.
         * @preserve (Part of the public API)
         */readDouble(){return this.__readFloatingPointNumber(8)}
/**
         * Reads a string. Will read until a zero byte is encountered, or until the specified length has been reached, or, if no length has been specified, until the end of the data.
         * This function throws an exception if length is negative or reading the number of bytes specified by length from the current offset position would exceed the length of the available data.
         * @param optionsOrLength The options to use or the length of the string to read in bytes.
         * @preserve (Part of the public API)
         */readString(optionsOrLength){let stringBytes,options={encoding:"UTF-8"};if("number"==typeof optionsOrLength?options.length=optionsOrLength:optionsOrLength&&(optionsOrLength.encoding&&optionsOrLength.encoding in this.__stringEncodings&&(options.encoding=optionsOrLength.encoding),void 0!==optionsOrLength.length&&(options.length=optionsOrLength.length)),void 0!==options.length){if(options.length<0)throw new RangeError("Length of the string to read must be positive.");if(this.__offset+options.length>this.__data.length)throw new RangeError(`Trying to read ${options.length} bytes from offset ${this.__offset} exceeds the length of the data.`);stringBytes=this.__data.slice(this.__offset,this.__offset+options.length)}else stringBytes=this.__data.slice(this.__offset);let result=this.__stringEncodings[options.encoding].decode(stringBytes,this.__endianness);return this.__offset+=options.length??result.byteCount,this.__getStringFromCodePoints(result.codePoints)}__getStringFromCodePoints(codePoints){let codeUnits=[];for(let i=0,ii=codePoints.length;i<ii;i++){let codePoint=codePoints[i];if(codePoint<=65535)codeUnits.push(codePoint);else{codePoint-=65536;let highSurrogate=55296+(codePoint>>10),lowSurrogate=codePoint%1024+56320;codeUnits.push(highSurrogate,lowSurrogate)}}return String.fromCharCode(...codeUnits)}
/**
         * Returns the length of the data in bytes.
         * @preserve (Part of the public API)
         */getLength(){return this.__data.length}
/**
         * Returns the current position of the read pointer.
         * @preserve (Part of the public API)
         */getOffset(){return this.__offset}
/**
         * Sets the position of the read pointer.
         * @param offset The new position of the read pointer.
         * @preserve (Part of the public API)
         */setOffset(offset){this.__offset=Math.floor(offset)}}}(TcHmi||(TcHmi={})),function(TcHmi){TcHmi.Base64BinaryWriter=
/**
     * Provides methods to write base64 encoded data.
     * @preserve (Part of the public API)
     */
class{
/**
         * Creates a new Base64BinaryWriter.
         * @param endianness Whether to use little endian (default) or big endian when encoding numbers.
         * @param length The desired length of the data. If this parameter is omitted the data will be expanded dynamically.
         * @preserve (Part of the public API)
         */
constructor(endianness=TcHmi.Endianness.LittleEndian,length){Object.defineProperty(this,"__data",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"__endianness",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__length",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__stringEncodings",{enumerable:!0,configurable:!0,writable:!0,value:{"UTF-8":{encode:(codePoints,_endianness)=>{let bytes=[];for(let i=0,ii=codePoints.length;i<ii;i++){let codePoint=codePoints[i];if(codePoint<=127)bytes.push(codePoint);else{let cpBytes=[],firstByteTemplate=192,firstByteMask=31,followByteTemplate=128,followByteMask=63;for(;codePoint>0&&cpBytes.length<=6;)cpBytes.push(followByteTemplate|codePoint&followByteMask),codePoint<=4294967295?codePoint>>>=6:codePoint=Math.floor(codePoint/Math.pow(2,6)),codePoint<=firstByteMask?(cpBytes.push(firstByteTemplate|codePoint&firstByteMask),codePoint=0):(firstByteTemplate=followByteTemplate|firstByteTemplate>>>1,firstByteMask>>>=1);bytes=bytes.concat(cpBytes.reverse())}}return bytes}},"Latin-1":{encode:(codePoints,_endianness)=>{if(codePoints.some((codePoint=>codePoint>255)))throw new RangeError("The string to be encoded contains characters outside of the Latin1 range.");return codePoints}},"Windows-1252":{encode:(codePoints,_endianness)=>{const differencesToLatin1={8364:128,8218:130,402:131,8222:132,8230:133,8224:134,8225:135,710:136,8240:137,352:138,8249:139,338:140,381:142,8216:145,8217:146,8220:147,8221:148,8226:149,8211:150,8212:151,732:152,8482:153,353:154,8250:155,339:156,382:158,376:159};if((codePoints=codePoints.map((codePoint=>codePoint in differencesToLatin1?differencesToLatin1[codePoint]:codePoint))).some((codePoint=>codePoint>255)))throw new RangeError("The string to be encoded contains characters outside of the Windows-1252 range.");return codePoints}}}}),this.__endianness=endianness,this.__length=void 0!==length?length:1/0}__addChunk(chunk){if(this.__data.length+chunk.length>this.__length)throw new RangeError(`Trying to write ${chunk.length} bytes exceeds the length of the data.`);this.__endianness===TcHmi.Endianness.BigEndian&&(chunk=chunk.reverse()),this.__data=this.__data.concat(chunk)}__checkIntegerBounds(value,lengthInBytes,signed){if(value%1!=0)return!1;let range=Math.pow(2,8*lengthInBytes)-1,lowerBound=signed?-Math.ceil(range/2):0;return value>=lowerBound&&value<=range+lowerBound}__checkBigIntegerBounds(value,lengthInBytes,signed){if(signed){if(BigInt.asIntN(8*lengthInBytes,value)===value)return!0}else{if(BigInt.asUintN(8*lengthInBytes,value)===value)return!0}return!1}__writeInteger(value,lengthInBytes){let chunk=[];for(let i=0;i<lengthInBytes;i++)chunk.push(255&value),lengthInBytes-i<=4?value>>>=8:value=Math.floor(value/256);this.__addChunk(chunk)}__writeBigInteger(value,lengthInBytes){let chunk=[];for(let i=0;i<lengthInBytes;i++)chunk.push(Number(0xffn&value)),value=BigInt.asUintN(8*lengthInBytes,value)>>8n;this.__addChunk(chunk)}__writeFloatingPointNumber(value,lengthInBytes){let exponentBits,significandBits;switch(lengthInBytes){case 4:exponentBits=8,significandBits=23;break;case 8:exponentBits=11,significandBits=52}let exponent,significand,bias=Math.pow(2,exponentBits-1)-1,sign=value<0?1:0;if(isFinite(value))if(0===value)sign=1/value==-1/0?1:0,exponent=0,significand=0;else{value=Math.abs(value);let preComma=Math.floor(value),postComma=value-preComma,preCommaLength=0,num=preComma;for(;num>0;)preCommaLength++,num<=4294967295?num>>>=1:num=Math.floor(num/2);significand=preComma>0?preComma-Math.pow(2,preCommaLength-1):0;let significandLength=preCommaLength>0?preCommaLength-1:0;significandLength>significandBits&&(significand<=4294967295?significand>>>=significandLength-significandBits:significand=Math.floor(significand/Math.pow(2,significandLength-significandBits)),significandLength=significandBits);let postCommaIndexOfOne=-1;num=postComma;let i=0;for(;significandLength<significandBits;){num*=2;let bit=num>=1?1:0;i>=bias-1&&-1===postCommaIndexOfOne&&(postCommaIndexOfOne=i),bit&&(num--,-1===postCommaIndexOfOne&&(postCommaIndexOfOne=i,0===preCommaLength))?i++:(significand=significandLength<32?(significand<<1|bit)>>>0:2*significand+bit,(preCommaLength>0||postCommaIndexOfOne>-1||0===postComma)&&significandLength++,i++)}exponent=preCommaLength>0?preCommaLength-1:-postCommaIndexOfOne-1,exponent+=bias;let maxExponentValue=Math.pow(2,exponentBits)-1;exponent<1?exponent=0:exponent>maxExponentValue-1&&(exponent=maxExponentValue,significand=0)}else{exponent=0;for(let i=0;i<exponentBits;i++)exponent=exponent<<1|1;significand=isNaN(value)?1:0}let parts=[{value:significand,length:significandBits},{value:exponent,length:exponentBits},{value:sign,length:1}],chunk=[],partIndex=0;for(let i=0;i<lengthInBytes||parts[partIndex].length<0;i++){let carryBack=0;parts[partIndex].length<0?(carryBack=8+parts[partIndex].length,i--,partIndex++):0===parts[partIndex].length&&partIndex++,void 0===chunk[i]&&(chunk[i]=0),chunk[i]|=parts[partIndex].value<<carryBack&255,parts[partIndex].length<=32?parts[partIndex].value=parts[partIndex].value>>>8-carryBack:parts[partIndex].value=Math.floor(parts[partIndex].value/Math.pow(2,8-carryBack)),parts[partIndex].length-=8-carryBack}this.__addChunk(chunk)}
/**
         * Writes a boolean value.
         * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
         * @param value The boolean value to write.
         * @preserve (Part of the public API)
         */writeBoolean(value){return this.writeByte(value?1:0),this}
/**
         * Writes a single byte of data.
         * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
         * @param value The byte to write.
         * @preserve (Part of the public API)
         */writeByte(value){if(!this.__checkIntegerBounds(value,1,!1))throw new RangeError(`The value ${value} does not fit into a byte.`);return this.__writeInteger(value,1),this}
/**
         * Writes a signed byte.
         * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
         * @param value The byte to write.
         * @preserve (Part of the public API)
         */writeSByte(value){if(!this.__checkIntegerBounds(value,1,!0))throw new RangeError(`The value ${value} does not fit into a signed byte.`);return this.__writeInteger(value,1),this}
/**
         * Writes a signed 16-bit integer.
         * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
         * @param value The number to write.
         * @preserve (Part of the public API)
         */writeInt16(value){if(!this.__checkIntegerBounds(value,2,!0))throw new RangeError(`The value ${value} does not fit into an int16.`);return this.__writeInteger(value,2),this}
/**
         * Writes an unsigned 16-bit integer.
         * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
         * @param value The number to write.
         * @preserve (Part of the public API)
         */writeUInt16(value){if(!this.__checkIntegerBounds(value,2,!1))throw new RangeError(`The value ${value} does not fit into an uint16.`);return this.__writeInteger(value,2),this}
/**
         * Writes a signed 32-bit integer.
         * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
         * @param value The number to write.
         * @preserve (Part of the public API)
         */writeInt32(value){if(!this.__checkIntegerBounds(value,4,!0))throw new RangeError(`The value ${value} does not fit into a int32.`);return this.__writeInteger(value,4),this}
/**
         * Writes an unsigned 32-bit integer.
         * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
         * @param value The number to write.
         * @preserve (Part of the public API)
         */writeUInt32(value){if(!this.__checkIntegerBounds(value,4,!1))throw new RangeError(`The value ${value} does not fit into an uint32.`);return this.__writeInteger(value,4),this}
/**
         * Writes a signed 64-bit integer.
         * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
         * @param value The number to write.
         * @preserve (Part of the public API)
         */writeInt64(value){if(!this.__checkBigIntegerBounds(value,8,!0))throw new RangeError(`The value ${value} does not fit into a int64.`);return this.__writeBigInteger(value,8),this}
/**
         * Writes an unsigned 64-bit integer.
         * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
         * @param value The number to write.
         * @preserve (Part of the public API)
         */writeUInt64(value){if(!this.__checkBigIntegerBounds(value,8,!1))throw new RangeError(`The value ${value} does not fit into a uint64.`);return this.__writeBigInteger(value,8),this}
/**
         * Writes a single precision floating point number.
         * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
         * @param value The number to write.
         * @preserve (Part of the public API)
         */writeFloat(value){return this.__writeFloatingPointNumber(value,4),this}
/**
         * Writes a double precision floating point number.
         * This function throws an exception if the provided value does not fit into this datatype or if length was specified during writer construction and the value to write does not fit into the remaining length.
         * @param value The number to write.
         * @preserve (Part of the public API)
         */writeDouble(value){return this.__writeFloatingPointNumber(value,8),this}
/**
         * Writes a string.
         * This function throws an exception if the provided value does not fit into the given length or if length was specified during writer construction and the value to write does not fit into the remaining length.
         * @param value The string to write.
         * @param optionsOrLength The options to use or the length of the string to write.
         * @preserve (Part of the public API)
         */writeString(value,optionsOrLength){let options={encoding:"UTF-8",addNullTerminator:!1};"number"==typeof optionsOrLength?options.length=optionsOrLength:optionsOrLength&&(optionsOrLength.encoding&&optionsOrLength.encoding in this.__stringEncodings&&(options.encoding=optionsOrLength.encoding),void 0!==optionsOrLength.length&&(options.length=optionsOrLength.length),optionsOrLength.addNullTerminator&&(options.addNullTerminator=!0));const codePoints=this.__getCodePointsFromString(value);options.addNullTerminator&&0!==codePoints[codePoints.length-1]&&codePoints.push(0);let bytes=this.__stringEncodings[options.encoding].encode(codePoints,this.__endianness);if(void 0!==options.length){for(;bytes.length<options.length;)bytes.push(0);if(bytes.length>options.length)throw new RangeError("The specified string does not fit into the specified length.")}if(this.__data.length+bytes.length>this.__length)throw new RangeError(`Trying to write ${bytes.length} bytes exceeds the length of the data.`);return this.__data=this.__data.concat(bytes),this}__getCodePointsFromString(value){let codePoints=[];for(let i=0,ii=value.length;i<ii;i++){let first=value.charCodeAt(i);if(first>=55296&&first<=56319&&i<ii-1){let second=value.charCodeAt(i+1);second>=56320&&second<=57343?(codePoints.push(1024*(first-55296)+second-56320+65536),i++):codePoints.push(first)}else codePoints.push(first)}return codePoints}
/**
         * Returns the base64 encoded string. If not enough data was written to fill the length the data should have, the rest is filled up with zeros.
         * @preserve (Part of the public API)
         */getEncodedString(){const length=this.__data.length;if(isFinite(this.__length)&&this.__data.length<this.__length){const start=this.__data.length;this.__data.length=this.__length,this.__data.fill(0,start)}const rawChunks=[];for(let i=0;i<this.__data.length;i+=1e4)rawChunks.push(String.fromCharCode(...this.__data.slice(i,i+1e4)));return this.__data.length=length,tchmi_base64encode(rawChunks.join(""))}
/**
         * Returns the length of the data that has been written.
         * @preserve (Part of the public API)
         */getLength(){return this.__data.length}}}(TcHmi||(TcHmi={})),function(TcHmi){
/**
     * Provides functions for creating and removing bindings.
     * @preserve (Part of the public API)
     */
class Binding{static __getFuncName(fn,control){let res=null,current=control;do{const propertyNames=Object.getOwnPropertyNames(current);for(const propertyName of propertyNames)if("arguments"!==propertyName&&"caller"!==propertyName&&current[propertyName]===fn){res=propertyName;break}}while(current=Object.getPrototypeOf(current));return res}
/**
         * Creates a binding between a symbol and a control attribute setter function.
         * @param expression The target symbol expression.
         * @param fn The target function as prototype reference.
         * @param control The target control instance.
         * @preserve (Part of the public API)
         */static create(expression,fn,control){const fnName=Binding.__getFuncName(fn,control);null!==fnName&&Binding.createEx(expression,fnName,control)}
/**
         * Creates a binding between a symbol and a control attribute setter function by name.
         * @param expression The target symbol expression.
         * @param fn The name of the control setter function.
         * @param control The target control instance.
         * @preserve (Part of the public API)
         */static createEx(expression,fn,control){if(!TcHmi.System.Services.controlManager||!TcHmi.System.Services.bindingManager)return void TcHmi.Log.error("[Source=Framework, Module=TcHmi.Binding] Creating binding at control "+control.getId()+" failed. System not ready.");const attr=TcHmi.System.Services.controlManager.getAttributeByPropertySetterName(control,fn);attr?TcHmi.System.Services.bindingManager.createBinding(expression,attr.propertyName,control):TcHmi.Log.error("[Source=Framework, Module=TcHmi.Binding] The attribute with the setter "+fn+" is not included in the description.json of "+control.getType()+". Creating a binding with this attribute failed.")}
/**
         * Creates a binding between a symbol and a control attribute setter function by name of property.
         * @param expression The target symbol expression.
         * @param propertyName The name of the control property.
         * @param control The target control instance.
         * @preserve (Part of the public API)
         */static createEx2(expression,propertyName,control){TcHmi.System.Services.bindingManager?TcHmi.System.Services.bindingManager.createBinding(expression,propertyName,control):TcHmi.Log.error("[Source=Framework, Module=TcHmi.Binding] Creating binding at control "+control.getId()+" failed. System not ready.")}
/**
         * Removes a binding between a symbol and a control attribute setter function.
         * @param expression [OBSOLETE] The target symbol expression.
         * @param fn The target function as prototype reference.
         * @param control The target control instance.
         * @param bReset [Optional] If set to false the setter will not resetted with null.
         * @preserve (Part of the public API)
         */static remove(expression,fn,control,bReset=!0){const fnName=Binding.__getFuncName(fn,control);null!==fnName&&Binding.removeEx(expression,fnName,control,bReset)}
/**
         * Removes a binding between a symbol and a control attribute setter function.
         * @param expression [OBSOLETE] The target symbol expression.
         * @param fn The name of the control setter function.
         * @param control The target control instance.
         * @param bReset [Optional] If set to false the setter will not resetted with null.
         * @preserve (Part of the public API)
         */static removeEx(expression,fn,control,bReset=!0){if(!TcHmi.System.Services.controlManager)return void TcHmi.Log.error("[Source=Framework, Module=TcHmi.Binding] Removing binding at control "+control.getId()+" failed. System not ready.");const attr=TcHmi.System.Services.controlManager.getAttributeByPropertySetterName(control,fn);attr?Binding.removeEx2(expression,attr.propertyName,control,bReset):TcHmi.Log.error("[Source=Framework, Module=TcHmi.Binding] The attribute with the setter "+fn+" is not included in the description.json of "+control.getType()+". Removing a binding with this attribute failed.")}
/**
         * Removes a binding between a symbol and a control attribute setter function by name of property.
         * @param _unused [OBSOLETE] The target symbol expression.
         * @param propertyName The name of the control attribute property.
         * @param control The target control instance.
         * @param bReset [Optional] If set to false the setter will not resetted with null.
         * @preserve (Part of the public API)
         */static removeEx2(_unused,propertyName,control,bReset=!0){TcHmi.System.Services.bindingManager?TcHmi.System.Services.bindingManager.removeBinding(propertyName,control,bReset):TcHmi.Log.error("[Source=Framework, Module=TcHmi.Binding] Removing binding at control "+control.getId()+" failed. System not ready.")}
/**
         * Returns true if a symbol is bound to the target control property.
         * @param propertyName The name of the control attribute property.
         * @param control The target control instance.
         * @preserve (Part of the public API)
         */static exists(propertyName,control){return!!Binding.resolve(propertyName,control)}
/**
         * Returns the symbol expression of a binding as string or null if no symbol is bound to the target control property.
         * @param propertyName The name of the control attribute property.
         * @param control The target control instance.
         * @preserve (Part of the public API)
         */static resolve(propertyName,control){if(!TcHmi.System.Services.bindingManager)return TcHmi.Log.error("[Source=Framework, Module=TcHmi.Binding] Resolving binding at control "+control.getId()+" failed. System not ready."),null;const binding=TcHmi.System.Services.bindingManager.getBinding(propertyName,control);if(binding){const symbol=binding.getSymbol();if(symbol)return symbol.getExpression().toString()}return null}
/**
         * Returns the symbol expression of a binding as SymbolExpression object or null if no symbol is bound to the target control property.
         * @param propertyName The name of the control attribute property.
         * @param control The target control instance.
         * @preserve (Part of the public API)
         */static resolveEx(propertyName,control){if(!TcHmi.System.Services.bindingManager)return TcHmi.Log.error("[Source=Framework, Module=TcHmi.Binding] Resolving binding at control "+control.getId()+" failed. System not ready."),null;const binding=TcHmi.System.Services.bindingManager.getBinding(propertyName,control);if(binding){const symbol=binding.getSymbol();if(symbol)return new TcHmi.SymbolExpression(symbol.getExpression().toString())}return null}}TcHmi.Binding=Binding}(TcHmi||(TcHmi={})),function(TcHmi){TcHmi.Callback=class{
/**
         * Calls a callback and catches exceptions to return them as value of type {Error} for further processing.
         * @param callback function to call
         * @param thisArg the this pointer in the function call
         * @param args parameters for the function call
         * @returns undefined or the Error in case of an exception
         * @template T this for the call
         * @template A Array of types for all parameter for the function
         * @preserve (Part of the public API)
         */
static callSafe(callback,thisArg,...args){let res;if(callback&&"function"==typeof callback)try{callback.call(thisArg,...args)}catch(e){res=e instanceof Error?e:new Error("Function "+(callback.name?callback.name+" ":"")+"has thrown a plain value (no Error object) and therefore lacks a callstack. Thrown value: "+e)}return res}
/**
         * Calls a callback and catches exceptions to return them as value of type {Error} for further processing and prints it to console for proper call stack.
         * @param callback function to call
         * @param thisArg the this pointer in the function call
         * @param args parameters for the function call
         * @returns undefined or the Error in case of an exception
         * @template T this for the call
         * @template A Array of types for all parameter for the function
         * @preserve (Part of the public API)
         */static callSafeEx(callback,thisArg,...args){let res;if(callback&&"function"==typeof callback)try{callback.call(thisArg,...args)}catch(e){res=e instanceof Error?e:new Error("Function "+(callback.name?callback.name+" ":"")+"has thrown a plain value (no Error object) and therefore lacks a callstack. Thrown value: "+e)}return res&&TcHmi.Log.error(res),res}}}(TcHmi||(TcHmi={})),function(TcHmi){TcHmi.control={};TcHmi.Control=class{}}(TcHmi||(TcHmi={})),function(TcHmi){TcHmi.ControlFactory=
/**
     * Class for creating control instances.
     * @preserve (Part of the public API)
     */
class{
/**
         * Creates a new control.
         * This function throws an exception if one of the given parameter values is invalid.
         * * Attributes are given with its html attribute names:
         * ```json
         * {
         *     'data-tchmi-attribute1' : true,
         *     'data-tchmi-attribute2' : false
         * }
         * ```
         * @param type The type of the control.
         * @param id The identifier of the control.
         * @param attributes A dictionary for the attributes with the html attribute names as keys
         * @param parent Optional. The logical parent control.
         * @template C defines the type for the new control
         * @preserve (Part of the public API)
         */
static createEx(type,id,attributes,parent){if(!TcHmi.System.Services.controlManager)return void TcHmi.Log.error("[Source=Framework, Module=TcHmi.ControlFactory] Creating a control failed. System not ready.");if(TcHmi.System.isParameterTypeInvalid(type,"type",{type:"string",required:"valueNeeded",minStringLength:1}))throw new TypeError('[[Source=Framework, Module=TcHmi.ControlFactory.createEx] Invalid value: "'+type+'" for parameter: "type"');if(TcHmi.System.isParameterTypeInvalid(id,"id",{type:"string",required:"valueNeeded",minStringLength:1}))throw new TypeError('[[Source=Framework, Module=TcHmi.ControlFactory.createEx] Invalid value: "'+id+'" for parameter: id');if(TcHmi.System.isParameterTypeInvalid(attributes,"attributes ",{type:"object",required:"nullOk"})||__tchmi_is_instanced_object(attributes))throw new TypeError('[[Source=Framework, Module=TcHmi.ControlFactory.createEx] Invalid value: "'+attributes+'" for parameter: attributes');if(parent&&!(parent instanceof TcHmi.Controls.System.baseTcHmiControl))throw new TypeError('[[Source=Framework, Module=TcHmi.ControlFactory.createEx] Invalid value: "'+parent+'" for parameter: parent');let elem=document.createElement("div");return elem.id=id,elem.setAttribute("data-tchmi-type",type),TcHmi.System.Services.controlManager.compile(elem,parent,{designerIgnore:!0,overrideAttr:attributes}).control}
/**
         * DEPRECATED
         * Creates a new control.
         * @param htmlOrElementOrType The HTML, jQuery element or type of the control.
         * @param id Optional the identifier of the control.
         * @param parent Optional. The logical parent control.
         * @deprecated Please use createEx()
         * @template C defines the type for the new control
         * @preserve (Part of the public API)
         */static create(htmlOrElementOrType,id,parent){if(!TcHmi.System.Services.controlManager)return void TcHmi.Log.error("[Source=Framework, Module=TcHmi.ControlFactory] Creating a control failed. System not ready.");let jControl;if(null==id)jControl="string"==typeof htmlOrElementOrType?$(htmlOrElementOrType):htmlOrElementOrType;else{if("string"!=typeof htmlOrElementOrType)return void TcHmi.Log.error("[Source=Framework, Module=TcHmi.ControlFactory] Error compiling control. Wrong input parameter given.");jControl=$('<div id="'+id+'" data-tchmi-type="'+htmlOrElementOrType+'"></div>')}if(0===jControl.length)return;if(void 0!==TcHmi.Controls.get(jControl[0].id))return void TcHmi.Log.error("[Source=Framework, Module=TcHmi.ControlFactory] Error compiling control. A control with the name "+jControl[0].id+" already exists.");return TcHmi.System.Services.controlManager.compile(jControl[0],parent,{designerIgnore:!0}).control}}}(TcHmi||(TcHmi={})),function(TcHmi){!function(Controls){Controls.register=
/**
         * DEPRECATED
         * Register a control.
         * The Framework will fetch and interprete the Description.json in the Control Directory and optionally load a HTML Template file
         * @param controlTypeName Name of the Control type.
         * @param constructor Constructor which generates the TcHmi Control.
         * @param directory Directory of the Control (base path is the Controls directory).
         * @param template Template file of the Control (base path is the Controls directory).
         * @template C defines the type for the control to register
         * @preserve (Part of the public API)
         * @deprecated Please use registerEx()
         */
function(controlTypeName,constructor,directory,template){let registration={error:TcHmi.Errors.NONE,apiVersion:0,name:controlTypeName,ctrlConstructor:constructor,directory:directory,template:template};if(constructor.toString().startsWith("class"))registration.nativeEs6Control=!0;else{registration.nativeEs6Control=!1;let firstES6constructor=constructor;do{firstES6constructor=Object.getPrototypeOf(firstES6constructor)}while(firstES6constructor&&!firstES6constructor.toString().startsWith("class"));firstES6constructor&&(registration.nearestEs6Constructor=firstES6constructor)}TcHmi.System.Data.Registrations.controls.map.has(controlTypeName)?TcHmi.System.Data.Registrations.controls.map.set(controlTypeName,{apiVersion:1,error:TcHmi.Errors.E_NOT_UNIQUE,errorDetails:{code:TcHmi.Errors.E_NOT_UNIQUE,message:TcHmi.Errors[TcHmi.Errors.E_NOT_UNIQUE],domain:"TcHmi.Controls.register",reason:'Ambiguous registration for the type name: "'+controlTypeName+'". Control will not be addressable by this type name. Please try fully qualified name to access control.'}}):TcHmi.System.Data.Registrations.controls.map.set(controlTypeName,registration),TcHmi.System.Data.Registrations.controls.array.push(registration),TcHmi.EventProvider.raise("System.onControlRegistered",registration)},Controls.registerEx=
/**
         * Register a control.
         * The Framework will fetch and interprete the Description.json in the Control Directory and optionally load a HTML Template file
         * @param controlTypeName Name of the Control type.
         * @param namespace Name of the Control namespace.
         * @param constructor Constructor which generates the TcHmi Control.
         * @param options options
         * @param options.injectInGlobalObject Inject the control implementation at namespace.name in global object
         * @template C defines the type for the control to register
         * @preserve (Part of the public API)
         */
function(controlTypeName,namespace,constructor,options){let registration={error:TcHmi.Errors.NONE,apiVersion:1,name:controlTypeName,namespace:namespace,ctrlConstructor:constructor};if(constructor.toString().startsWith("class"))registration.nativeEs6Control=!0;else{registration.nativeEs6Control=!1;let firstES6constructor=constructor;do{firstES6constructor=Object.getPrototypeOf(firstES6constructor)}while(firstES6constructor&&!firstES6constructor.toString().startsWith("class"));firstES6constructor&&(registration.nearestEs6Constructor=firstES6constructor)}let qname=TcHmi.System.resolveQualifiedName(controlTypeName,namespace);if(TcHmi.System.Data.Registrations.controls.map.has(controlTypeName)?TcHmi.System.Data.Registrations.controls.map.set(controlTypeName,{apiVersion:1,error:TcHmi.Errors.E_NOT_UNIQUE,errorDetails:{code:TcHmi.Errors.E_NOT_UNIQUE,message:TcHmi.Errors[TcHmi.Errors.E_NOT_UNIQUE],domain:"TcHmi.Controls.registerEx",reason:'Ambiguous registration for the type name: "'+controlTypeName+'". Control will not be addressable by this type name. Please try fully qualified name to access control.'}}):TcHmi.System.Data.Registrations.controls.map.set(controlTypeName,registration),TcHmi.System.Data.Registrations.controls.map.has(qname)?TcHmi.System.Data.Registrations.controls.map.set(qname,{apiVersion:1,error:TcHmi.Errors.E_NOT_UNIQUE,errorDetails:{code:TcHmi.Errors.E_NOT_UNIQUE,message:TcHmi.Errors[TcHmi.Errors.E_NOT_UNIQUE],domain:"TcHmi.Controls.registerEx",reason:'Ambiguous registration for the name: " '+qname+'". Control will not be addressable by this name.'}}):(TcHmi.System.Data.Registrations.controls.map.set(qname,registration),options?.injectInGlobalObject&&TcHmi.System.injectInGlobalObject(qname,constructor)),TcHmi.System.mapControlNamesFromPackageManifestApi1ToApi0.has(qname)){let nameLegacy=TcHmi.System.mapControlNamesFromPackageManifestApi1ToApi0.get(qname);TcHmi.System.Data.Registrations.controls.map.has(nameLegacy)?TcHmi.System.Data.Registrations.controls.map.set(nameLegacy,{apiVersion:1,error:TcHmi.Errors.E_NOT_UNIQUE,errorDetails:{code:TcHmi.Errors.E_NOT_UNIQUE,message:TcHmi.Errors[TcHmi.Errors.E_NOT_UNIQUE],domain:"TcHmi.Controls.registerEx",reason:'Ambiguous registration for the name: " '+qname+'". Control will not be addressable by this name.'}}):TcHmi.System.Data.Registrations.controls.map.set(nameLegacy,registration)}TcHmi.System.Data.Registrations.controls.array.push(registration),TcHmi.EventProvider.raise("System.onControlRegistered",registration)},Controls.get=
/**
         * Get control by identifier. Returns the control or undefined.
         * @param id Identifier of the Control.
         * @template T Type of the Control
         * @preserve (Part of the public API)
         */
function(id){if(!id||!TcHmi.System.Services.controlManager)return;return TcHmi.System.Services.controlManager.getControlsCache().get(id)},Controls.getVersion=
/**
         * Gets version information of control by type.
         * @param type Type of the Control.
         * @preserve (Part of the public API)
         */
function(type){if(!type||!TcHmi.System.Services.controlManager)return null;let descr=TcHmi.System.Services.controlManager.getDescription(type);return descr&&descr.version&&"object"==typeof descr.version?tchmi_clone_object(descr.version):null},Controls.getBasePath=
/**
         * Returns the dynamic base path of a control.
         * @preserve (Part of the public API)
         * @param type Control type name
         */
function(type){return TcHmi.Environment.getControlBasePath(type)},Controls.getBasePathEx=
/**
         * Returns the dynamic base path of a control.
         * @preserve (Part of the public API)
         * @param control TcHmi Control reference
         */
function(control){return TcHmi.Environment.getControlBasePathEx(control)},Controls.getMap=
/**
         * Get an ES5 Map of all controls. Key of the map is the control identifier
         * @preserve (Part of the public API)
         */
function(){return TcHmi.System.Services.controlManager?tchmi_clone_object(TcHmi.System.Services.controlManager.getControlsCache(),{cloneMaps:{deepCloneKeys:!1,deepCloneValues:!1}}):(TcHmi.Log.error("[Source=Framework, Module=TcHmi.Controls] Accessing control map failed. System not ready."),new Map)},Controls.limitPixelDimensionToControlBound=function(control,dimension,valueToTest){let currentMinValue=null,currentMaxValue=null;return"height"===dimension?("px"===control.getMinHeightUnit()&&(currentMinValue=control.getMinHeight()??null),"px"===control.getMaxHeightUnit()&&(currentMaxValue=control.getMaxHeight()??null)):"width"===dimension&&("px"===control.getMinWidthUnit()&&(currentMinValue=control.getMinWidth()??null),"px"===control.getMaxWidthUnit()&&(currentMaxValue=control.getMaxWidth()??null)),null===valueToTest?currentMinValue:(currentMinValue&&valueToTest<currentMinValue&&(valueToTest=currentMinValue),currentMaxValue&&valueToTest&&valueToTest>currentMaxValue&&(valueToTest=currentMaxValue),valueToTest)},Controls.tachControls=
/**
         * DEPRECATED
         * Does no longer do anything
         * @deprecated Does no longer do anything
         * @param callback will be imediately called
         * @preserve (Part of the public API)
         */
function(callback=null){TcHmi.Log.warn('[Source=Framework, Module=TcHmi.Controls] The function "TcHmi.Controls.tachControls(callback: null | ((this: void) => void) = null)" has been marked as deprecated and should no longer be used because it does no longer do anything.'),"function"==typeof callback&&callback.apply(null)},Controls.tachControlsAsync=function(callback=null){TcHmi.Log.warn('[Source=Framework, Module=TcHmi.Controls] The function "TcHmi.Controls.tachControlsAsync(callback: null | ((this: void) => void) = null)" has been marked as deprecated and should no longer be used because it does no longer do anything.'),"function"==typeof callback&&callback.apply(null)}}(TcHmi.Controls||(TcHmi.Controls={}))}(TcHmi||(TcHmi={})),function(TcHmi){
/**
     * Provides multiple types of dialogs to the user.
     * @preserve (Part of the public API)
     */
class DialogManager{
/**
         * Change visibility of dialog and set its DialogType when showing.
         * @param dialogOwner Caller Id to prevent overwriting forreign dialogs
         * @param bVisibility Toggling visiblity of dialog
         * @param dialogType Type of dialog
         * @param options Options
         * @returns returns false if the dialog could not be opened
         * @preserve (Part of the public API)
         */
static showDialog(dialogOwner,bVisibility,dialogType,options){return TcHmi.System.Services.dialogManager?TcHmi.System.Services.dialogManager.showDialog(dialogOwner,bVisibility,dialogType,options):(TcHmi.Log.error("[Source=Framework, Module=TcHmi.DialogManager] Creating dialog failed. System not ready."),!1)}
/**
         * Changes the output content of the Dialog to a new value.
         * Will always target DialogType.Overlay. Use updateTextEx if you want to target a specific DialogType.
         * The default DialogSeverity is Info.
         * @param dialogOwner Caller Id to prevent overwriting forreign dialogs
         * @param html Content to show
         * @param severity Severity for the content.
         * @returns Success of the text update
         * @preserve (Part of the public API)
         */static updateText(dialogOwner,html,severity=DialogManager.DialogSeverity.Info){return TcHmi.System.Services.dialogManager?TcHmi.System.Services.dialogManager.updateText(dialogOwner,html,severity):(TcHmi.Log.error("[Source=Framework, Module=TcHmi.DialogManager] Updating dialog failed. System not ready."),!1)}
/**
         * Changes the output content of the Dialog to a new value.
         * The default DialogType is Overlay.
         * The default DialogSeverity is Info.
         * @param dialogOwner Caller Id to prevent overwriting forreign dialogs
         * @param html Text to display
         * @param options options
         * @param options.dialogType Overlay or watermark
         * @param options.severity severity of the text
         * @param options.buttonReload If true a reload button is added
         * @returns Success of the text update
         * @preserve (Part of the public API)
         */static updateTextEx(dialogOwner,html,options){return TcHmi.System.Services.dialogManager?TcHmi.System.Services.dialogManager.updateTextEx(dialogOwner,html,options):(TcHmi.Log.error("[Source=Framework, Module=TcHmi.DialogManager] Updating dialog failed. System not ready."),!1)}
/**
         * Returns the current dialog owner or null.
         * @preserve (Part of the public API)
         */static getDialogOwner(){return TcHmi.System.Services.dialogManager?TcHmi.System.Services.dialogManager.getDialogOwner():(TcHmi.Log.error("[Source=Framework, Module=TcHmi.DialogManager] Getting dialog owner failed. System not ready."),null)}
/**
         * Builds a formatted message of hierarchical error objects for use in dialog.
         * @param error Error object to show nicely
         * @preserve (Part of the public API)
         */static buildMessage(error){let __buildMessage=function(error,level){if(!error)return"";let res="",space="&nbsp;&nbsp;";for(let i=0,ii=level;i<ii;i++)space+="&nbsp;&nbsp;";if(error.code&&(res+="Code: "+error.code+"/0x"+error.code.toString(16)),error.message&&(res+=", Message: "+error.message),error.reason&&(res+="<br />"+space+"Reason: "+error.reason),error.domain&&(res+="<br />"+space+"Domain: "+error.domain),void 0!==error.errors&&error.errors.length){res+="<br />"+space+"as result of: ";for(let i=0,ii=error.errors.length;i<ii;i++)res+=__buildMessage(error.errors[i],level+1)}return res};return __buildMessage(error,0)}}TcHmi.DialogManager=DialogManager,function(DialogManager){let DialogSeverity,DialogType;!function(DialogSeverity){DialogSeverity[DialogSeverity.Info=0]="Info",DialogSeverity[DialogSeverity.Warning=1]="Warning",DialogSeverity[DialogSeverity.Error=2]="Error"}(DialogSeverity=DialogManager.DialogSeverity||(DialogManager.DialogSeverity={})),function(DialogType){DialogType[DialogType.Overlay=1]="Overlay",DialogType[DialogType.Watermark=2]="Watermark"}(DialogType=DialogManager.DialogType||(DialogManager.DialogType={}))}(DialogManager=TcHmi.DialogManager||(TcHmi.DialogManager={}))}(TcHmi||(TcHmi={})),function(TcHmi){!function(Engineering){class ErrorPane{static add(id,content,type){TcHmi.System.Services.Engineering.errorPane&&TcHmi.System.Services.Engineering.errorPane.add(id,content,type)}static remove(id){TcHmi.System.Services.Engineering.errorPane&&TcHmi.System.Services.Engineering.errorPane.remove(id)}}Engineering.ErrorPane=ErrorPane,function(ErrorPane){let MessageType;!function(MessageType){MessageType[MessageType.Message=0]="Message",MessageType[MessageType.Error=1]="Error",MessageType[MessageType.Warning=2]="Warning",MessageType[MessageType.Information=3]="Information"}(MessageType=ErrorPane.MessageType||(ErrorPane.MessageType={}))}(ErrorPane=Engineering.ErrorPane||(Engineering.ErrorPane={}))}(TcHmi.Engineering||(TcHmi.Engineering={}))}(TcHmi||(TcHmi={})),function(TcHmi){
/**
     * Provides environment information.
     * @preserve (Part of the public API)
     */
class Environment{
/**
         * Returns the dynamic framework base path.
         * @preserve (Part of the public API)
         */
static getBasePath(){return tchmi_path(TcHmi.System.config.basePath)}
/**
         * Returns the dynamic base path of a control.
         * @preserve (Part of the public API)
         * @param type Control type name
         */static getControlBasePath(type){let module=TcHmi.System.Data.Modules.controls.map.get(type);return module&&module.error===TcHmi.Errors.NONE&&module.package&&"string"==typeof module.package.basePath&&module.manifestData&&"string"==typeof module.manifestData.basePath?tchmi_path(module.package.basePath+"/"+module.manifestData.basePath):null}
/**
         * Returns the dynamic base path of a control.
         * @preserve (Part of the public API)
         * @param control TcHmi Control reference
         */static getControlBasePathEx(control){return control?Environment.getControlBasePath(control.getType()):null}static getBrowserCapabilities(){return this.__browserCapabilities}static getHostBaseUri(){return TcHmi.System.hostBaseUri}static getServerSidePathAndQuery(){return TcHmi.System.serverSidePathAndQuery}static async __initBrowserCapabilities(){if(!("CefSharp"in window))return void(this.__browserCapabilities={isCefSharp:!1,isTcEmbeddedBrowser:!1,supportsDownload:!0});const cefSharpWindow=window;cefSharpWindow.tcEmbeddedBrowserGlobals||await cefSharpWindow.CefSharp.BindObjectAsync("tcEmbeddedBrowserGlobals"),this.__browserCapabilities={isCefSharp:!0,isTcEmbeddedBrowser:!!cefSharpWindow.tcEmbeddedBrowserGlobals,supportsDownload:cefSharpWindow.tcEmbeddedBrowserGlobals?.supportsDownload??!0}}}Object.defineProperty(Environment,"__browserCapabilities",{enumerable:!0,configurable:!0,writable:!0,value:{isCefSharp:"CefSharp"in window,isTcEmbeddedBrowser:!1,supportsDownload:!0}}),TcHmi.Environment=Environment,Environment.__initBrowserCapabilities()}(TcHmi||(TcHmi={})),function(TcHmi){
/**
     * Provides functions for managing events.
     * @preserve (Part of the public API)
     */
class EventProvider{
/**
         * Register a callback to an event name.
         * If the name is a symbol expression the callback will be initially called when
         * there is a symbol with this name.
         * Returns a destroy function to remove the registration.
         * @param name Name of the event.
         * @param callback Callback which will be called
         * @param options Data an event can be given while registration.
         * @param registrationData Additional data and options for the event registration.
         * @param registrationData.ctx Context to be used when resolving %ctx% symbols.
         * @returns Destroy function which cleans up/unregisters
         * @preserve (Part of the public API)
         */
static register(name,callback,options,registrationData){let destroyWatch,internalEventId=0,destroyed=!1,s=null;const nameExpressionSymbols=[],nameValueSymbols=[],destroyNameValueWatches=()=>{for(const item of nameValueSymbols)item.destroyWatch(),item.symbol.destroy();nameValueSymbols.splice(0,nameValueSymbols.length)};let registeredName="";const destroyEvent=()=>{if(!internalEventId||!registeredName)return;destroyWatch&&(destroyWatch(),destroyWatch=void 0),s&&s.destroy();const event=EventProvider.__events.get(registeredName),entry=event?.get(internalEventId);event&&(event.delete(internalEventId),0===event.size&&EventProvider.__events.delete(registeredName)),s?s=null:(TcHmi.EventProvider.raise("System.EventProvider.onDestroyedCallback<"+registeredName+">",entry),TcHmi.EventProvider.raise("System.EventProvider.onDestroyedCallback",entry)),registeredName=""},destroy=()=>{destroyed=!0,(()=>{for(const item of nameExpressionSymbols)item.destroyWatch(),item.symbol.destroy();nameExpressionSymbols.splice(0,nameExpressionSymbols.length)})(),destroyNameValueWatches(),destroyEvent()},register=name=>{internalEventId=++this.__internalEventId,registeredName=name;let event=EventProvider.__events.get(name);void 0===event&&(event=new Map,EventProvider.__events.set(name,event));const entry={id:internalEventId,name:name,callback:callback,options:options,destroy:destroy};event.set(internalEventId,entry),TcHmi.Symbol.isSymbolExpression(name)?(s=new TcHmi.System.Symbol({expression:name,ctx:registrationData?.ctx}),destroyWatch=s.watch((function(data){destroyWatch||(destroyWatch=data.destroy),data.error===TcHmi.Errors.NONE&&TcHmi.Callback.callSafeEx(callback,null,{name:name,destroy:destroy},data.value)}))):(TcHmi.EventProvider.raise("System.EventProvider.onRegisterCallback<"+name+">",entry),TcHmi.EventProvider.raise("System.EventProvider.onRegisterCallback",entry))},handleSymbols=symbolExpressions=>{const symbolExpressionsToResolve=new Map(symbolExpressions.filter((expression=>"Resolve"===expression.options.EventRegistrationMode)).filter(((a,_index,expressions)=>!expressions.some((b=>b.original.toString()!==a.original.toString()&&b.original.toString().includes(a.original.toString()))))).map((expression=>[expression.original,{isResolved:!1}])));if(0===symbolExpressionsToResolve.size)return void register(name);const nameParts=[],toWatch=[];let position=0;for(const[expression,state]of symbolExpressionsToResolve){const splitIndex=name.indexOf(expression.toString(),position);if(-1===splitIndex)continue;splitIndex!==position&&nameParts.push(name.substring(position,splitIndex));const index=nameParts.length;nameParts.push(""),position+=splitIndex+expression.toString().length,toWatch.push({expression:expression,state:state,index:index})}position<name.length&&nameParts.push(name.substring(position));for(const item of toWatch){const symbol=new TcHmi.System.Symbol({expression:item.expression,ctx:registrationData?.ctx}),destroyWatch=symbol.watch((data=>{data.error===TcHmi.Errors.NONE&&"value"in data?(item.state.isResolved=!0,nameParts[item.index]=data.value,Array.from(symbolExpressionsToResolve.values()).every((state=>state.isResolved))&&!destroyed&&(destroyEvent(),register(nameParts.join("")))):TcHmi.Log.error(`[Source=Framework, Module=TcHmi.EventProvider] Failed to watch symbol '${item.expression.toString()}': ${TcHmi.Log.buildMessage(data.details)}`)}));nameValueSymbols.push({symbol:symbol,destroyWatch:destroyWatch})}},symbolExpressions=new TcHmi.System.SymbolExpressionFromText(name).resolveExpressions().map((expression=>({original:expression,resolved:expression.hasChildren()?null:expression})));if(0===symbolExpressions.length)register(name);else{const symbolExpressionsToWatch=symbolExpressions.filter((expression=>!expression.resolved)).filter(((a,_index,expressions)=>!expressions.some((b=>b.original.toString()!==a.original.toString()&&b.original.toString().includes(a.original.toString())))));if(0===symbolExpressionsToWatch.length)handleSymbols(symbolExpressions.map((expression=>({original:expression.original,options:expression.resolved.getOptions()}))));else for(const expression of symbolExpressionsToWatch){const symbol=new TcHmi.System.Symbol({expression:expression.original,ctx:registrationData?.ctx}),destroyWatch=symbol.watchExpression((data=>{if(data.error!==TcHmi.Errors.NONE||!data.value)return void TcHmi.Log.error(`[Source=Framework, Module=TcHmi.EventProvider] Failed to watch expression '${expression.original.toString()}': ${TcHmi.Log.buildMessage(data.details)}`);const changed=!expression.resolved||expression.resolved.getOptions().EventRegistrationMode!==data.value.getOptions().EventRegistrationMode;expression.resolved=data.value,symbolExpressions.every((expression=>null!==expression.resolved))&&changed&&!destroyed&&(destroyNameValueWatches(),destroyEvent(),handleSymbols(symbolExpressions.map((expression=>({original:expression.original,options:expression.resolved.getOptions()})))))}));nameExpressionSymbols.push({symbol:symbol,destroyWatch:destroyWatch})}}return destroy}
/**
         * Calls all registered callbacks related to an event name.
         * @param name Name of the event.
         * @param args Optional parameter(s) which will be transfered to the callbacks
         * @preserve (Part of the public API)
         */static raise(name,...args){const eventMap=EventProvider.__events.get(name);if(eventMap)for(const event of eventMap.values())TcHmi.Callback.callSafeEx(event.callback,null,{name:event.name,destroy:event.destroy??function(){}},...args)}
/**
         * Calls the callback of a specific event registration.
         * @param event Event object
         * @param args optional parameter(s) which will be transfered to the callbacks
         * @preserve (Part of the public API)
         */static raiseEx(event,...args){TcHmi.Callback.callSafeEx(event.callback,null,{name:event.name,destroy:event.destroy??function(){}},...args)}static watchEventRegistration(name,callback){let destroyEventOnDestroyCallback=null,register=function(event){destroyEventOnDestroyCallback=TcHmi.EventProvider.register("System.EventProvider.onDestroyedCallback<"+name+">",(function(e,event){TcHmi.Callback.callSafeEx(callback,EventProvider,{error:TcHmi.Errors.NONE,type:EventProvider.EventRegWatchType.DESTROY,event:event}),destroyEventOnDestroyCallback?(destroyEventOnDestroyCallback(),destroyEventOnDestroyCallback=null):e.destroy()})),TcHmi.Callback.callSafeEx(callback,EventProvider,{error:TcHmi.Errors.NONE,type:EventProvider.EventRegWatchType.REGISTER,event:event})},eventMap=EventProvider.__events.get(name);eventMap&&eventMap.forEach(register);let destroyEventOnRegisterCallback=TcHmi.EventProvider.register("System.EventProvider.onRegisterCallback<"+name+">",(function(_e,event){register(event)}));return function(){destroyEventOnRegisterCallback&&(destroyEventOnRegisterCallback(),destroyEventOnRegisterCallback=null),destroyEventOnDestroyCallback&&(destroyEventOnDestroyCallback(),destroyEventOnDestroyCallback=null)}}static has(name){return TcHmi.EventProvider.__events.has(name)}static count(name){const events=TcHmi.EventProvider.__events.get(name);return events?.size??0}static registerDomEvent(element,type,listener,options){options=options?{passive:!0,...options}:{passive:!0};const elements=window.Symbol.iterator in element?element:[element];for(const element of elements)element.addEventListener(type,listener,options);return()=>{for(const element of elements)element.removeEventListener(type,listener,options)}}}Object.defineProperty(EventProvider,"__events",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(EventProvider,"__internalEventId",{enumerable:!0,configurable:!0,writable:!0,value:0}),TcHmi.EventProvider=EventProvider,function(EventProvider){let EventRegWatchType;!function(EventRegWatchType){EventRegWatchType[EventRegWatchType.REGISTER=100]="REGISTER",EventRegWatchType[EventRegWatchType.DESTROY=200]="DESTROY"}(EventRegWatchType=EventProvider.EventRegWatchType||(EventProvider.EventRegWatchType={}))}(EventProvider=TcHmi.EventProvider||(TcHmi.EventProvider={}))}(TcHmi||(TcHmi={})),function(TcHmi){class Exception extends Error{constructor(detailsOrCode,reason,domain,exceptionOrErrors,errors){const message=("object"==typeof detailsOrCode?TcHmi.Errors[detailsOrCode.code]??detailsOrCode.message:TcHmi.Errors[detailsOrCode])??TcHmi.Errors[TcHmi.Errors.ERROR];super("object"==typeof detailsOrCode?detailsOrCode.reason??message:reason??message),Object.defineProperty(this,"__details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),super.message=message,Object.defineProperty(this,"message",{writable:!1}),this.__details="object"==typeof detailsOrCode?{...detailsOrCode,message:message}:{code:detailsOrCode,message:message,reason:reason,domain:domain,exception:exceptionOrErrors instanceof Error?exceptionOrErrors:void 0,errors:exceptionOrErrors instanceof Error?errors:exceptionOrErrors}}get code(){return this.__details.code}get message(){return this.__details.message}get reason(){return this.__details.reason}get domain(){return this.__details.domain}get exception(){return this.__details.exception}get errors(){return this.__details.errors}get details(){return this.__details}pushSubErrors(...errors){return this.__details.errors||(this.__details.errors=[]),this.__details.errors.push(...errors)}buildMessage(){return TcHmi.Log.buildMessage(this.__details)}log(callerInfo,message){TCHMI_CONSOLE_LOG_LEVEL<1&&!TcHmi.Log.Force||("Control"===callerInfo.Source&&callerInfo.Module===callerInfo.Origin&&delete(callerInfo={...callerInfo}).Origin,TcHmi.Log.errorEx(`[${Array.from(Object.entries(callerInfo)).map((([name,info])=>`${name}=${info}`)).join(", ")}] ${message?message+" ":""}${this.buildMessage()}`))}}TcHmi.Exception=Exception}(TcHmi||(TcHmi={})),function(TcHmi){class FileUploader{constructor(domain){Object.defineProperty(this,"__queueTimeoutId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"__domain",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.__domain=domain,FileUploader.__subscribedToChunkSize||FileUploader.__subscribeChunkSize()}queue(path,file,progressCallback){return new Promise(((resolve,reject)=>{const queued={file:file,path:path,domain:this.__domain,offset:0,status:FileUploader.FileStatus.Pending,progressCallback:progress=>{progressCallback?.(progress),progress.error!==TcHmi.Errors.NONE?reject(new TcHmi.Exception(progress.details)):progress.status!==FileUploader.FileStatus.Finished&&progress.status!==FileUploader.FileStatus.Canceled||resolve(progress)}};this.cancel(path),FileUploader.__queue.push(queued),clearTimeout(this.__queueTimeoutId),FileUploader.__working||(this.__queueTimeoutId=setTimeout((()=>FileUploader.__workQueue()),50))}))}async cancel(path){const index=FileUploader.__queue.findIndex((queuedFile=>queuedFile.path===path));if(-1===index){let found=!1;if(FileUploader.__current?.path===path&&(FileUploader.__current.status=FileUploader.FileStatus.Canceled,found=!0),FileUploader.__preparedChunks){const chunks=await FileUploader.__preparedChunks,chunk=chunks?.get(path);chunk&&(chunk.data="",chunk.type=FileUploader.ChunkType.Last,found=!0)}return found}return FileUploader.__queue[index].progressCallback({error:TcHmi.Errors.NONE,uploadedBytes:0,totalBytes:FileUploader.__queue[index].file.size,status:FileUploader.FileStatus.Canceled}),FileUploader.__queue.splice(index,1),!0}static async __workQueue(){const chunks=await(this.__preparedChunks??this.__createChunks());chunks?(this.__upload(chunks),this.__preparedChunks=this.__createChunks()):this.__preparedChunks=null}static async __createChunks(){if(this.__chunkSizeSubscriptionError){for(const file of this.__queue)file.progressCallback(this.__chunkSizeSubscriptionError);return this.__queue=[],this.__working=!1,null}if(null===this.__chunkSize)return this.__working=!0,null;if(0===this.__chunkSize){for(const file of this.__queue)file.progressCallback({error:TcHmi.Errors.E_INVALID,details:{code:TcHmi.Errors.E_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_INVALID],reason:"The chunk size that is set in the server config must be greater than 0.",domain:"TcHmi.FileUploader"}});return this.__queue=[],this.__working=!1,null}if(!this.__current&&0===this.__queue.length)return this.__working=!1,null;this.__working=!0;let available=this.__chunkSize;const chunks=new Map,fileReadPromises=[];for(;available>0&&(this.__current||0!==this.__queue.length);){if(this.__current?.status===FileUploader.FileStatus.Canceled){const current=this.__current;this.__preparedChunks?.then((chunks=>{chunks?.has(current.path)||current.progressCallback({error:TcHmi.Errors.NONE,uploadedBytes:current.offset,totalBytes:current.file.size,status:current.status})})),this.__current=null}if(this.__current||0===this.__queue.length||(this.__current=this.__queue.shift(),this.__current.status=FileUploader.FileStatus.Uploading,this.__current.progressCallback({error:TcHmi.Errors.NONE,uploadedBytes:0,totalBytes:this.__current.file.size,status:this.__current.status})),!this.__current)break;if(chunks.has(this.__current.path))break;const current=this.__current,remainingFileSize=current.file.size-current.offset,firstChunk=0===current.offset,lastChunk=remainingFileSize<=this.__chunkSize,chunk={file:current,data:"",type:firstChunk&&lastChunk?FileUploader.ChunkType.Disabled:firstChunk?FileUploader.ChunkType.First:lastChunk?FileUploader.ChunkType.Last:FileUploader.ChunkType.Intermediate};chunks.set(current.path,chunk),fileReadPromises.push(this.__readFileData(current.file,current.offset,this.__chunkSize).then((data=>{chunk.data=data})).catch((reason=>{const error={error:TcHmi.Errors.ERROR,details:{code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:reason instanceof Error?reason.message:"An error occured while reading the file.",domain:"TcHmi.FileUploader",exception:reason instanceof Error?reason:void 0}};chunks.delete(current.path),current.progressCallback(error),this.__current===current&&(this.__current=null)})));const readBytes=Math.min(remainingFileSize,this.__chunkSize);current.offset+=readBytes,available-=readBytes,lastChunk&&(this.__current=null)}return await Promise.all(fileReadPromises),0===chunks.size?this.__createChunks():chunks}static __readFileData(file,offset,limit){return new Promise(((resolve,reject)=>{const reader=new FileReader;if(reader.addEventListener("load",(_event=>{"string"==typeof reader.result?resolve(reader.result.replace(/data:(?:.*,|$)/,"")):reject(new Error(reader.result?"Expected string, got ArrayBuffer.":"Could not read file."))})),reader.addEventListener("abort",(_event=>{reject(new Error("The reading operation was aborted."))})),reader.addEventListener("error",(_event=>{reject(reader.error??new Error("An unspecified error occured while reading the file."))})),void 0!==offset){const end=void 0!==limit?Math.min(offset+limit,file.size):file.size;reader.readAsDataURL(file.slice(offset,end))}else reader.readAsDataURL(file)}))}static __upload(chunks){const request={requestType:"ReadWrite",commands:Array.from(chunks.values()).map((chunk=>({symbol:(chunk.file.domain?chunk.file.domain+".":"")+"Upload",commandOptions:["SendErrorMessage"],writeValue:{fileName:chunk.file.path,data:chunk.data,chunkType:chunk.type},customerData:chunk.file.path})))};TcHmi.Server.requestEx(request,null,(data=>{if(data.error!==TcHmi.Errors.NONE){for(const chunk of chunks.values())chunk.file.progressCallback({error:TcHmi.Errors.ERROR,details:{code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:`Error while uploading '${chunk.file.path}' to symbol ${chunk.file.domain?chunk.file.domain+".Upload":"Upload"}.`,domain:"TcHmi.FileUploader",errors:data.details?[data.details]:void 0}}),this.__current===chunk.file&&(this.__current=null);return void this.__workQueue()}if(!data.response){for(const chunk of chunks.values())chunk.file.progressCallback({error:TcHmi.Errors.E_SERVER_RESPONSE_MISSING,details:{code:TcHmi.Errors.E_SERVER_RESPONSE_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_RESPONSE_MISSING],reason:`Missing response from server while uploading '${chunk.file.path}' to symbol ${chunk.file.domain?chunk.file.domain+".Upload":"Upload"}.`,domain:"TcHmi.FileUploader"}}),this.__current===chunk.file&&(this.__current=null);return void this.__workQueue()}if(data.response.error){for(const chunk of chunks.values())chunk.file.progressCallback({error:TcHmi.Errors.E_SERVER_RESPONSE_ERROR,details:{code:TcHmi.Errors.E_SERVER_RESPONSE_ERROR,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_RESPONSE_ERROR],reason:`Error in response from server while uploading '${chunk.file.path}' to symbol ${chunk.file.domain?chunk.file.domain+".Upload":"Upload"}.`,domain:"TcHmi.FileUploader",errors:[data.response.error]}}),this.__current===chunk.file&&(this.__current=null),this.__preparedChunks&&FileUploader.__preparedChunks?.then((chunks=>{chunks?.has(chunk.file.path)&&chunks.delete(chunk.file.path)}));return void this.__workQueue()}const otherErrors={error:TcHmi.Errors.ERROR,details:{code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"One or more errors occured that cannot be attributed to a specific file.",domain:"TcHmi.FileUploader",errors:[]}};if(data.response.commands&&data.response.commands.length===chunks.size||otherErrors.details.errors.push({code:TcHmi.Errors.E_SERVER_COMMANDS_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_COMMANDS_MISSING],reason:`Missing commands in response from server with id: '${data.response.id}'.`,domain:"TcHmi.FileUploader"}),data.response.commands)for(const command of data.response.commands){if(!command.customerData){const details={code:TcHmi.Errors.E_SERVER_RESPONSE_ERROR,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_RESPONSE_ERROR],reason:`Missing customerData in response from server with id: '${data.response.id}'.`,domain:"TcHmi.FileUploader",errors:command.error?[command.error]:void 0};otherErrors.details.errors.push(details);continue}const chunk=chunks.get(command.customerData);chunk&&(command.error?(chunk.file.progressCallback({error:TcHmi.Errors.E_SERVER_COMMAND_ERROR,details:{code:TcHmi.Errors.E_SERVER_COMMAND_ERROR,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_COMMAND_ERROR],reason:`Error in command from server while uploading '${chunk.file.path}' to symbol ${command.symbol}.`,domain:"TcHmi.FileUploader",errors:[command.error]}}),this.__current===chunk.file&&(this.__current=null,this.__preparedChunks&&FileUploader.__preparedChunks?.then((chunks=>{chunks?.has(chunk.file.path)&&chunks.delete(chunk.file.path)})))):chunk.file.progressCallback({error:TcHmi.Errors.NONE,uploadedBytes:chunk.file.offset,totalBytes:chunk.file.file.size,status:""===chunk.data?FileUploader.FileStatus.Canceled:chunk.type===FileUploader.ChunkType.Last||chunk.type===FileUploader.ChunkType.Disabled?FileUploader.FileStatus.Finished:FileUploader.FileStatus.Uploading}),chunks.delete(command.customerData))}if(otherErrors.details.errors.length>0)for(const chunk of chunks.values())chunk.file.progressCallback(otherErrors),this.__current===chunk.file&&(this.__current=null),this.__preparedChunks&&FileUploader.__preparedChunks?.then((chunks=>{chunks?.has(chunk.file.path)&&chunks.delete(chunk.file.path)}));this.__workQueue()}))}static __subscribeChunkSize(){this.__subscribedToChunkSize=!0,TcHmi.Server.subscribeEx([{symbol:"TcHmiSrv.Config::CHUNKSIZE",commandOptions:["SendWriteValue","SendErrorMessage"]}],TcHmi.Config.get().tcHmiServer.websocketIntervalTime,null,(data=>{if(data.error!==TcHmi.Errors.NONE)return this.__chunkSizeSubscriptionError={error:TcHmi.Errors.ERROR,details:{code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Error in response from server while subscribing to symbol TcHmiSrv.Config::CHUNKSIZE",domain:"TcHmi.FileUploader",errors:data.details?[data.details]:void 0}},TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.FileUploader, Symbol=TcHmiSrv.Config::CHUNKSIZE] "+TcHmi.Log.buildMessage(this.__chunkSizeSubscriptionError.details)),void this.__workQueue();if(!data.response)return this.__chunkSizeSubscriptionError={error:TcHmi.Errors.E_SERVER_RESPONSE_MISSING,details:{code:TcHmi.Errors.E_SERVER_RESPONSE_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_RESPONSE_MISSING],reason:"Missing response from server while subscribing to symbol TcHmiSrv.Config::CHUNKSIZE.",domain:"TcHmi.FileUploader"}},TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.FileUploader, Symbol=TcHmiSrv.Config::CHUNKSIZE] "+TcHmi.Log.buildMessage(this.__chunkSizeSubscriptionError.details)),void this.__workQueue();if(data.response.error)return this.__chunkSizeSubscriptionError={error:TcHmi.Errors.E_SERVER_RESPONSE_ERROR,details:{code:TcHmi.Errors.E_SERVER_RESPONSE_ERROR,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_RESPONSE_ERROR],reason:"Error in response from server while subscribing to symbol TcHmiSrv.Config::CHUNKSIZE.",domain:"TcHmi.FileUploader",errors:[data.response.error]}},TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.FileUploader, Symbol=TcHmiSrv.Config::CHUNKSIZE] "+TcHmi.Log.buildMessage(this.__chunkSizeSubscriptionError.details)),void this.__workQueue();if(!data.response.commands||!data.response.commands[0])return this.__chunkSizeSubscriptionError={error:TcHmi.Errors.E_SERVER_COMMANDS_MISSING,details:{code:TcHmi.Errors.E_SERVER_COMMANDS_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_COMMANDS_MISSING],reason:`Missing commands in response from server with id: '${data.response.id}' while subscribing to symbol TcHmiSrv.Config::CHUNKSIZE.`,domain:"TcHmi.FileUploader"}},TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.FileUploader, Symbol=TcHmiSrv.Config::CHUNKSIZE] "+TcHmi.Log.buildMessage(this.__chunkSizeSubscriptionError.details)),void this.__workQueue();if(data.response.commands[0].error)return this.__chunkSizeSubscriptionError={error:TcHmi.Errors.E_SERVER_COMMAND_ERROR,details:{code:TcHmi.Errors.E_SERVER_COMMAND_ERROR,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_COMMAND_ERROR],reason:`Error in command from server with id: '${data.response.id}' while subscribing to symbol TcHmiSrv.Config::CHUNKSIZE.`,domain:"TcHmi.FileUploader",errors:[data.response.commands[0].error]}},TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.FileUploader, Symbol=TcHmiSrv.Config::CHUNKSIZE] "+TcHmi.Log.buildMessage(this.__chunkSizeSubscriptionError.details)),void this.__workQueue();const readValue=data.response.commands[0].readValue;void 0===readValue?(this.__chunkSizeSubscriptionError={error:TcHmi.Errors.E_SERVER_READVALUE_MISSING,details:{code:TcHmi.Errors.E_SERVER_READVALUE_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_READVALUE_MISSING],reason:`Missing readValue in response from server with id: '${data.response.id}' while subscribing to symbol TcHmiSrv.Config::CHUNKSIZE.`,domain:"TcHmi.FileUploader"}},TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.FileUploader, Symbol=TcHmiSrv.Config::CHUNKSIZE] "+TcHmi.Log.buildMessage(this.__chunkSizeSubscriptionError.details))):this.__chunkSize=readValue,this.__workQueue()}))}}Object.defineProperty(FileUploader,"__queue",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(FileUploader,"__current",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(FileUploader,"__working",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(FileUploader,"__preparedChunks",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(FileUploader,"__chunkSize",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(FileUploader,"__subscribedToChunkSize",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(FileUploader,"__chunkSizeSubscriptionError",{enumerable:!0,configurable:!0,writable:!0,value:null}),TcHmi.FileUploader=FileUploader,function(FileUploader){let FileStatus,ChunkType;!function(FileStatus){FileStatus[FileStatus.Pending=0]="Pending",FileStatus[FileStatus.Uploading=1]="Uploading",FileStatus[FileStatus.Finished=2]="Finished",FileStatus[FileStatus.Canceled=3]="Canceled"}(FileStatus=FileUploader.FileStatus||(FileUploader.FileStatus={})),function(ChunkType){ChunkType[ChunkType.Disabled=0]="Disabled",ChunkType[ChunkType.First=1]="First",ChunkType[ChunkType.Intermediate=2]="Intermediate",ChunkType[ChunkType.Last=3]="Last"}(ChunkType=FileUploader.ChunkType||(FileUploader.ChunkType={}))}(FileUploader=TcHmi.FileUploader||(TcHmi.FileUploader={}))}(TcHmi||(TcHmi={})),function(TcHmi){class FilterInstance{constructor(dataSchemaOrPath,schemaOrComparator,value,schema){if(Object.defineProperty(this,"__filter",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__schema",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"__parsedFilter",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"__wrapInBrackets",{enumerable:!0,configurable:!0,writable:!0,value:!1}),"string"==typeof dataSchemaOrPath&&"string"==typeof schemaOrComparator&&void 0!==value)value instanceof Date&&(value=new Date(value.getTime())),this.__filter=[{path:dataSchemaOrPath,comparator:schemaOrComparator,value:value}],schema&&(this.__schema=schema);else if("object"==typeof schemaOrComparator&&(this.__schema=schemaOrComparator),dataSchemaOrPath instanceof FilterInstance)this.__filter=tchmi_clone_object(dataSchemaOrPath.getFilter()),this.__schema||(this.__schema=dataSchemaOrPath.getSchema());else{if(Array.isArray(dataSchemaOrPath))return void(this.__filter=tchmi_clone_object(dataSchemaOrPath,{cloneDates:!0}));"object"==typeof dataSchemaOrPath?TcHmi.isComparison(dataSchemaOrPath)?this.__filter=[tchmi_clone_object(dataSchemaOrPath,{cloneDates:!0})]:(this.__filter=[],this.__schema=dataSchemaOrPath):this.__filter=[]}}getFilter(){return this.__filter}getSchema(){return this.__schema}and(dataOrPath,comparator,value){if(dataOrPath instanceof FilterInstance&&(dataOrPath=dataOrPath.getFilter()),Array.isArray(dataOrPath)&&0===dataOrPath.length)return this;if("string"==typeof dataOrPath){if(void 0===comparator||void 0===value)return this;dataOrPath={path:dataOrPath,comparator:comparator,value:value}}return this.__append("AND",dataOrPath),this}or(dataOrPath,comparator,value){if(dataOrPath instanceof FilterInstance&&(dataOrPath=dataOrPath.getFilter()),Array.isArray(dataOrPath)&&0===dataOrPath.length)return this.__parsedFilter=null,this.__filter=[],this.__wrapInBrackets=!1,this;if("string"==typeof dataOrPath){if(void 0===comparator||void 0===value)return this;dataOrPath={path:dataOrPath,comparator:comparator,value:value}}return this.__append("OR",dataOrPath),this}__append(logic,filter){this.__parsedFilter=null,this.__filter.length>0&&(this.__wrapInBrackets&&(this.__filter=[this.__filter]),this.__filter.push({logic:logic})),this.__filter.length>0||!Array.isArray(filter)?this.__filter.push(tchmi_clone_object(filter,{cloneDates:!0})):this.__filter=tchmi_clone_object(filter),this.__wrapInBrackets=!1}wrapInBrackets(){return this.__filter.length>=3&&(this.__wrapInBrackets=!0),this}compile(){try{this.__parsedFilter=TcHmi.System.Filter.parse(this.__filter,this.__schema)}catch(ex){return{error:TcHmi.Errors.E_INVALID,details:{code:TcHmi.Errors.E_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_INVALID],domain:"Tchmi.Filter",reason:"The provided filter or schema is invalid",exception:ex}}}return{error:TcHmi.Errors.NONE}}test(candidate,key=""){return this.__parsedFilter||(this.__parsedFilter=TcHmi.System.Filter.parse(this.__filter,this.__schema)),this.__parsedFilter.test(candidate,key)}filter(collection){if(this.__parsedFilter||(this.__parsedFilter=TcHmi.System.Filter.parse(this.__filter,this.__schema)),Array.isArray(collection)){const parsedFilter=this.__parsedFilter;return collection.filter(((item,index)=>parsedFilter.test(item,index)))}if(collection instanceof Map){const result=new Map;for(const[key,item]of collection)this.__parsedFilter.test(item,key)&&result.set(key,item);return result}if(collection instanceof Set){const result=new Set;for(const item of collection)this.__parsedFilter.test(item)&&result.add(item);return result}const result={};for(const[key,item]of Object.entries(collection))this.__parsedFilter.test(item,key)&&(result[key]=item);return result}}TcHmi.FilterInstance=FilterInstance}(TcHmi||(TcHmi={})),function(TcHmi){TcHmi.Function=
/**
     * Used to execute functions based on a static JSON description.
     * @template R Type of the result of the function
     * @preserve (Part of the public API)
     */
class{constructor(functionCallDescription){Object.defineProperty(this,"__module",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__f",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__fn",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__fnDescr",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__processedWaitMode",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__lastExecuteId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"__pendingExecutes",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"__isDestroying",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"__isDestroyed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),this.__f=functionCallDescription;let module=TcHmi.System.Data.Modules.functions.map.get(functionCallDescription.fn);module&&(this.__module=module,this.__module.error===TcHmi.Errors.NONE&&(this.__fn=this.__module.reg?.func,this.__fnDescr=this.__module.description))}__execute(ctx,requiredArgs){if(!TcHmi.System.Services.typeManager)return ctx.error(TcHmi.Errors.E_SYSTEM_NOT_READY,{code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],reason:"Failed to execute. System not ready.",domain:"TcHmi.Function"}),()=>{};if(this.__isDestroyed)return ctx.error(TcHmi.Errors.E_FUNCTION_DESTROYED,{code:TcHmi.Errors.E_FUNCTION_DESTROYED,message:TcHmi.Errors[TcHmi.Errors.E_FUNCTION_DESTROYED],reason:"Function was already destroyed",domain:"TcHmi.Function"}),()=>{};if(!this.__f)return ctx.error(TcHmi.Errors.E_FUNCTION_MISSING_FUNCTION_REFERENCE,{code:TcHmi.Errors.E_FUNCTION_MISSING_FUNCTION_REFERENCE,message:TcHmi.Errors[TcHmi.Errors.E_FUNCTION_MISSING_FUNCTION_REFERENCE],reason:"Function reference missing.",domain:"TcHmi.Function"}),()=>{};if(!this.__module)return ctx.error(TcHmi.Errors.E_MODULE_MISSING,{code:TcHmi.Errors.E_MODULE_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_MODULE_MISSING],reason:this.__f.fn,domain:"TcHmi.Function"}),()=>{};if(this.__module.error!==TcHmi.Errors.NONE)return ctx.error(TcHmi.Errors.E_MODULE_ERROR,{code:TcHmi.Errors.E_MODULE_ERROR,message:TcHmi.Errors[TcHmi.Errors.E_MODULE_ERROR],reason:this.__f.fn,domain:"TcHmi.Function",errors:this.__module.errorDetails?[this.__module.errorDetails]:void 0}),()=>{};if(!this.__fn)return ctx.error(TcHmi.Errors.E_FUNCTION_MISSING_FUNCTION_REFERENCE,{code:TcHmi.Errors.E_FUNCTION_MISSING_FUNCTION_REFERENCE,message:TcHmi.Errors[TcHmi.Errors.E_FUNCTION_MISSING_FUNCTION_REFERENCE],reason:this.__f.fn,domain:"TcHmi.Function",errors:this.__module.errorDetails?[this.__module.errorDetails]:void 0}),()=>{};if(!this.__fnDescr)return ctx.error(TcHmi.Errors.E_FUNCTION_MISSING_FUNCTION_DESCRIPTION,{code:TcHmi.Errors.E_FUNCTION_MISSING_FUNCTION_DESCRIPTION,message:TcHmi.Errors[TcHmi.Errors.E_FUNCTION_MISSING_FUNCTION_DESCRIPTION],reason:this.__f.fn,domain:"TcHmi.Function",errors:this.__module.errorDetails?[this.__module.errorDetails]:void 0}),()=>{};let results=[],fnParams=this.__f.fnParams;Array.isArray(fnParams)||(fnParams=[]);let fnDescr=this.__fnDescr,fnArgDescriptions=fnDescr.function.arguments,done=!1,argoffset=0;!0===fnDescr.function.injectContextObject&&argoffset++,this.__lastExecuteId++;let executeId=this.__lastExecuteId,finish=(error,details)=>{if(!done){if(done=!0,!this.__isDestroying&&this.__pendingExecutes.has(executeId)&&this.__pendingExecutes.delete(executeId),error!==TcHmi.Errors.NONE)return ctx.error(error,details),void destroy();{let res;!0===fnDescr.function.injectContextObject&&(fnDescr.function&&fnDescr.function.waitMode&&"Asynchronous"===fnDescr.function.waitMode?results.unshift(ctx):results.unshift(ctx&&ctx.args?{args:ctx.args}:{}));try{res=this.__fn.call(this,...results)}catch(e){return ctx.error(TcHmi.Errors.E_FUNCTION_EXCEPTION,{code:TcHmi.Errors.E_FUNCTION_EXCEPTION,message:TcHmi.Errors[TcHmi.Errors.E_FUNCTION_EXCEPTION],reason:fnDescr.function.name+', Exception: "'+e+'"',domain:"TcHmi.Function"}),void destroy()}if(fnDescr.function&&(!fnDescr.function.waitMode||fnDescr.function.waitMode&&"Synchronous"===fnDescr.function.waitMode))return ctx.success(res),void destroy()}}};if(fnDescr.function&&fnDescr.function.waitMode&&"Asynchronous"===fnDescr.function.waitMode&&!1===fnDescr.function.injectContextObject)return finish(TcHmi.Errors.E_FUNCTION_INVALID_CONFIGURATION,{code:TcHmi.Errors.E_FUNCTION_INVALID_CONFIGURATION,message:TcHmi.Errors[TcHmi.Errors.E_FUNCTION_INVALID_CONFIGURATION],reason:fnDescr.function.name+', Setting waitMode "Asynchronous" and injectContextObject "'+fnDescr.function.injectContextObject+'" is an invalid function configuration. Please enable context object injection and provide a context object parameter in the function to be able to use waitMode "Asynchronous".',domain:"TcHmi.Function"}),()=>{};let pending=requiredArgs.length+fnParams.length,underlyingSymbols=[],underlyingDestroyFunctions=[],isDestroyed=!1,destroy=()=>{if(!isDestroyed){for(let i=0,ii=underlyingDestroyFunctions.length;i<ii;i++){let destroy=underlyingDestroyFunctions[i];destroy&&destroy()}underlyingDestroyFunctions=[];for(let i=0,ii=underlyingSymbols.length;i<ii;i++){let symbol=underlyingSymbols[i];symbol&&symbol.destroy()}underlyingSymbols=[],done||finish(TcHmi.Errors.E_FUNCTION_CALL_ABORTED,{code:TcHmi.Errors.E_FUNCTION_CALL_ABORTED,message:TcHmi.Errors[TcHmi.Errors.E_FUNCTION_CALL_ABORTED],reason:fnDescr.function.name+", Function call was aborted.",domain:"TcHmi.Function"}),isDestroyed=!0}};this.__pendingExecutes.set(executeId,destroy);let addArgumentResult=(i,descr,value)=>{if(descr){let typeSchema=TcHmi.System.Services.typeManager?.getSchema(descr.type);typeSchema&&"TcHmi.Symbol"===typeSchema.frameworkInstanceOf?value instanceof TcHmi.Symbol?results[i]=value:results[i]=null:results[i]=TcHmi.ValueConverter.toSchemaType(value,typeSchema)}else results[i]=value;pending--,0===pending&&finish(TcHmi.Errors.NONE)},resolveSymbolValue=(i,descr,s)=>{let destroy=s.readEx((function(data){data.error===TcHmi.Errors.NONE?addArgumentResult(i,descr,data.value):finish(TcHmi.Errors.E_FUNCTION_RESOLVING_PARAMETER_FAILED,{code:TcHmi.Errors.E_FUNCTION_RESOLVING_PARAMETER_FAILED,message:TcHmi.Errors[TcHmi.Errors.E_FUNCTION_RESOLVING_PARAMETER_FAILED],reason:fnDescr.function.name+', Resolving symbol: "'+s.getExpression()+'" for parameter: '+i+" failed.",domain:"TcHmi.Function",errors:data.details?[data.details]:void 0})}));underlyingDestroyFunctions.push(destroy)},resolveFunctionExpressionValue=(i,descr,functionExpression)=>{let func;try{func=new TcHmi.System.FunctionExpression(functionExpression),func.execute({success:function(result){addArgumentResult(i,descr,result),func?.destroy()},error:function(_error,details){finish(TcHmi.Errors.E_FUNCTION_RESOLVING_PARAMETER_FAILED,{code:TcHmi.Errors.E_FUNCTION_RESOLVING_PARAMETER_FAILED,message:TcHmi.Errors[TcHmi.Errors.E_FUNCTION_RESOLVING_PARAMETER_FAILED],reason:fnDescr.function.name+', Resolving function expression: "'+functionExpression+'" for parameter: '+i+" failed.",domain:"TcHmi.Function",errors:details?[details]:void 0}),func?.destroy()},args:ctx.args})}catch(e){finish(TcHmi.Errors.E_FUNCTION_RESOLVING_PARAMETER_FAILED,{code:TcHmi.Errors.E_FUNCTION_RESOLVING_PARAMETER_FAILED,message:TcHmi.Errors[TcHmi.Errors.E_FUNCTION_RESOLVING_PARAMETER_FAILED],reason:fnDescr.function.name+', Resolving function expression: "'+functionExpression+'" for parameter: '+i+"  failed with exception.",domain:"TcHmi.Function",errors:[{code:TcHmi.Errors.E_FUNCTION_EXPRESSION_EXCEPTION,message:TcHmi.Errors[TcHmi.Errors.E_FUNCTION_EXPRESSION_EXCEPTION],exception:e,reason:"An uncaught exception occurred while parsing a function parameter",domain:"TcHmi.System.FunctionExpression"}]}),func?.destroy()}};if(done)return destroy;if(0===pending)return finish(TcHmi.Errors.NONE),destroy;for(let i=0,ii=requiredArgs.length;i<ii;i++){let descr,arg=requiredArgs[i];i<fnArgDescriptions.length-argoffset?descr=fnArgDescriptions[i+argoffset]:(descr=fnArgDescriptions[fnArgDescriptions.length-1],descr&&!descr.restParameter&&(descr=null)),addArgumentResult(i,descr,arg)}for(let i=0,ii=fnParams.length;i<ii;i++){if(done)return destroy;let descr,fnParam=fnParams[i];if(i<fnArgDescriptions.length-requiredArgs.length-argoffset?descr=fnArgDescriptions[i+requiredArgs.length+argoffset]:(descr=fnArgDescriptions[fnArgDescriptions.length-1],descr&&!descr.restParameter&&(descr=null)),!descr)return finish(TcHmi.Errors.E_FUNCTION_INVALID_CONFIGURATION,{code:TcHmi.Errors.E_FUNCTION_INVALID_CONFIGURATION,message:TcHmi.Errors[TcHmi.Errors.E_FUNCTION_INVALID_CONFIGURATION],reason:fnDescr.function.name+', Unable to find description for additional parameter "'+i+'" in fnParams.',domain:"TcHmi.Function"}),destroy;if(TcHmi.IFunction.isStaticValue(fnParam))addArgumentResult(i+requiredArgs.length,descr,fnParam.value);else if(TcHmi.IFunction.isSymbol(fnParam)){let s=new TcHmi.Symbol(fnParam.symbolExpression),typeSchema=TcHmi.System.Services.typeManager.getSchema(descr.type);typeSchema&&"TcHmi.Symbol"===typeSchema.frameworkInstanceOf?addArgumentResult(i+requiredArgs.length,descr,s):resolveSymbolValue(i+requiredArgs.length,descr,s),underlyingSymbols.push(s)}else TcHmi.IFunction.isFunctionExpression(fnParam)?resolveFunctionExpressionValue(i+requiredArgs.length,descr,fnParam.functionExpression):finish(TcHmi.Errors.E_PARAMETER_INVALID,{code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],reason:fnDescr.function.name,domain:"TcHmi.Function"})}return destroy}
/**
         * Will raise the function defined in constructor argument f: IFunction.
         * @param requiredArgs Optional required arguments. Will be injected before arguments defined in IFunction and after context object dummy if context object is required.
         * @preserve (Part of the public API)
         */execute(requiredArgs=[]){let res=null,bContextLock=!1,destroy=this.__execute({success:function(result){bContextLock||(bContextLock=!0,res=result)},error:function(_error){bContextLock||(bContextLock=!0,res=null)}},requiredArgs);return destroy&&destroy(),res}
/**
         * Will raise the function defined in constructor argument f: IFunction and raises a callback afterwards.
         * @param requiredArgs Optional required arguments. Will be injected before arguments defined in IFunction and after context object dummy if context object is required.
         * @param callback Callback which will be called with the result
         * @preserve (Part of the public API)
         */executeEx(requiredArgs=[],callback){let __this=this;requiredArgs||(requiredArgs=[]);let bContextLock=!1;return this.__execute({success:function(result){bContextLock||(bContextLock=!0,TcHmi.Callback.callSafeEx(callback,__this,{error:TcHmi.Errors.NONE,result:result}))},error:function(error,details){bContextLock||(bContextLock=!0,TcHmi.Callback.callSafeEx(callback,__this,{error:error,details:details}))}},requiredArgs)}
/**
         * Will raise the function defined in constructor argument f: IFunction and forward the context object defined in ctx: TcHmi.Context if the function supports this.
         * @param ctx Context object.
         * @param requiredArgs Optional required arguments. Will be injected before arguments defined in IFunction and after context object dummy if context object is required.
         * @preserve (Part of the public API)
         */executeEx2(ctx,requiredArgs=[]){if(!ctx)throw new TypeError("Parameter 'ctx' must be defined.");if(!ctx.success||!ctx.error)throw new TypeError("Parameter 'ctx' must be defined properly. Either 'success' or 'error' or both are missing.");if("function"!=typeof ctx.success||"function"!=typeof ctx.error)throw new TypeError("Parameter 'ctx' must be defined properly. Either 'success' or 'error' or both are not of type 'function'.");return requiredArgs||(requiredArgs=[]),this.__execute(ctx,requiredArgs)}__resolveProcessedWaitMode(){let res="Synchronous";if(this.__processedWaitMode)return res=this.__processedWaitMode,res;if(this.__isDestroyed)throw new Error("Object was already destroyed.");if(!this.__f)throw new Error("Function call description is missing.");if(!this.__fnDescr)throw new Error("Function description is missing.");if("Synchronous"===res&&(this.__fnDescr.function&&this.__fnDescr.function.waitMode&&(res=this.__fnDescr.function.waitMode),this.__f&&this.__f.fnParams))for(let i=0,ii=this.__f.fnParams.length;i<ii;i++){let fnParam=this.__f.fnParams[i];if(fnParam)if(TcHmi.IFunction.isSymbol(fnParam)){let expr=new TcHmi.SymbolExpression(fnParam.symbolExpression),type=expr.getType();if(type===TcHmi.SymbolType.Server){res="Asynchronous";break}if(type===TcHmi.SymbolType.Function){const content=expr.getContent();if(!content)continue;let func=new TcHmi.System.FunctionExpression(content);if(func.isProcessedAsync()){res="Asynchronous",func.destroy();break}func.destroy()}}else if(TcHmi.IFunction.isFunctionExpression(fnParam)){let func=new TcHmi.System.FunctionExpression(fnParam.functionExpression);if(func.isProcessedAsync()){res="Asynchronous",func.destroy();break}func.destroy()}}return this.__processedWaitMode=res,res}isProcessedAsync(){return"Asynchronous"===this.__resolveProcessedWaitMode()}
/**
         * Releases all resources of the function
         * @preserve (Part of the public API)
         */destroy(){this.__isDestroying=!0,this.__pendingExecutes.forEach((destroy=>{destroy()})),this.__pendingExecutes.clear(),this.__module=void 0,this.__f=void 0,this.__fn=void 0,this.__fnDescr=void 0,this.__isDestroying=!1,this.__isDestroyed=!0}
/**
         * Get the description of the function.
         * @preserve (Part of the public API)
         */getDescription(){return this.__fnDescr}}}(TcHmi||(TcHmi={})),function(TcHmi){!function(Functions){Functions.registerFrameworkFunction=
/**
         * Deprecated! Please use registerFunctionEx.
         * @deprecated Please use registerFunctionEx.
         * @param name name of the framework function
         * @param functionImplementation Javascript function to execute
         * @param _descriptionUrl Url for the function description
         * @preserve (Part of the public API)
         */
function(name,functionImplementation,_descriptionUrl){TcHmi.Functions.registerFunction(name,functionImplementation)},Functions.registerFunction=
/**
         * Registers a function created within a TwinCAT HMI project in the framework.
         * @param name Name of the function
         * @param functionImplementation Javascript function to execute
         * @preserve (Part of the public API)
         */
function(name,functionImplementation){let registration={error:TcHmi.Errors.NONE,name:name,func:functionImplementation};TcHmi.System.Data.Registrations.functions.map.has(name)?TcHmi.System.Data.Registrations.functions.map.set(name,{error:TcHmi.Errors.E_NOT_UNIQUE,errorDetails:{code:TcHmi.Errors.E_NOT_UNIQUE,message:TcHmi.Errors[TcHmi.Errors.E_NOT_UNIQUE],domain:"TcHmi.Functions.registerFunction",reason:'Ambiguous registration for the name: "'+name+'". Function will not be addressable by this name. Please try fully qualified name to access function.'}}):(TcHmi.System.Data.Registrations.functions.map.set(name,registration),TcHmi.System.Data.Registrations.functions.array.push(registration)),TcHmi.EventProvider.raise("System.onFunctionRegistered",registration)},Functions.registerFunctionEx=
/**
         * Registers a function created within a TwinCAT HMI project in the framework.
         * @param name Name of the function
         * @param namespace namespace of the function
         * @param functionImplementation Javascript function to execute
         * @param options options
         * @param options.injectInGlobalObject Inject the function implementation at namespace.name in global object
         * @preserve (Part of the public API)
         */
function(name,namespace,functionImplementation,options){let qname=TcHmi.System.resolveQualifiedName(name,namespace),registration={error:TcHmi.Errors.NONE,name:name,namespace:namespace,func:functionImplementation};TcHmi.System.Data.Registrations.functions.map.has(name)?TcHmi.System.Data.Registrations.functions.map.set(name,{error:TcHmi.Errors.E_NOT_UNIQUE,errorDetails:{code:TcHmi.Errors.E_NOT_UNIQUE,message:TcHmi.Errors[TcHmi.Errors.E_NOT_UNIQUE],domain:"TcHmi.Functions.registerFunctionEx",reason:'Ambiguous registration for the name: "'+name+'". Function will not be addressable by this name. Please try fully qualified name to access function.'}}):(TcHmi.System.Data.Registrations.functions.map.set(name,registration),TcHmi.System.Data.Registrations.functions.array.push(registration)),TcHmi.System.Data.Registrations.functions.map.has(qname)?TcHmi.System.Data.Registrations.functions.map.set(qname,{error:TcHmi.Errors.E_NOT_UNIQUE,errorDetails:{code:TcHmi.Errors.E_NOT_UNIQUE,message:TcHmi.Errors[TcHmi.Errors.E_NOT_UNIQUE],domain:"TcHmi.Functions.registerFunctionEx",reason:'Ambiguous registration for the name: " '+qname+'". Function will not be addressable by this name.'}}):(TcHmi.System.Data.Registrations.functions.map.set(qname,registration),options?.injectInGlobalObject&&TcHmi.System.injectInGlobalObject(qname,functionImplementation)),TcHmi.EventProvider.raise("System.onFunctionRegistered",registration)},Functions.getFunction=
/**
         * Returns a registered HMI function
         * @param name Name of the function
         * @preserve (Part of the public API)
         */
function(name){let module=TcHmi.System.Data.Modules.functions.map.get(name);if(module&&module.error===TcHmi.Errors.NONE)return module.reg.func},Functions.getFunctionVersion=
/**
         * Gets version information of function by name.
         * @param name Name of the function
         * @preserve (Part of the public API)
         */
function(name){let module=TcHmi.System.Data.Modules.functions.map.get(name);return module&&module.error===TcHmi.Errors.NONE&&module.description&&module.description.version&&"object"==typeof module.description.version?module.description.version:null}}(TcHmi.Functions||(TcHmi.Functions={}))}(TcHmi||(TcHmi={})),function(TcHmi){TcHmi.Keyboard=
/**
     * Provides an interface for keyboard interaction.
     * @preserve (Part of the public API)
     */
class{static close(){TcHmi.System.Services.keyboardManager?.close()}static getProviderName(){return TcHmi.System.Services.keyboardManager?TcHmi.System.Services.keyboardManager.getProviderName():(TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.Keyboard] System not ready."),"")}static setProviderName(providerName){TcHmi.System.Services.keyboardManager?TcHmi.System.Services.keyboardManager.setProviderName(providerName):TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.Keyboard] System not ready.")}static getAutoOpen(){return TcHmi.System.Services.keyboardManager?TcHmi.System.Services.keyboardManager.getAutoOpen():(TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.Keyboard] System not ready."),!1)}static setAutoOpen(newState){TcHmi.System.Services.keyboardManager?TcHmi.System.Services.keyboardManager.setAutoOpen(newState):TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.Keyboard] System not ready.")}static getLayoutFileFromInputMode(requestedInputMode){return TcHmi.System.Services.keyboardManager?TcHmi.System.Services.keyboardManager.getLayoutFileFromInputMode(requestedInputMode):(TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.Keyboard] System not ready."),{error:TcHmi.Errors.E_SYSTEM_NOT_READY,details:{code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],reason:"System not ready",domain:"TcHmi.Keyboard"}})}static getProjectKeyboardMapping(){return TcHmi.System.Services.keyboardManager?tchmi_clone_object(TcHmi.System.Services.keyboardManager.getProjectKeyboardMapping()):(TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.Keyboard] System not ready."),{})}static setProjectKeyboardMapping(projectKeyboardMapping){TcHmi.System.Services.keyboardManager?TcHmi.System.Services.keyboardManager.setProjectKeyboardMapping(projectKeyboardMapping):TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.Keyboard] System not ready.")}static getContainerLayout(){return TcHmi.System.Services.keyboardManager?TcHmi.System.Services.keyboardManager.getContainerLayout():(TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.Keyboard] System not ready."),null)}static setContainerLayout(layout){TcHmi.System.Services.keyboardManager?TcHmi.System.Services.keyboardManager.setContainerLayout(layout):TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.Keyboard] System not ready.")}}}(TcHmi||(TcHmi={})),function(TcHmi){class List extends Array{constructor(){super(),this.__proto__!==TcHmi.List.prototype&&(Object.setPrototypeOf?Object.setPrototypeOf(this,List.prototype):this.__proto__=List.prototype)}first(predicate){for(let i=0,len=this.length;i<len;i++)if(predicate(this[i]))return this[i];throw new Error("Array does not contain elements")}firstOrDefault(predicate,_defaultValue=null){for(let i=0,len=this.length;i<len;i++)if(predicate(this[i]))return this[i];return null}remove(item){for(let i=0,len=this.length;i<len;i++)if(this[i]===item)return this.splice(i,1),!0;return!1}addRange(items){for(let i=0,len=items.length;i<len;i++)this.push(items[i])}clearAll(){for(;this.length>0;)this.pop()}findIndex(predicate){for(let i=0,len=this.length;i<len;i++)if(predicate(this[i],i,this))return i;return-1}}TcHmi.List=List}(TcHmi||(TcHmi={})),function(TcHmi){!function(Locale){Locale.load=
/**
         * Changes the locale of the HMI including all localization symbols.
         * Note that this does not change the Time Format Locale.
         * The locale name is given as ISO 639/BCP 47 identifier (Examples: 'en', 'en-US').
         * @param locale locale name to load. The locale name is given as ISO 639/BCP 47 identifier (Examples: 'en', 'en-US').
         * @param callback optional callback which is called after locale change
         * @preserve (Part of the public API)
         */
function(locale,callback=null){if(!TcHmi.System.Services.localizationManager)return TcHmi.Log.error("[Source=Framework, Module=TcHmi.Locale] Loading locale failed. System not ready."),void TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SYSTEM_NOT_READY,details:{code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],domain:"TcHmi.Locale"}});TcHmi.System.isParameterTypeInvalid(locale,"locale",{type:"string",required:"nullOk",minStringLength:1},"TcHmi.Locale",callback)||TcHmi.System.Services.localizationManager.loadLocale(locale,callback)},Locale.get=
/**
         * Returns the current locale string for texts or undefined if no localized Symbol is available.
         * Note that this is not the Time Format Locale.
         * The locale name is given as ISO 639/BCP 47 identifier (Examples: 'en', 'en-US').
         * @returns The current locale identifier as ISO 639/BCP 47 identifier (Examples: 'en', 'en-US').
         * @preserve (Part of the public API)
         */
function(){if(TcHmi.System.Services.localizationManager)return TcHmi.System.Services.localizationManager.getLocale();TcHmi.Log.error("[Source=Framework, Module=TcHmi.Locale] Fetching locale failed. System not ready.")},Locale.getRegisteredLocales=
/**
         * Returns the list of available application locales.
         * The locale name is given as ISO 639/BCP 47 identifiers (Examples: 'en', 'en-US').
         * @preserve (Part of the public API)
         */
function(){let files=TcHmi.System.Services.localizationManager?.getFiles();if(!files)return[];let applicationFiles=files.get("TcHmi.System.Localization.Application");return applicationFiles?Array.from(applicationFiles.keys()):[]},Locale.getRegisteredLocalesForControl=function(type){let files=TcHmi.System.Services.localizationManager?.getFiles();if(!files)return[];let controlFiles=files.get("TcHmi.System.Localization.Control<"+type+">");return controlFiles?Array.from(controlFiles.keys()):[]},Locale.getRegisteredLocalesForFunction=function(type){let files=TcHmi.System.Services.localizationManager?.getFiles();if(!files)return[];let functionFiles=files.get("TcHmi.System.Localization.Function<"+type+">");return functionFiles?Array.from(functionFiles.keys()):[]};Locale.LocalizationReader=class{constructor(localization){Object.defineProperty(this,"__localizationDictionary",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.__localizationDictionary=localization}getLocalization(){return this.__localizationDictionary}get(key){let res=this.__localizationDictionary[key];return null==res&&(res=key),res}};Locale.Localization=class{constructor(){Object.defineProperty(this,"__namespace",{enumerable:!0,configurable:!0,writable:!0,value:""})}get(options){return TcHmi.System.Services.localizationManager?TcHmi.System.Services.localizationManager.get(this.__namespace,options):(TcHmi.Log.error("[Source=Framework, Module=TcHmi.Locale.Localization] System not ready."),new TcHmi.Locale.LocalizationReader({}))}watch(callback){if(!TcHmi.System.Services.localizationManager){const errorDetail={code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],reason:"Unable to watch localization. System not ready.",domain:"TcHmi.Locale.Localization"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),()=>{}}const callstackLinker=TcHmi.System.Callback.createTask("Locale.watch>"+this.__namespace);return TcHmi.System.Services.localizationManager.watch(this.__namespace,void 0,(data=>{callstackLinker.run((()=>{TcHmi.Callback.callSafeEx(callback,this,data)}))}))}watchEx(options={level:TcHmi.Locale.Level.Application},callback){if(!TcHmi.System.Services.localizationManager){const errorDetail={code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],reason:"Unable to watch localization. System not ready.",domain:"TcHmi.Locale.Localization"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),()=>{}}const callstackLinker=TcHmi.System.Callback.createTask("Locale.watchEx>"+this.__namespace);return TcHmi.System.Services.localizationManager.watch(this.__namespace,options,(data=>{callstackLinker.run((()=>{TcHmi.Callback.callSafeEx(callback,this,data)}))}))}getText(key,options){return TcHmi.System.Services.localizationManager?TcHmi.System.Services.localizationManager.getText(this.__namespace,key,options):key}watchText(key,callback){if(!TcHmi.System.Services.localizationManager){const errorDetail={code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],reason:"Unable to watch localization. System not ready.",domain:"TcHmi.Locale.Localization"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),()=>{}}return TcHmi.System.Services.localizationManager.watchText(this.__namespace,key,void 0,(data=>{TcHmi.Callback.callSafeEx(callback,this,data)}))}watchTextEx(key,options={level:TcHmi.Locale.Level.Application},callback){if(!TcHmi.System.Services.localizationManager){const errorDetail={code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],reason:"Unable to watch localization. System not ready.",domain:"TcHmi.Locale.Localization"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),()=>{}}return TcHmi.System.Services.localizationManager.watchText(this.__namespace,key,options,(data=>{TcHmi.Callback.callSafeEx(callback,this,data)}))}};class ApplicationLocalization extends TcHmi.Locale.Localization{constructor(){super(),this.__namespace="TcHmi.System.Localization.Application"}}Locale.ApplicationLocalization=ApplicationLocalization;class ControlLocalization extends TcHmi.Locale.Localization{constructor(type){super(),this.__namespace="TcHmi.System.Localization.Control<"+type+">"}}Locale.ControlLocalization=ControlLocalization;class FunctionLocalization extends TcHmi.Locale.Localization{constructor(type){super(),this.__namespace="TcHmi.System.Localization.Function<"+type+">"}}Locale.FunctionLocalization=FunctionLocalization;class PackageLocalization extends TcHmi.Locale.Localization{constructor(id){super(),this.__namespace="TcHmi.System.Localization.Package<"+id+">"}}let Level;Locale.PackageLocalization=PackageLocalization,function(Level){Level[Level.Application=0]="Application",Level[Level.Engineering=1]="Engineering"}(Level=Locale.Level||(Locale.Level={}))}(TcHmi.Locale||(TcHmi.Locale={}))}(TcHmi||(TcHmi={})),function(TcHmi){
/**
     * Allows handling date and time formatting.
     * @preserve (Part of the public API)
     */
class Localization{constructor(){}static __rebuildLocalizationCache(){this.__numberFormatMilliSecondsCache.clear(),this.__dateFormatCache.clear()}static __getMillisecondsFormatter(timeFormatLocaleArg){let numberFormatMilliSeconds=this.__numberFormatMilliSecondsCache.get(timeFormatLocaleArg);if(numberFormatMilliSeconds)return numberFormatMilliSeconds;let timeFormatLocale=timeFormatLocaleArg;if(!timeFormatLocale){const config=TcHmi.System.Services.accessManager?.getCurrentUserConfig();timeFormatLocale=config?.timeFormatLocale}try{numberFormatMilliSeconds=new Intl.NumberFormat(timeFormatLocale,{style:"decimal",minimumIntegerDigits:2,minimumFractionDigits:3})}catch(e){timeFormatLocale=void 0,numberFormatMilliSeconds=new Intl.NumberFormat(timeFormatLocale,{style:"decimal",minimumIntegerDigits:2,minimumFractionDigits:3})}return this.__numberFormatMilliSecondsCache.set(timeFormatLocaleArg,numberFormatMilliSeconds),numberFormatMilliSeconds}static getDateTimeFormatter(locale,timeZone,hour12,type="full"){let level1=this.__dateFormatCache.get(locale);level1||(level1=new Map,this.__dateFormatCache.set(locale,level1));let level2=level1.get(timeZone);level2||(level2=new Map,level1.set(timeZone,level2));let level3=level2.get(hour12);level3||(level3=new Map,level2.set(hour12,level3));let formatter=level3.get(type);if(formatter)return formatter;const config=TcHmi.System.Services.accessManager?.getCurrentUserConfig();let timeFormatLocale=locale;timeFormatLocale||(timeFormatLocale=config?.timeFormatLocale);let _timeZone=timeZone;_timeZone||(_timeZone=config?.timeZone);try{new Intl.DateTimeFormat(timeFormatLocale)}catch(e){timeFormatLocale=void 0}try{new Intl.DateTimeFormat(timeFormatLocale,{timeZone:_timeZone})}catch(e){e instanceof RangeError&&(_timeZone=void 0)}let IntlOptions={timeZone:_timeZone,hour12:hour12};switch(type){case"date":IntlOptions.year="numeric",IntlOptions.month="numeric",IntlOptions.day="numeric";break;case"time":TcHmi.System.Environment.dateFractionalSecondDigits&&(IntlOptions.fractionalSecondDigits=3);case"time-no-millisec":IntlOptions.hour="numeric",IntlOptions.minute="numeric",IntlOptions.second="numeric";break;case"full":TcHmi.System.Environment.dateFractionalSecondDigits&&(IntlOptions.fractionalSecondDigits=3);case"full-no-millisec":IntlOptions.year="numeric",IntlOptions.month="numeric",IntlOptions.day="numeric",IntlOptions.hour="numeric",IntlOptions.minute="numeric",IntlOptions.second="numeric"}return IntlOptions.hour&&"function"!=typeof Intl.DateTimeFormat.prototype.formatToParts&&(IntlOptions.hour12=!1),formatter=new Intl.DateTimeFormat(timeFormatLocale,IntlOptions),level3.set(type,formatter),formatter}
/**
         * Skip non numeric chars and parseInt the rest.
         * MS Browsers add Left-To-Right-Mark to output
         * https://github.com/tc39/ecma402/issues/28
         * @param input string input
         * @preserve (Part of the public API)
         */static parseInt(input){let value="";for(let i=0;i<input.length;i++)input.charCodeAt(i)>=32&&input.charCodeAt(i)<=126&&(value+=input[i]);return parseInt(value,10)}
/**
         * Parses a Date object
         * formats it to a time zone and split its components into an object
         * On error all entries will be NaN
         * @param date Date object to parse
         * @param options Options
         * @preserve (Part of the public API)
         */static parseDate(date,options){const dateObject={year:NaN,month:NaN,day:NaN,hour:NaN,minute:NaN,second:NaN,millisecond:NaN};if(isNaN(date.getTime()))return dateObject;let timeZone;if(options&&"string"==typeof options.timeZone&&(timeZone=options.timeZone),"function"==typeof Intl.DateTimeFormat.prototype.formatToParts){let parts=this.getDateTimeFormatter("de-DE",timeZone,!1,"full").formatToParts(date);dateObject.year=TcHmi.Localization.parseInt(parts.find((value=>"year"===value.type)).value),dateObject.month=TcHmi.Localization.parseInt(parts.find((value=>"month"===value.type)).value),dateObject.day=TcHmi.Localization.parseInt(parts.find((value=>"day"===value.type)).value),dateObject.hour=TcHmi.Localization.parseInt(parts.find((value=>"hour"===value.type)).value),dateObject.minute=TcHmi.Localization.parseInt(parts.find((value=>"minute"===value.type)).value),dateObject.second=TcHmi.Localization.parseInt(parts.find((value=>"second"===value.type)).value),dateObject.millisecond=date.getUTCMilliseconds()}else{let formatter=this.getDateTimeFormatter("de-DE",timeZone,!1,"date"),dateArray=formatter.format(date).split(".");dateObject.year=TcHmi.Localization.parseInt(dateArray[2]),dateObject.month=TcHmi.Localization.parseInt(dateArray[1]),dateObject.day=TcHmi.Localization.parseInt(dateArray[0]),formatter=this.getDateTimeFormatter("de-DE",timeZone,!1,"time");let timeArray=formatter.format(date).split(":");dateObject.hour=TcHmi.Localization.parseInt(timeArray[0]),dateObject.minute=TcHmi.Localization.parseInt(timeArray[1]),dateObject.second=TcHmi.Localization.parseInt(timeArray[2]),dateObject.millisecond=date.getUTCMilliseconds()}return dateObject}
/**
         * Formats a Date object down to milliseconds in the correct locale and time zone (config from server user or browser default)
         * On error this will be null
         * @param date Date Object to parse
         * @param options Options
         * @preserve (Part of the public API)
         */static formatDate(date,options){if(isNaN(date.getTime()))return null;const locale=options?.locale??void 0,timeZone=options?.timeZone,format=options?.type;let dateString="";if(TcHmi.System.Environment.dateFractionalSecondDigits){const formatter=this.getDateTimeFormatter(locale,timeZone,void 0,format);dateString=formatter.format(date)}else if("function"==typeof Intl.DateTimeFormat.prototype.formatToParts){this.getDateTimeFormatter(locale,timeZone,void 0,format).formatToParts(date).forEach((part=>{if("second"===part.type&&"time-no-millisec"!==format&&"full-no-millisec"!==format){let secMillisec=Localization.parseInt(part.value);secMillisec%1==0&&(secMillisec+=date.getMilliseconds()/1e3);let numberFormatMilliSeconds=this.__getMillisecondsFormatter(locale);dateString+=numberFormatMilliSeconds.format(secMillisec)}else dateString+=part.value}))}else{const formatter=this.getDateTimeFormatter(locale,timeZone,!1,format);if(dateString=formatter.format(date),!options||"date"!==options.type&&"time-no-millisec"!==format&&"full-no-millisec"!==format){let fractionString=this.__getMillisecondsFormatter(locale).format(date.getMilliseconds()/1e3);dateString+=fractionString.slice(2)}}return dateString}}Object.defineProperty(Localization,"__numberFormatMilliSecondsCache",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(Localization,"__dateFormatCache",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),TcHmi.Localization=Localization}(TcHmi||(TcHmi={})),function(TcHmi){TcHmi.LocalStorage=
/**
     * Encapsulates access to the browsers localStorage. Provides methods to set, get and delete Items from localStorage
     * that take and return properly typed values. Has a validation mechanism that automatically deletes items if their
     * default initial value changes between class instantiations.
     * @preserve (Part of the public API)
     */
class{constructor(nameOrControl,__validationValues){Object.defineProperty(this,"__validationValues",{enumerable:!0,configurable:!0,writable:!0,value:__validationValues}),Object.defineProperty(this,"__name",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__storage",{enumerable:!0,configurable:!0,writable:!0,value:void 0});const namePrefix=TcHmi.System.hostPrefix+"TcHmi.LocalStorage.data:",name="string"==typeof nameOrControl?nameOrControl:nameOrControl.getType()+":"+nameOrControl.getId();this.__name=namePrefix+name;let stored=window.localStorage.getItem(this.__name);if(null===stored){const legacyNamePrefix="TCHMI_STORAGE_USERDATA_";if(stored=window.localStorage.getItem(legacyNamePrefix+name),null!==stored)try{window.localStorage.setItem(this.__name,stored),window.localStorage.removeItem(legacyNamePrefix+name)}catch(ex){}}if(stored)try{this.__storage=JSON.parse(stored),"object"!=typeof this.__storage&&(this.__storage={})}catch(ex){this.__storage={}}else this.__storage={};for(const[key,value]of Object.entries(this.__validationValues)){const storageEntry=this.__storage[key];storageEntry&&"validation"in storageEntry&&!tchmi_equal(value,storageEntry.validation.expectedValue)&&this.delete(key)}}
/**
         * Sets a stored value for the current user. Returns a boolean that indicates if writing to localStorage was successful.
         * @param key The key of the value to set.
         * @param value The value to set.
         * @preserve (Part of the public API)
         */set(key,value){const user=TcHmi.Server.getCurrentUser();if(!user)return!1;let storageForKey=this.__storage[key];if(!storageForKey){const validationValue=this.__validationValues[key];storageForKey=void 0!==validationValue?{validation:{expectedValue:validationValue}}:{},this.__storage[key]=storageForKey}storageForKey.users||(storageForKey.users={}),storageForKey.users[user]=value;try{window.localStorage.setItem(this.__name,JSON.stringify(this.__storage))}catch(ex){return TcHmi.Log.warnEx("[Source=Framework, Module=TcHmi.Storage] Failed to set item in localStorage. This could be caused by missing permissions or the available storage being full."+(ex instanceof Error?` Exception: ${ex.message}`:"")),!1}return!0}
/**
         * Sets a stored value for the current user only if a stored value is already set or the new value to be stored
         * is not equal to the validationValue. This is useful if you want to avoid writing a value into localStorage if
         * that value is already equal to the default value anyway. Returns a boolean that indicates if a new value was set.
         * @param key The key of the value to set.
         * @param value The value to set.
         * @preserve (Part of the public API)
         */setWithValidation(key,value){const user=TcHmi.Server.getCurrentUser();if(!user)return!1;const valueEqualsValidation=key in this.__validationValues&&tchmi_equal(value,this.__validationValues[key]);let storageForKey=this.__storage[key];if(!storageForKey){if(valueEqualsValidation)return!1;const validationValue=this.__validationValues[key];storageForKey=void 0!==validationValue?{validation:{expectedValue:validationValue}}:{},this.__storage[key]=storageForKey}if(!storageForKey.users?.[user]&&valueEqualsValidation)return!1;storageForKey.users||(storageForKey.users={}),storageForKey.users[user]=value;try{window.localStorage.setItem(this.__name,JSON.stringify(this.__storage))}catch(ex){return TcHmi.Log.warnEx("[Source=Framework, Module=TcHmi.Storage] Failed to set item in localStorage. This could be caused by missing permissions or the available storage being full."+(ex instanceof Error?` Exception: ${ex.message}`:"")),!1}return!0}
/**
         * Returns the stored value associated with the given key for the current user.
         * @param key The key to read.
         * @preserve (Part of the public API)
         */get(key){const user=TcHmi.Server.getCurrentUser();if(!user)return;const storageForKey=this.__storage[key];return storageForKey&&storageForKey.users?storageForKey.users[user]:void 0}
/**
         * Deletes a stored value for the current user.
         * @param key The key of the value to delete.
         * @preserve (Part of the public API)
         */delete(key){const storageForKey=this.__storage[key];if(storageForKey){const user=TcHmi.Server.getCurrentUser();if(!user)return;storageForKey.users&&(delete storageForKey.users[user],0===Object.keys(storageForKey.users).length&&delete this.__storage[key])}if(Object.keys(this.__storage).length>0)try{window.localStorage.setItem(this.__name,JSON.stringify(this.__storage))}catch(ex){}else window.localStorage.removeItem(this.__name)}}}(TcHmi||(TcHmi={})),function(TcHmi){
/**
     * Provides functions for logging.
     * @preserve (Part of the public API)
     */
class Log{}Object.defineProperty(Log,"Prefix",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(Log,"Force",{enumerable:!0,configurable:!0,writable:!0,value:!1}),TcHmi.Log=Log,
/**
     * Provides functions for logging.
     * @preserve (Part of the public API)
     */
function(Log){let __il=new class{constructor(){if(Object.defineProperty(this,"__db",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"__cache",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"__ready",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"__error",{enumerable:!0,configurable:!0,writable:!0,value:!1}),TCHMI_CONSOLE_LOG_PERSISTENT)if(window.indexedDB){let request=null;try{request=window.indexedDB.open("TcHmi.Log")}catch(e){this.__ready=!1,this.__error=!0,TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.Log] Persistent logging failed because of unexpected exception while opening database:\n",e)}null!==request&&(request.onerror=e=>{this.__ready=!1,this.__error=!0,TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.Log] Persistent logging failed because of request.onerror:\n",e)},request.onsuccess=()=>{this.__db=request.result,this.__ready=!0},request.onupgradeneeded=e=>{this.__db=e.target.result;try{this.__db.createObjectStore("data",{keyPath:"id",autoIncrement:!0}),this.__ready=!0}catch(e){this.__ready=!1,this.__error=!0,TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.Log] Persistent logging failed because of unexpected exception in request.onupgradeneeded event handler:\n",e)}})}else this.__ready=!1,this.__error=!0,TcHmi.Log.error("[Source=Framework, Module=TcHmi.Log] Persistent logging failed because IndexedDB API is missing in your browser.")}add(timespan,type,message,...optionalParameters){if(!TCHMI_CONSOLE_LOG_PERSISTENT)return;if(!window.indexedDB)return;let optionalParametersPrepared=[];for(let i=0,ii=optionalParameters.length;i<ii;i++){let op=optionalParameters[i];try{if(null!==op&&"object"==typeof op){op=__tchmi_is_instanced_object(op)?op.constructor&&op.constructor.name?'[IndexedDBLog: Serializing data not possible for type: "object" with constructor: "'+op.constructor.name+'"]':'[IndexedDBLog: Serializing data not possible for type: "object"]':JSON.parse(JSON.stringify(op,((_key,value)=>{if("function"==typeof value)return"[IndexedDBLog: Serializing data not possible for type: 'function']";if("object"==typeof value){return __tchmi_is_instanced_object(value)?value?.constructor?.name?'[IndexedDBLog: Serializing data not possible for type: "object" with constructor: "'+value.constructor.name+'"]':"[IndexedDBLog: Serializing data not possible for type: 'object']":value}return value})))}else null!==op&&"function"==typeof op&&(op='[IndexedDBLog: Serializing data not possible for type: "function"]')}catch(e){op='[IndexedDBLog: Serializing data failed with exception: "'+e+'"]'}optionalParametersPrepared.push(op)}if(!this.__ready)return void(this.__error||this.__cache.push({timespan:timespan,type:type,message:message,optionalParameters:optionalParametersPrepared}));if(this.__cache&&this.__cache.length>0){let cache=this.__cache;for(this.__cache=[];cache.length>0;){let entry=cache.shift();this.add(entry.timespan,entry.type,entry.message,...entry.optionalParameters)}}if(!this.__db)return;let ta=null;try{ta=this.__db.transaction(["data"],"readwrite")}catch(e){this.__ready=!1,this.__error=!0,TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.Log] Persistent logging failed because of unexpected exception:\n",e)}if(!ta)return;let os=null;try{os=ta.objectStore("data")}catch(e){this.__ready=!1,this.__error=!0,TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.Log] Persistent logging failed because of unexpected exception:\n",e)}if(!os)return;let count=null;try{count=os.count()}catch(e){TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.Log] Persistent logging failed because of unexpected exception:\n",e),this.__ready=!1,this.__error=!0}count&&(count.onsuccess=e=>{let count=e.target.result;if(count+1>TCHMI_CONSOLE_LOG_PERSISTENT_MAX_ENTRIES){let cdel=count+1-TCHMI_CONSOLE_LOG_PERSISTENT_MAX_ENTRIES,cdone=0,cursor=null;try{cursor=os.openCursor()}catch(e){this.__ready=!1,this.__error=!0,TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.Log] Persistent logging failed because of unexpected exception:\n",e)}if(!cursor)return;cursor.onerror=e=>{this.__ready=!1,this.__error=!0,TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.Log] Persistent logging failed because of unexpected exception:\n",e)},cursor.onsuccess=e=>{let cursor=e.target.result;if(cursor)return cdone<cdel?(cdone++,cursor.delete(),void cursor.continue()):void os.add({timespan:timespan,type:type,message:message,optionalParameters:optionalParametersPrepared})}}else os.add({timespan:timespan,type:type,message:message,optionalParameters:optionalParametersPrepared})})}},__oldTimerName=null,__performanceLogCache=new Map;window.addEventListener("error",(e=>{TCHMI_CONSOLE_LOG_PERSISTENT&&window.indexedDB&&__il.add(Date.now(),"Error",e.error.stack)})),Log.error=
/**
         * Prints out an error message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 1 or higher.
         * If the message is an object it will be inspectable in most debug tools. See errorEx if you want to show multiple objects.
         * Can log into a browser database, too. See "client" page in config page of the server.
         * @param message The text which will be printed out in the browsers console.
         * @param forceNoPrefix If set the date will be hidden
         * @preserve (Part of the public API)
         */
function(message,forceNoPrefix=!1){TCHMI_CONSOLE_LOG_LEVEL<1&&!TcHmi.Log.Force||(console&&console.error&&!TcHmi.System.isUnloaded&&(!0===TcHmi.Log.Prefix&&!1===forceNoPrefix&&"object"!=typeof message?console.error("["+(new Date).toISOString()+"][Error] "+message):console.error(message)),TCHMI_CONSOLE_LOG_PERSISTENT&&window.indexedDB&&("string"==typeof message?__il.add(Date.now(),"Error",message):__il.add(Date.now(),"Error","",message)))},Log.errorEx=
/**
         * Prints out an error message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 1 or higher.
         * Can log into a browser database, too. See "client" page in config page of the server.
         * @param message The text which will be printed out in the browsers console.
         * @param optionalParameters Optional parameters
         * @preserve (Part of the public API)
         */
function(message,...optionalParameters){TCHMI_CONSOLE_LOG_LEVEL<1&&!TcHmi.Log.Force||(console&&console.error&&!TcHmi.System.isUnloaded&&(TcHmi.Log.Prefix?console.error("["+(new Date).toISOString()+"][Error] "+message,...optionalParameters):console.error(message,...optionalParameters)),TCHMI_CONSOLE_LOG_PERSISTENT&&window.indexedDB&&__il.add(Date.now(),"Error",message,...optionalParameters))},Log.warn=
/**
         * Prints out a warning message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 2 or higher.
         * If the message is an object it will be inspectable in most debug tools. See warnEx if you want to show multiple objects.
         * Can log into a browser database, too. See "client" page in config page of the server.
         * @param message The text which will be printed out in the browsers console
         * @param forceNoPrefix If set the date will be hidden
         * @preserve (Part of the public API)
         */
function(message,forceNoPrefix=!1){TCHMI_CONSOLE_LOG_LEVEL<2&&!TcHmi.Log.Force||(console&&console.warn&&!TcHmi.System.isUnloaded&&(!0===TcHmi.Log.Prefix&&!1===forceNoPrefix&&"object"!=typeof message?console.warn("["+(new Date).toISOString()+"][Warning] "+message):console.warn(message)),TCHMI_CONSOLE_LOG_PERSISTENT&&window.indexedDB&&("string"==typeof message?__il.add(Date.now(),"Warning",message):__il.add(Date.now(),"Warning","",message)))},Log.warnEx=
/**
         * Prints out a warning message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 2 or higher.
         * Can log into a browser database, too. See "client" page in config page of the server.
         * @param message The text which will be printed out in the browsers console.
         * @param optionalParameters Optional parameters
         * @preserve (Part of the public API)
         */
function(message,...optionalParameters){TCHMI_CONSOLE_LOG_LEVEL<2&&!TcHmi.Log.Force||(console&&console.warn&&!TcHmi.System.isUnloaded&&(TcHmi.Log.Prefix?console.warn("["+(new Date).toISOString()+"][Warning] "+message,...optionalParameters):console.warn(message,...optionalParameters)),TCHMI_CONSOLE_LOG_PERSISTENT&&window.indexedDB&&__il.add(Date.now(),"Warning",message,...optionalParameters))},Log.info=
/**
         * Prints out an info message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 3 or higher.
         * If the message is an object it will be inspectable in most debug tools. See infoEx if you want to show multiple objects.
         * Can log into a browser database, too. See "client" page in config page of the server.
         * @param message The text which will be printed out in the browsers console
         * @param forceNoPrefix If set the date will be hidden
         * @preserve (Part of the public API)
         */
function(message,forceNoPrefix=!1){TCHMI_CONSOLE_LOG_LEVEL<3&&!TcHmi.Log.Force||(console&&console.info&&!TcHmi.System.isUnloaded&&(!0===TcHmi.Log.Prefix&&!1===forceNoPrefix&&"object"!=typeof message?console.info("["+(new Date).toISOString()+"][Info] "+message):console.info(message)),TCHMI_CONSOLE_LOG_PERSISTENT&&window.indexedDB&&("string"==typeof message?__il.add(Date.now(),"Info",message):__il.add(Date.now(),"Info","",message)))},Log.infoEx=
/**
         * Prints out an info message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 3 or higher.
         * Can log into a browser database, too. See "client" page in config page of the server.
         * @param message The text which will be printed out in the browsers console.
         * @param optionalParameters Optional parameters
         * @preserve (Part of the public API)
         */
function(message,...optionalParameters){TCHMI_CONSOLE_LOG_LEVEL<3&&!TcHmi.Log.Force||(console&&console.info&&!TcHmi.System.isUnloaded&&(TcHmi.Log.Prefix?console.info("["+(new Date).toISOString()+"][Info] "+message,...optionalParameters):console.info(message,...optionalParameters)),TCHMI_CONSOLE_LOG_PERSISTENT&&window.indexedDB&&__il.add(Date.now(),"Info",message,...optionalParameters))},Log.debug=
/**
         * Prints out a debug message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 4 or higher.
         * If the message is an object it will be inspectable in most debug tools. See debugEx if you want to show multiple objects.
         * Can log into a browser database, too. See "client" page in config page of the server.
         * @param message The text which will be printed out in the browsers console.
         * @param forceNoPrefix If set the date will be hidden
         * @preserve (Part of the public API)
         */
function(message,forceNoPrefix=!1){TCHMI_CONSOLE_LOG_LEVEL<4&&!TcHmi.Log.Force||(console&&console.log&&!TcHmi.System.isUnloaded&&(!0===TcHmi.Log.Prefix&&!1===forceNoPrefix&&"object"!=typeof message?console.log("["+(new Date).toISOString()+"][Debug] "+message):console.log(message)),TCHMI_CONSOLE_LOG_PERSISTENT&&window.indexedDB&&("string"==typeof message?__il.add(Date.now(),"Debug",message):__il.add(Date.now(),"Debug","",message)))},Log.debugEx=
/**
         * Prints out a debug message in the browsers console if TCHMI_CONSOLE_LOG_LEVEL is set to 4 or higher.
         * Can log into a browser database, too. See "client" page in config page of the server.
         * @param message The text which will be printed out in the browsers console.
         * @param optionalParameters Optional parameters
         * @preserve (Part of the public API)
         */
function(message,...optionalParameters){TCHMI_CONSOLE_LOG_LEVEL<4&&!TcHmi.Log.Force||(console&&console.log&&!TcHmi.System.isUnloaded&&(TcHmi.Log.Prefix?console.log("["+(new Date).toISOString()+"][Debug] "+message,...optionalParameters):console.log(message,...optionalParameters)),TCHMI_CONSOLE_LOG_PERSISTENT&&window.indexedDB&&__il.add(Date.now(),"Debug",message,...optionalParameters))},Log.performanceLog=function(timerName){-1===TCHMI_CONSOLE_LOG_LEVEL&&window.console?.time&&window.console.timeEnd&&(null!==__oldTimerName&&window.console.timeEnd(__oldTimerName),null!==timerName&&window.console.time(timerName),__oldTimerName=timerName)},Log.performanceLogStart=function(timerName){-1===TCHMI_CONSOLE_LOG_LEVEL&&(window.console&&window.console.time&&window.console.time(timerName),TCHMI_CONSOLE_LOG_PERSISTENT&&window.indexedDB&&window.performance&&window.performance.now&&(__performanceLogCache.set(timerName,window.performance.now()),__il.add(Date.now(),"Debug","Timer: '"+timerName+"' started.")))},Log.performanceLogEnd=function(timerName){if(-1===TCHMI_CONSOLE_LOG_LEVEL&&(window.console&&window.console.timeEnd&&window.console.timeEnd(timerName),TCHMI_CONSOLE_LOG_PERSISTENT&&window.indexedDB&&window.performance&&window.performance.now)){let start=__performanceLogCache.get(timerName);if(__performanceLogCache.delete(timerName),void 0!==start){let end=window.performance.now();__il.add(Date.now(),"Debug","Timer: '"+timerName+"' finished after "+(end-start)+"ms.")}}},Log.buildMessage=
/**
         * Builds a formatted message of hierarchical error objects
         * @param error Error object to show nicely
         * @preserve (Part of the public API)
         */
function(error){const __buildMessage=function(error,level){if(!error)return"";let res="",indention="  ".repeat(level+1);if(error.code&&(res+="Code: "+error.code+"/0x"+error.code.toString(16)),error.message&&(res+=", Message: "+error.message),error.reason&&(res+="\n"+indention+"Reason: "+error.reason),error.exception&&(res+="\n"+indention+"Exception: "+error.exception),error.domain&&(res+="\n"+indention+"Domain: "+error.domain),void 0!==error.errors&&error.errors.length){res+="\n"+indention+"as result of: ";for(let[index,errorItem]of error.errors.entries())res+=__buildMessage(errorItem,level+1),index!==error.errors.length-1&&(res+="\n"+indention)}return res};return __buildMessage(error,0)}}(Log=TcHmi.Log||(TcHmi.Log={}))}(TcHmi||(TcHmi={})),function(TcHmi){
/**
     * Convenience functionality for dealing with TwinCAT HMI object path syntax.
     * @preserve (Part of the public API)
     */
class ObjectPath{constructor(pathOrTokens){if(Object.defineProperty(this,"__pathString",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"__path",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),"string"==typeof pathOrTokens){this.__pathString=pathOrTokens;const path=this.__split(this.__pathString,{noArrayBrackets:!0});this.__path={path:path,isPathTokens:!path.some((token=>"number"==typeof token))}}else if(pathOrTokens){for(const token of pathOrTokens)if("string"==typeof token){if(0===token.length)throw new Error(`Invalid token '${token}' found in token array '${JSON.stringify(pathOrTokens)}'. Empty string tokens are not allowed.`);if(token.includes("::"))throw new Error(`Invalid token '${token}' found in token array '${JSON.stringify(pathOrTokens)}'. The sequence '::' is not allowed in tokens because this is the token separator.`);if(token.includes("]["))throw new Error(`Invalid token '${token}' found in token array '${JSON.stringify(pathOrTokens)}'. One token cannot contain more than one array element accessor.`)}this.__path={path:[],isPathTokens:!0},this.push(...pathOrTokens)}else this.__path={path:[],isPathTokens:!0}}
/**
         * Append the given tokens to the back of the path. A token can be a single object property accessor, a single
         * array element accessor using a number or string containing a number enclosed in brackets, or a complete path
         * in string format, which will be parsed and its individual parts added to the object path instance.
         * @param tokens The tokens to add.
         * @returns The new length of the path.
         * @preserve (Part of the public API)
         */push(...tokens){return this.__add(tokens)}
/**
         * Removes the last property accessor from the back of the path and returns it. Object property accessors are
         * returned as strings, while array element accessors are returned as numbers.
         * @returns The removed property accessor.
         * @preserve (Part of the public API)
         */pop(){return this.__remove()}
/**
         * Removes the last path token from the back of the path and returns it. Object property accessors are returned
         * as strings, while array element accessors are returned as strings containing a number enclosed in brackets.
         * @returns The removed path token.
         * @preserve (Part of the public API)
         */popAsPathToken(){const token=this.__remove();return"number"==typeof token?`[${token}]`:token}
/**
         * Append the given tokens to the front of the path. A token can be a single object property access, a single
         * array element access using a number or string containing a number enclosed in brackets, or a complete path in
         * string format, which will be parsed and its individual parts added to the object path instance.
         * @param tokens The tokens to add.
         * @returns The new length of the path.
         * @preserve (Part of the public API)
         */unshift(...tokens){return this.__add(tokens,!0)}
/**
         * Removes the first property accessor from the front of the path and returns it. Object property accessors are
         * returned as strings, while array element accessors are returned as numbers.
         * @returns The removed property accessor.
         * @preserve (Part of the public API)
         */shift(){return this.__remove(!0)}
/**
         * Removes the first path token from the front of the path and returns it. Object property accessors are
         * returned as strings, while array element accessors are returned as strings containing a number enclosed
         * in brackets.
         * @returns The removed path token.
         * @preserve (Part of the public API)
         */shiftAsPathToken(){const token=this.__remove(!0);return"number"==typeof token?`[${token}]`:token}__add(tokens,inFront=!1){if(0===tokens.length)return this.__path.path.length;this.__pathString=null,tokens=tokens.flatMap((token=>"string"==typeof token?this.__split(token,{noArrayBrackets:!0}):token));for(const token of tokens)if("number"==typeof token&&(this.__path.isPathTokens=!1,Number.isNaN(token)||!Number.isFinite(token)))throw new Error(`Invalid token ${token} found. Only finite numbers are allowed as array element accessors.`);return inFront?this.__path.path.unshift(...tokens):this.__path.path.push(...tokens),this.__path.path.length}__remove(inFront=!1){if(0===this.length)return;this.__pathString=null;const token=inFront?this.__path.path.shift():this.__path.path.pop();return this.__path.path.some((token=>"number"==typeof token))||(this.__path.isPathTokens=!0),token}slice(start,end){return new ObjectPath(this.__path.path.slice(start,end))}
/**
         * Returns the property accessor at the given index.
         * @param index The index.
         * @returns The property accessor at the given index.
         * @preserve (Part of the public API)
         */get(index){return this.__path.path[index]}
/**
         * Returns the property accessor at the given index. Array item accessors are returned as a string containing a
         * number enclosed in brackets.
         * @param index The index.
         * @returns The property accessor at the given index.
         * @preserve (Part of the public API)
         */getAsPathToken(index){const token=this.__path.path[index];return"number"==typeof token?`[${token}]`:token}
/**
         * The current length of the path.
         * @preserve (Part of the public API)
         */get length(){return this.__path.path.length}
/**
         * Provides an IterableIterator for the object path. Iterates over all property accessors.
         * @returns An IterableIterator.
         * @preserve (Part of the public API)
         */[window.Symbol.iterator](){return this.__path.path[window.Symbol.iterator]()}
/**
         * Reads the property of the given object or array that is indicated by the object path. Does not create a
         * clone.
         * @param target The object, array or string to read from.
         * @returns The value of the property that was read.
         * @preserve (Part of the public API)
         */readFrom(target){for(const propertyAccessor of this)target=this.__applyPropertyAccessor(target,propertyAccessor);return target}
/**
         * Writes the given value to the property of the given object or array that is indicated by the object path.
         * @param target The object or array to write to.
         * @param value The value to write.
         * @preserve (Part of the public API)
         */writeTo(target,value){const iterator=this[window.Symbol.iterator]();let current=iterator.next();if(current.done)throw new Error("Could not write with empty path. The path must contain at least on token or property accessor to be able to write.");let next=iterator.next();for(;!next.done;)target=this.__applyPropertyAccessor(target,current.value),current=next,next=iterator.next();if(Array.isArray(target)){if("number"!=typeof current.value)throw new Error(`Could not write to property ${current.value} of array. Arrays can only be written to by numeric indices.`);target[current.value]=value}else{if(null===target)throw new Error(`Could not write to property ${current.value} of null.`);if("object"!=typeof target)throw new Error(`Could not write to property ${current.value} of type ${typeof target}.`);if("string"!=typeof current.value)throw new Error(`Could not write to property ${current.value} of object. Objects can only be written to by object property accessors, which must be strings and cannot be numbers enclosed in brackets.`);target[current.value]=value}}__applyPropertyAccessor(target,propertyAccessor){const targetType=typeof target;if(Array.isArray(target)||"string"===targetType){if("number"==typeof propertyAccessor||"length"===propertyAccessor)return target[propertyAccessor];throw new Error(`Could not read property ${propertyAccessor} of array or string. Arrays or strings can only be read by numeric indices, or their length property.`)}if(null===target)throw new Error(`Could not read property ${propertyAccessor} of null.`);if("object"===targetType){if("string"==typeof propertyAccessor)return target[propertyAccessor];throw new Error(`Could not read property ${propertyAccessor} of object. Objects can only be read by object property accessors, which must be strings and cannot be numbers enclosed in brackets.`)}throw new Error(`Could not read property ${propertyAccessor} of type ${targetType}.`)}
/**
         * Returns the path in string format.
         * @returns The path in string format.
         * @preserve (Part of the public API)
         */toString(){if(this.__pathString)return this.__pathString;this.__pathString="";for(const token of this.__path.path)"string"==typeof token?0===this.__pathString.length?this.__pathString+=token:this.__pathString+="::"+token:this.__pathString+="["+token+"]";return this.__pathString}
/**
         * Converts the object path to tokens. Object property accessors are defined as strings, array item accessors
         * are defined as strings containig a number enclosed in brackets.
         * @returns The path in token array format.
         * @preserve (Part of the public API)
         */toPathTokens(){return this.__path.isPathTokens?this.__path.path:this.__path.path.map((token=>"number"==typeof token?`[${token}]`:token))}
/**
         * Splits the object path into tokens but converts tokens like [0] into 0 which can directly be used as array
         * item accessors. Object property accessors are defined as strings.
         * @returns The path in property accessors format.
         * @preserve (Part of the public API)
         */toPropertyAccessors(){return this.__path.path}__split(pathString,options){const res=[],noArrayBrackets=options?.noArrayBrackets??!1,tokens=pathString.split("::");for(let i=0,ii=tokens.length;i<ii;i++){let token=tokens[i];if(i>0&&0===token.length)throw new Error(`Invalid token '${token}' found in path '${pathString}'. Empty string tokens are not allowed. At least one character has to occurr before and after a '::' sequence which is not at the beginning of the path.`);let temp="",bracketsContent="",bracketsOpened=0,bracketsClosed=0;for(let j=0,jj=token.length;j<jj;j++){let c=token[j];if("["===c&&temp.length>0){if(bracketsOpened++,bracketsOpened>bracketsClosed+1)throw new Error(`Invalid token '${token}' found in path '${pathString}'. Multiple opening brackets before closing bracket.`);bracketsContent="",res.push(temp),temp="",noArrayBrackets||(temp+=c)}else if("]"===c){if(bracketsClosed++,bracketsOpened<bracketsClosed)throw new Error(`Invalid token '${token}' found in path '${pathString}'. Unexpected closing bracket.`);if(token.length>j+1&&"["!==token[j+1])throw new Error(`Invalid token '${token}' found in path '${pathString}'. Unexpected token after closing bracket.`);if(noArrayBrackets){let num=parseInt(bracketsContent,10);if(Number.isNaN(num))throw new Error(`Invalid token '${token}' found in path '${pathString}'. Unexpected token in brackets. Only numeric indices are allowed.`);res.push(num)}else temp+=c,res.push(temp);temp=""}else{if("["===c){if(bracketsOpened++,bracketsOpened>bracketsClosed+1)throw new Error(`Invalid token '${token}' found in path '${pathString}'. Multiple opening brackets before closing bracket.`);bracketsContent=""}(!noArrayBrackets||noArrayBrackets&&"["!==c&&"]"!==c)&&(temp+=c),"["!==c&&"]"!==c&&(bracketsContent+=c),j===jj-1&&temp.length>0&&res.push(temp)}}if(bracketsOpened>bracketsClosed)throw new Error(`Invalid token '${token}' found in path '${pathString}'. Missing closing bracket.`)}return res}
/**
         * Returns the path in string format.
         * @param tokens The path as an array in token or property accessor format.
         * @returns The path in string format.
         * @preserve (Part of the public API)
         */static toString(tokens){if(0===arguments.length)return Object.toString.call(this);return new ObjectPath(tokens).toString()}
/**
         * Converts the object path to tokens. Object property accessors are defined as strings, array item accessors
         * are defined as strings containig a number enclosed in brackets.
         * @param path The path to convert. A path in string format uses '::' to denote object property access and '[]'
         * to denote array element access. For example: 'foo::bar[1]'.
         * @returns The path in token array format.
         * @preserve (Part of the public API)
         */static toPathTokens(path){return new ObjectPath(path).toPathTokens()}
/**
         * Splits the object path into tokens but converts tokens like [0] into 0 which can directly be used as array
         * item accessors. Object property accessors are defined as strings.
         * @param path The path to convert. A path in string format uses '::' to denote object property access and '[]'
         * to denote array element access. For example: 'foo::bar[1]'.
         * @returns The path in property accessors format.
         * @preserve (Part of the public API)
         */static toPropertyAccessors(path){return new ObjectPath(path).toPropertyAccessors()}}TcHmi.ObjectPath=ObjectPath}(TcHmi||(TcHmi={}));var __classPrivateFieldGet=this&&this.__classPrivateFieldGet||function(receiver,state,kind,f){if("a"===kind&&!f)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof state?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===kind?f:"a"===kind?f.call(receiver):f?f.value:state.get(receiver)},TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TCHMI_DYNAMIC_INSTANCE_ID,TCHMI_DEBUG_TIME_LOAD_LIBRARY,TCHMI_ENGINEERING,TCHMI_DESIGNER,TCHMI_LIVEVIEW,TCHMI_RUNTIME,TCHMI_ENGINEERING_WEBSOCKET,TCHMI_TARGET_PARTIAL,TCHMI_CONFIG_OVERRIDE,TCHMI_ENABLE_DESIGNER_MODE_WEBSOCKET_URL,TCHMI_ENABLE_DESIGNER_MODE,TCHMI_ENABLE_DESIGNER_MODE_MASTER,TCHMI_ENABLE_DESIGNER_MODE_SLAVE,TCHMI_ENABLE_DESIGNER_MODE_FALLBACK_CONFIG_JSON,TCHMI_ENABLE_DESIGNER_MODE_TARGET_PARTIAL,TCHMI_CONSOLE_LOG_LEVEL,TCHMI_CONSOLE_LOG_PERSISTENT,TCHMI_CONSOLE_LOG_PERSISTENT_MAX_ENTRIES,TCHMI_CONSOLE_LOG_TCHMISERVER_MESSAGES,TCHMI_CONSOLE_LOG_ENGINEERING_COM_MESSAGES,TCHMI_CONSOLE_LOG_DESIGNER_MODE_COM_MESSAGES,TCHMI_NUGET_METADATA,TCHMI_UNITTEST_MODE,TCHMI_EVENT_OPTION_OBJECT_SUPPORTED,TCHMI_SERVER_STATE_WATCH_INTERVAL,TCHMI_DIAGNOSTICS_SERVER,TCHMI_DIAGNOSTICS_SERVER_REQUEST_HISTORY_MAX_BUFFER,TCHMI_DIAGNOSTICS_SERVER_REQUEST_RESPONSE_HISTORY_MAX_BUFFER,TCHMI_DIAGNOSTICS_SERVER_REQUEST_RESPONSE_HISTORY_MESSAGES,TCHMI_FLAG_OVERRIDES;
/**
 * Converts string "\t"/"\n" (symbol world) to tab/newline (HTML world).
 * This supports escaping with "\\n"
 *
 * Some controls converted newline to space in all released tchmi versions.
 * So this helper can do this with the options.newlineToSpace, but
 * do not use that parameter for new controls.
 *
 * You also probably do not need options.preserveBackslash for controls.
 *
 * @param text The text to escape
 * @param options options
 * @returns The decoded representation of parameter text.
 * @preserve (Part of the public API)
 */
function tchmi_decode_control_characters(text,options){if(!text)return"";const newlineToSpace="boolean"==typeof options?options:options?.newlineToSpace??!1,preserveBackslash="boolean"!=typeof options&&(options?.preserveBackslash??!1);if("string"!=typeof text){if("function"!=typeof text.toString)return text;text=text.toString()}if(!text.includes("\\")&&!newlineToSpace)return text;newlineToSpace&&(text=text.replace(/^\\n|([^\\])\\n/g,"$1 ").replace(/^\\r|([^\\])\\r/g,"$1 "));let decoded="",prevIndex=0,index=text.indexOf("\\");for(;-1!==index;){decoded+=text.slice(prevIndex,index);let nextChar=text.charAt(index+1);switch(nextChar){case"n":decoded+="\n";break;case"r":decoded+="\r";break;case"t":decoded+="\t";break;case"\\":preserveBackslash&&"n"!==text.charAt(index+2)&&"r"!==text.charAt(index+2)&&"t"!==text.charAt(index+2)?decoded+="\\\\":decoded+="\\";break;default:decoded+=nextChar}prevIndex=index+2,index=text.indexOf("\\",prevIndex)}return decoded+=text.slice(prevIndex),decoded}
/**
 * Converts tab/newline (HTML world) to string "\t"/"\n" (symbol world).
 * This supports escaping with "\\t"
 *
 * @param text The text to encode
 * @returns The encoded representation of parameter text.
 * @preserve (Part of the public API)
 */function tchmi_encode_control_characters(text){if(!text)return"";if("string"!=typeof text){if("function"!=typeof text.toString)return text;text=text.toString()}return text.replace(/\\/gm,"\\\\").replace(/\n/gm,"\\n").replace(/\r/gm,"\\r").replace(/\t/gm,"\\t")}
/**
 * Encodes HTML
 * @param html The html to encode
 * @returns The encoded representation of parameter html.
 * @preserve (Part of the public API)
 */function tchmi_encode_html(html){return"string"!=typeof html&&"function"==typeof html.toString&&(html=html.toString()),String(html).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}
/**
 * Decodes HTML
 * @param text The text to decode
 * @returns The decoded representation of parameter text.
 * "&#176;!\"&#167;$%&/()=?~#|&#233;&#232;€…™&#174;&#169;"
 * "°     !\"§     $%&/()=?~#|é     è     €…™®     ©"
 * @preserve (Part of the public API)
 */function tchmi_decode_html(text){return"string"!=typeof text&&"function"==typeof text.toString&&(text=text.toString()),String(text).replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&#228;/g,"ä").replace(/&#196;/g,"Ä").replace(/&#246;/g,"ö").replace(/&#214;/g,"Ö").replace(/&#252;/g,"ü").replace(/&#220;/g,"Ü").replace(/&#223;/g,"ß").replace(/&#233;/g,"é").replace(/&#232;/g,"è").replace(/&#176;/g,"°").replace(/&#167;/g,"§").replace(/&#174;/g,"®").replace(/&#169;/g,"©").replace(/&#181;/g,"µ")}
/**
 * Converts formatted text to formatted html.
 * @param text The text which contains the formatting placeholders which shall be encoded.
 * @returns The encoded representation of parameter text.
 * @preserve (Part of the public API)
 */function tchmi_text_to_html(text){"string"!=typeof text&&"function"==typeof text.toString&&(text=text.toString());let res=text,eSpacesCount=0;for(let i=res.length-1,ii=0;i>=ii;i--){if(" "!==res[i])break;eSpacesCount++}res=res.substr(0,res.length-eSpacesCount),res=res.replace(/\\s\\s/g," &nbsp;"),res=res.replace(/  /g," &nbsp;"),res=res.replace(/\\t/g,"&nbsp;&nbsp;&nbsp;");let eSpacesParts=[];for(let i=0,ii=eSpacesCount;i<ii;i++)i%2==0?eSpacesParts.push("&nbsp;"):eSpacesParts.push(" ");for(let i=eSpacesParts.length-1,ii=0;i>=ii;i--)res+=eSpacesParts[i];return res=res.replace(/\\r\\n/g,"<br/>"),res=res.replace(/\\n/g,"<br/>"),res}
/**
 * Decode base64 strings
 * Attention: JS strings are UTF16!
 * Consider using this API for UTF8 support:
 * new TcHmi.Base64BinaryReader(input).readString()
 * @param input String to decode
 * @returns Returns the String or null
 * @preserve (Part of the public API)
 */function tchmi_base64decode(input){return"string"!=typeof input&&"function"==typeof input.toString&&(input=input.toString()),window.atob(input)}
/**
 * Encode base64 strings
 * Attention: JS strings are UTF16!
 * Consider using this API for UTF8 support:
 * new TcHmi.Base64BinaryWriter().writeString(input).getEncodedString()
 * @param input String to encode
 * @returns Returns the String or null
 * @preserve (Part of the public API)
 */function tchmi_base64encode(input){return"string"!=typeof input&&"function"==typeof input.toString&&(input=input.toString()),window.btoa(input)}
/**
 * Creates a Guid string.
 * @returns Guid
 * @preserve (Part of the public API)
 */function tchmi_create_guid(){if(window.crypto.randomUUID)return window.crypto.randomUUID();let d=performance.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(c){let r=(d+16*Math.random())%16|0;return d=Math.floor(d/16),("x"===c?r:7&r|8).toString(16)}))}
/**
 * Compares 2 values for equality.
 * @param a Value 1
 * @param b Value 2
 * @param typeSafeOrOptions A boolean or option object to define how the values should be compared.
 * If it is a boolean, a value of false will perform a type unsafe comparison, i.e. 1 == "1", while
 * a value of true will cause the function to only consider the values equal if their types are also equal.
 * @preserve (Part of the public API)
 */function tchmi_equal(a,b,typeSafeOrOptions=!0){if(a===b)return!0;if(null===a||null===b)return!1;let options={convertPrimitives:!1,compareDates:!1};"boolean"==typeof typeSafeOrOptions?options.convertPrimitives=!typeSafeOrOptions:(options.convertPrimitives=typeSafeOrOptions.convertPrimitives??!1,options.compareMaps=typeSafeOrOptions.compareMaps,options.compareSets=typeSafeOrOptions.compareSets,options.compareDates=typeSafeOrOptions.compareDates??!1);let typeA=typeof a,typeB=typeof b;if(typeA!==typeB){if(options.convertPrimitives)switch(typeA){case"boolean":switch(typeB){case"number":return a==b;case"string":return a.toString()===b.toLowerCase()}break;case"number":switch(typeB){case"boolean":return a==b;case"string":return""!==b&&a==b}break;case"string":switch(typeB){case"boolean":return a.toLowerCase()===b.toString();case"number":return""!==a&&a==b}}return!1}if("number"===typeA&&isNaN(a)&&isNaN(b))return!0;if(a instanceof Map&&b instanceof Map&&options.compareMaps){if(a.size!==b.size)return!1;const aIterator=a.entries(),bIterator=b.entries();let aResult=aIterator.next(),bResult=bIterator.next();for(;!aResult.done&&!bResult.done;){const[aKey,aValue]=aResult.value,[bKey,bValue]=bResult.value;if(options.compareMaps.deepCompareKeys){if(!tchmi_equal(aKey,bKey,typeSafeOrOptions))return!1}else if(aKey!==bKey)return!1;if(options.compareMaps.deepCompareValues){if(!tchmi_equal(aValue,bValue,typeSafeOrOptions))return!1}else if(aValue!==bValue)return!1;aResult=aIterator.next(),bResult=bIterator.next()}return!0}if(a instanceof Set&&b instanceof Set&&options.compareSets){if(a.size!==b.size)return!1;const aIterator=a.values(),bIterator=b.values();let aResult=aIterator.next(),bResult=bIterator.next();for(;!aResult.done&&!bResult.done;){if(options.compareSets.deepCompareValues){if(!tchmi_equal(aResult.value,bResult.value,typeSafeOrOptions))return!1}else if(aResult.value!==bResult.value)return!1;aResult=aIterator.next(),bResult=bIterator.next()}return!0}if(a instanceof Date&&b instanceof Date&&options.compareDates)return a.valueOf()===b.valueOf();if("object"!==typeA||__tchmi_is_instanced_object(a)||__tchmi_is_instanced_object(b))return!1;let aIsArray=Array.isArray(a);if(aIsArray!==Array.isArray(b))return!1;if(aIsArray){let length=a.length;if(length!==b.length)return!1;for(let i=0;i<length;i++)if(!tchmi_equal(a[i],b[i],typeSafeOrOptions))return!1;return!0}if(Object.keys(a).length!==Object.keys(b).length)return!1;for(let key in a){if(!b.hasOwnProperty(key))return!1;if(!tchmi_equal(a[key],b[key],typeSafeOrOptions))return!1}return!0}!function(TcHmi){
/**
     * Provides functions for interaction with the server.
     * @preserve (Part of the public API)
     */
class Server{
/**
         * Returns the current readyState value of the underlying websocket which is connected to the server. Returns null when system is not ready.
         * Use constants like WebSocket.CLOSED or WebSocket.OPEN for comparison.
         * If websocket is OPEN handshakes between server and framework may not yet be done and server may not be ready for full functionality.
         * Use isReady function instead.
         * @returns The current readyState value of the underlying websocket which is connected to the server or null.
         * @preserve (Part of the public API)
         * @deprecated Please use isReady function.
         */
static getWebsocketReadyState(){return TcHmi.System.Services.serverManager?TcHmi.System.Services.serverManager.getWebsocketReadyState():null}
/**
         * Returns true if the websocket is ready and false if its not.
         * If websocket is ready handshakes between server and framework may not yet be done and server may not be ready for full functionality.
         * Use isReady function instead.
         * @returns If true the websocket is ready for connectivity.
         * @preserve (Part of the public API)
         * @deprecated Please use isReady function.
         */static isWebsocketReady(){return TcHmi.System.Services.serverManager?.getWebsocketReadyState()===WebSocket.OPEN}
/**
         * Returns true if the server is ready for application communication.
         * Websocket is ready and handshakes are done.
         * @preserve (Part of the public API)
         */static isReady(){return TcHmi.System.Services.serverManager?.isReady()??!1}
/**
         * Returns the framework related api version of the server in the form x.x.x.x and null if the
         * current server version does not support this information yet or the server communication is not yet ready.
         * You can call isReady function to determine if server is ready for communication.
         * You can use the global tchmi_compare_version function to compare the result against a specific version.
         * @preserve (Part of the public API)
         */static getApiVersion(){return TcHmi.System.Services.serverManager?TcHmi.System.Services.serverManager.getApiVersion():null}
/**
         * Write one or more values to a TwinCAT HMI Server symbol.
         * @param symbolNames The target TwinCAT HMI Server symbolname.
         * @param values The value which should be written to the target symbol.
         * @param callback Asynchronous response callback which will be raised if the operation has finished.
         * @returns Request id
         * @template W Type of the write value. Use any (or omit) if this contains multiple different types.
         * @template R Type of the read value. Use any (or omit) if this contains multiple different types.
         * @preserve (Part of the public API)
         */static writeSymbol(symbolNames,values,callback){return Server.writeSymbolEx(symbolNames,values,null,callback)}
/**
         * Write one or more values to a server symbol.
         * @param symbolNames The target server symbol name or list of symbol names
         * @param values The value which should be written to the target symbol.
         * @param requestOptions Options for the request itself
         * @param callback Asynchronous response callback which will be raised if the operation has finished.
         * @returns Request id
         * @template W Type of the write value. Use any (or omit) if this contains multiple different types.
         * @template R Type of the read value. Use any (or omit) if this contains multiple different types.
         * @preserve (Part of the public API)
         */static writeSymbolEx(symbolNames,values,requestOptions,callback){return this.writeSymbolEx2(symbolNames,values,{requestOptions:requestOptions},callback)}
/**
         * Write one or more values to a server symbol.
         * @param symbolNames The target server symbol name or list of symbol names
         * @param values The value which should be written to the target symbol.
         * @param options Options
         * @param options.symbolOptions Options for the symbols
         * @param options.requestOptions Options for the request to the server
         * @param callback Asynchronous response callback which will be raised if the operation has finished.
         * @returns Request id
         * @template W Type of the write value. Use any (or omit) if this contains multiple different types.
         * @template R Type of the read value. Use any (or omit) if this contains multiple different types.
         * @preserve (Part of the public API)
         */static writeSymbolEx2(symbolNames,values,options,callback){if(!TcHmi.System.Services.serverManager)return TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SYSTEM_NOT_READY,details:{code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],domain:"TcHmi.Server"}}),null;let symbolNameArr,symbolValueArr,symbolOptions=options?.symbolOptions??null,requestOptions=options?.requestOptions??null,symbolOptionsArr=null;if(Array.isArray(symbolNames)){if(!Array.isArray(values)||symbolNames.length!==values.length)return TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_PARAMETER_INVALID,details:{code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],reason:"Symbol array length does not match value array length",domain:"TcHmi.Server"}}),null;if(symbolNameArr=symbolNames,symbolValueArr=values,symbolOptions){if(TcHmi.System.isParameterTypeInvalid(symbolOptions,"options.symbolOptions",{type:"object",expectArray:!0,required:"valueNeeded",minArrayLength:symbolNameArr.length},"TcHmi.Server",callback))return null;symbolOptionsArr=symbolOptions}}else if(symbolNameArr=[symbolNames],symbolValueArr=[values],symbolOptions){if(TcHmi.System.isParameterTypeInvalid(symbolOptions,"options.symbolOptions",{type:"object",expectArray:!1,required:"valueNeeded"},"TcHmi.Server",callback))return null;symbolOptionsArr=[symbolOptions]}const callstackLinker=TcHmi.System.Callback.createTask("Server.write>"+(symbolNameArr?.[0]??"unknown")),request={requestType:"ReadWrite",commands:[]};for(let i=0;i<symbolNameArr.length;i++){let strSymbolName=symbolNameArr[i],SymbolValue=symbolValueArr[i];if(TcHmi.System.isParameterTypeInvalid(strSymbolName,"symbolNames",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server",callback))return null;let command={commandOptions:["SendErrorMessage","SendWriteValue"],symbol:strSymbolName,writeValue:SymbolValue};if(symbolOptionsArr){let symbolOptions=symbolOptionsArr[i];symbolOptions&&symbolOptions.version&&(command.version=symbolOptions.version)}request.commands.push(command)}return TcHmi.System.Services.serverManager.requestEx(request,requestOptions,Server.handleResponse({completed:data=>{callstackLinker.run((()=>{TcHmi.Callback.callSafeEx(callback,null,data)}))}}))}
/**
         * Reads the value of one or multiple TwinCAT HMI Server symbol.
         * @param symbolNames The target TwinCAT HMI Server symbolname or list of symbol names
         * @param callback Asynchronous response callback which will be raised if the operation has finished.
         * The callback function gets 'error' (TcHmi.Errors.E_WEBSOCKET_NOT_READY or TcHmi.Errors.NONE) and the response
         * @returns Request id
         * @template W unused because this is a read only
         * @template R Type of the read value.
         * @preserve (Part of the public API)
         */static readSymbol(symbolNames,callback){return Server.readSymbolEx(symbolNames,null,callback)}
/**
         * Reads the value of one or multiple TwinCAT HMI Server symbol.
         * @param symbolNames The target TwinCAT HMI Server symbolname or list of symbol names
         * @param requestOptions Options for the request itself
         * @param callback Asynchronous response callback which will be raised if the operation has finished.
         * The callback function gets 'error' (TcHmi.Errors.E_WEBSOCKET_NOT_READY or TcHmi.Errors.NONE) and the response
         * @returns Request id
         * @template W unused because this is a read only
         * @template R Type of the read value.
         * @preserve (Part of the public API)
         */static readSymbolEx(symbolNames,requestOptions,callback){return this.readSymbolEx2(symbolNames,{requestOptions:requestOptions},callback)}
/**
         * Reads the value of a server symbol
         * @param symbolNames The target symbol name or list of symbol names
         * @param options Options
         * @param options.symbolOptions Options for the symbols
         * @param options.requestOptions Options for the request to the server
         * @param callback Asynchronous response callback which will be raised if the operation has finished.
         * The callback function gets 'error' (TcHmi.Errors.E_WEBSOCKET_NOT_READY or TcHmi.Errors.NONE) and the response
         * @returns Request id
         * @template R Type of the read value.
         * @preserve (Part of the public API)
         */static readSymbolEx2(symbolNames,options,callback){if(!TcHmi.System.Services.serverManager)return TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SYSTEM_NOT_READY,details:{code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],domain:"TcHmi.Server"}}),null;let symbolNameArr,symbolOptions=options?.symbolOptions??null,requestOptions=options?.requestOptions??null,symbolOptionsArr=null;if(Array.isArray(symbolNames)){if(TcHmi.System.isParameterTypeInvalid(symbolNames,"symbolNames",{type:"string",expectArray:!0,required:"valueNeeded",minStringLength:1},"TcHmi.Server",callback))return null;if(symbolNameArr=symbolNames,symbolOptions){if(TcHmi.System.isParameterTypeInvalid(symbolOptions,"options.symbolOptions",{type:"object",expectArray:!0,required:"valueNeeded",minArrayLength:symbolNameArr.length},"TcHmi.Server",callback))return null;symbolOptionsArr=symbolOptions}}else{if(TcHmi.System.isParameterTypeInvalid(symbolNames,"symbolNames",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server",callback))return null;if(symbolNameArr=[symbolNames],symbolOptions){if(TcHmi.System.isParameterTypeInvalid(symbolOptions,"options.symbolOptions",{type:"object",expectArray:!1,required:"valueNeeded"},"TcHmi.Server",callback))return null;symbolOptionsArr=[symbolOptions]}}const callstackLinker=TcHmi.System.Callback.createTask("Server.read>"+(symbolNameArr?.[0]??"unknown")),request={requestType:"ReadWrite",commands:[]};for(let i=0;i<symbolNameArr.length;i++){let command={commandOptions:["SendErrorMessage","SendWriteValue"],symbol:symbolNameArr[i]};if(symbolOptionsArr){let symbolOptions=symbolOptionsArr[i];symbolOptions&&symbolOptions.version&&(command.version=symbolOptions.version)}request.commands.push(command)}return TcHmi.System.Services.serverManager.requestEx(request,requestOptions,Server.handleResponse({completed:data=>{callstackLinker.run((()=>{TcHmi.Callback.callSafeEx(callback,null,data)}))}}))}static resolveSymbolSchema(symbolName,callback){Server.resolveSymbolSchemaEx(symbolName,null,callback)}static resolveSymbolSchemaEx(symbolName,options,callback){const version=options?.version??null,symbolMetaData=TcHmi.System.Data.Caches.serverSymbolMetaDataCache.get(symbolName);if(symbolMetaData){if(!symbolMetaData.ListSymbols?.SCHEMA)return void TcHmi.Callback.callSafeEx(callback,TcHmi.Server,{error:TcHmi.Errors.E_SYMBOL_RESOLVE_SCHEMA,details:{code:TcHmi.Errors.E_SYMBOL_RESOLVE_SCHEMA,message:TcHmi.Errors[TcHmi.Errors.E_SYMBOL_RESOLVE_SCHEMA],domain:"TcHmi.Server"}});let res=TcHmi.System.Type.Schema.Helper.__resolveRawSchema(symbolMetaData.ListSymbols.SCHEMA,null,new Map,version);res.error===TcHmi.Errors.NONE&&res.schema?TcHmi.Callback.callSafeEx(callback,TcHmi.Server,{error:TcHmi.Errors.NONE,schema:tchmi_clone_object(res.schema)}):TcHmi.Callback.callSafeEx(callback,TcHmi.Server,{error:res.error,details:res.details})}else{const{name:baseName,pathTokens:basePathTokens}=TcHmi.System.resolveServerSymbolNameParts(symbolName);let baseSchemaCacheEntry=TcHmi.System.Data.Caches.serverSymbolMetaDataCache.get(baseName);if(baseSchemaCacheEntry){if(!baseSchemaCacheEntry.ListSymbols?.SCHEMA)return void TcHmi.Callback.callSafeEx(callback,TcHmi.Server,{error:TcHmi.Errors.ERROR,details:{code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR]}});if(baseSchemaCacheEntry.error!==TcHmi.Errors.NONE)return void TcHmi.Callback.callSafeEx(callback,TcHmi.Server,{error:baseSchemaCacheEntry.error,details:baseSchemaCacheEntry.details});{let baseSchema=baseSchemaCacheEntry.ListSymbols.SCHEMA;if(baseSchema){let res=TcHmi.System.Type.Schema.Helper.__resolveRawSchema(baseSchema,null,new Map);res.error===TcHmi.Errors.NONE&&res.schema?TcHmi.System.Type.Schema.Helper.__resolveSubSchema(res.schema,basePathTokens,(function(data){data&&data.error===TcHmi.Errors.NONE?TcHmi.Callback.callSafeEx(callback,TcHmi.Server,{error:TcHmi.Errors.NONE,schema:tchmi_clone_object(data.schema)}):TcHmi.Callback.callSafeEx(callback,TcHmi.Server,{error:data.error,details:data.details})})):TcHmi.Callback.callSafeEx(callback,TcHmi.Server,{error:res.error,details:res.details})}}}}}static resolveSymbolMetaData(symbolName,callback){if(!TcHmi.System.Data.Caches.serverSymbolMetaDataCache)return void TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SYSTEM_NOT_READY,details:{code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],domain:"TcHmi.Server"}});let data=TcHmi.System.Data.Caches.serverSymbolMetaDataCache.get(symbolName);data?TcHmi.Callback.callSafeEx(callback,TcHmi.Server,data):TcHmi.Callback.callSafeEx(callback,TcHmi.Server,{error:TcHmi.Errors.E_SYMBOL_RESOLVE_META_DATA,details:{code:TcHmi.Errors.E_SYMBOL_RESOLVE_META_DATA,message:TcHmi.Errors[TcHmi.Errors.E_SYMBOL_RESOLVE_META_DATA],domain:"TcHmi.Server"}})}
/**
         * Requests a message to the hmi server with default connection parameter
         * @param request Request object
         * @param callback Asynchronous response callback which will be raised if the operation has finished.
         * The callback function gets 'error' (TcHmi.Errors.E_WEBSOCKET_NOT_READY or TcHmi.Errors.NONE) and the response
         * @returns Request id
         * @template W Type of the write value. Use any (or omit) if this contains multiple different types.
         * @template R Type of the read value. Use any (or omit) if this contains multiple different types.
         * @preserve (Part of the public API)
         */static request(request,callback){return Server.requestEx(request,null,callback)}
/**
         * Requests a message to the hmi server with given connection parameter
         * @param request Request object
         * @param requestOptions Options for the request itself
         * @param callback Asynchronous response callback which will be raised if the operation has finished.
         * The callback function gets 'error' (TcHmi.Errors.E_WEBSOCKET_NOT_READY or TcHmi.Errors.NONE) and the response
         * @returns Request id
         * @template W Type of the write value. Use any (or omit) if this contains multiple different types.
         * @template R Type of the read value. Use any (or omit) if this contains multiple different types.
         * @preserve (Part of the public API)
         */static requestEx(request,requestOptions,callback){if(!TcHmi.System.Services.serverManager)return TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SYSTEM_NOT_READY,details:{code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],domain:"TcHmi.Server"}}),null;const callstackLinker=TcHmi.System.Callback.createTask("Server.request>"+(request.requestType??"ReadWrite")+">"+(request.commands?.[0].symbol??"unknown"));return TcHmi.System.Services.serverManager.requestEx(request,requestOptions,Server.handleResponse({completed:data=>{callstackLinker.run((()=>{TcHmi.Callback.callSafeEx(callback,null,data)}))}}))}
/**
         * Subscribe to a to a list of commands.
         * Subscription have to be unsubscribed by use of the TcHmi.Server.unsubscribe function.
         * @param commands Command object with the subscription
         * @param interval Subscription refresh interval.
         * @param callback Asynchronous response callback which will be raised if the operation has finished.
         * @returns Request id
         * @template R Type of the read value. Use any (or omit) if this contains multiple different types.
         * @preserve (Part of the public API)
         */static subscribe(commands,interval,callback){return Server.subscribeEx(commands,interval,null,callback)}
/**
         * Subscribe to a to a list of commands.
         * Subscription have to be unsubscribed by use of the TcHmi.Server.unsubscribe function.
         * @param commands Command object with the subscription
         * @param interval Subscription refresh interval.
         * @param requestOptions Options for the request itself
         * @param callback Asynchronous response callback which will be raised if the operation has finished.
         * @returns Request id
         * @template R Type of the read value. Use any (or omit) if this contains multiple different types.
         * @preserve (Part of the public API)
         */static subscribeEx(commands,interval,requestOptions,callback){if(!TcHmi.System.Services.serverManager)return TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SYSTEM_NOT_READY,details:{code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],domain:"TcHmi.Server"}}),null;if(TcHmi.System.isParameterTypeInvalid(commands,"commands",{type:"object",required:"valueNeeded",expectArray:!0},"TcHmi.Server",callback))return null;let request={requestType:"Subscription",commands:commands};if(TcHmi.System.isParameterTypeInvalid(interval,"interval",{type:"number",required:"valueNeeded"},"TcHmi.Server",callback))return null;null!=interval&&(request.intervalTime=interval);const callstackLinker=TcHmi.System.Callback.createTask("Server.subscribe>"+(commands?.[0].symbol??"unknown"));return TcHmi.System.Services.serverManager.requestEx(request,requestOptions,Server.handleResponse({completed:data=>{callstackLinker.run((()=>{TcHmi.Callback.callSafeEx(callback,null,data)}))}}))}
/**
         * Unsubscribe a list of commands.
         * @param requestId The id of the subscription request which shall be unsubscribed.
         * @param callback Asynchronous response callback which will be raised if the operation has finished.
         * @returns Request id
         * @preserve (Part of the public API)
         */static unsubscribe(requestId,callback){return Server.unsubscribeEx(requestId,null,callback)}
/**
         * Unsubscribe a list of commands.
         * @param requestId The id of the subscription request which shall be unsubscribed.
         * @param requestOptions Options for the request itself
         * @param callback Asynchronous response callback which will be raised if the operation has finished.
         * @returns Request id
         * @preserve (Part of the public API)
         */static unsubscribeEx(requestId,requestOptions,callback){let res=null;if(!TcHmi.System.Services.serverManager)return TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SYSTEM_NOT_READY,details:{code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],domain:"TcHmi.Server"}}),null;if(TcHmi.System.isParameterTypeInvalid(requestId,"requestId",{type:"number",required:"valueNeeded"},"TcHmi.Server",callback))return null;let requestEntry=TcHmi.System.Services.serverManager.getRequest(requestId);if(requestEntry){if(TcHmi.System.Services.serverManager.releaseRequest(requestId),!requestEntry.queue||requestEntry.queuePending){const request={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:"Unsubscribe",writeValue:requestId}]};return res=TcHmi.System.Services.serverManager.requestEx(request,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}})),res}return TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE}),null}return TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE}),null}
/**
         * Releases a request and associated resources like callbacks.
         * @param id Id of the request to release.
         * @preserve (Part of the public API)
         */static releaseRequest(id){TcHmi.System.Services.serverManager&&TcHmi.System.Services.serverManager.releaseRequest(id)}
/**
         * Get current username as string (could be __SystemGuest/__SystemUser without auth) or null when unknown (while loading).
         * @preserve (Part of the public API)
         */
static getCurrentUser(){return TcHmi.System.Services.accessManager?TcHmi.System.Services.accessManager.getCurrentUserConfig().name:(TcHmi.Log.error("[Source=Framework, Module=TcHmi.Server] System not ready."),null)}
/**
         * Get groups membership of current user as array (can be empty).
         * @preserve (Part of the public API)
         */static getGroupsOfCurrentUser(){return TcHmi.System.Services.accessManager?tchmi_clone_object(TcHmi.System.Services.accessManager.getCurrentUserConfig().userIsInGroups):(TcHmi.Log.error("[Source=Framework, Module=TcHmi.Server] System not ready."),[])}
/**
         * Get current user config.
         * @preserve (Part of the public API)
         */static getCurrentUserConfig(){return TcHmi.System.Services.accessManager?tchmi_clone_object(TcHmi.System.Services.accessManager.getCurrentUserConfig()):(TcHmi.Log.error("[Source=Framework, Module=TcHmi.Server] System not ready."),{state:0,userIsInGroups:[],name:null,domain:null,locale:void 0,configLocale:"client",timeFormatLocale:void 0,configTimeFormatLocale:"client",timeZone:void 0,timeZoneOffset:0,configTimeZone:void 0,autoLogOffMilliSeconds:null,session:null,clientCertificate:null,clientIp:"",errorMessage:"",defaultAuthExtension:"TcHmiUserManagement",defaultUserGroup:"__SystemUsers"})}
/**
         * Login into a TcHmiServer, reloads the page on success, call of a callback after login.
         * The authentication domain can be specified by using 'Domain::UserName'. If no domain is specified the default auth extension will be used.
         * @param userName String with the username
         * @param password String with the password
         * @param persistent Should the session be valid even after browser restart
         * @param callback This callback is called if the login was sent
         * @returns returns a boolean if the login was called
         * @preserve (Part of the public API)
         */static login(userName,password,persistent=!0,callback){return Server.loginEx(userName,password,persistent,null,callback)}
/**
         * Login into a TcHmiServer, reloads the page on success, call of a callback after login.
         * The authentication domain can be specified by using 'Domain::UserName'. If no domain is specified the default auth extension will be used.
         * @param userName String with the username
         * @param password String with the password
         * @param persistent Should the session be valid even after browser restart
         * @param requestOptions Options for the request itself
         * @param callback This callback is called if the login was sent
         * @returns returns a boolean if the login was called
         * @preserve (Part of the public API)
         */static loginEx(userName,password,persistent=!0,requestOptions,callback){return Server.loginEx2(userName,password,persistent,!0,requestOptions,callback)}
/**
         * Login into a TcHmiServer, reloads the page on success if not deactivated, call of a callback after login.
         * The authentication domain can be specified by using 'Domain::UserName'. If no domain is specified the default auth extension will be used.
         * @param userName String with the username
         * @param password String with the password
         * @param persistent Should the session be valid even after browser restart
         * @param reload Reload hmi after session login.
         * @param requestOptions Options for the request itself
         * @param callback This callback is called if the login was sent
         * @returns returns a boolean if the login was called
         * @preserve (Part of the public API)
         */static loginEx2(userName,password,persistent=!0,reload=!1,requestOptions,callback){let res=!1;return TcHmi.System.Services.serverManager?!TcHmi.System.isParameterTypeInvalid(userName,"userName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server",callback)&&(!TcHmi.System.isParameterTypeInvalid(password,"password",{type:"string",required:"valueNeeded"},"TcHmi.Server",callback)&&(res=TcHmi.System.Services.serverManager.login(userName,password,persistent,reload,requestOptions,callback),res)):(TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SYSTEM_NOT_READY,details:{code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],domain:"TcHmi.Server"}}),!1)}
/**
         * Logout from a TcHmiServer, reloads the page on success
         * @param callback This callback is called after the logout was sent
         * @returns returns a boolean if the logout was called
         * @preserve (Part of the public API)
         */static logout(callback){return Server.logoutEx(null,callback)}
/**
         * Logout from a TcHmiServer, reloads the page on success
         * @param requestOptions Options for the request itself
         * @param callback This callback is called after the logout was sent
         * @returns returns a boolean if the logout was called
         * @preserve (Part of the public API)
         */static logoutEx(requestOptions,callback){return TcHmi.Server.logoutEx2(!0,requestOptions,callback)}
/**
         * Logout from a TcHmiServer, optional reloads the page on success
         * @param reload Reload hmi after session logout
         * @param requestOptions Options for the request itself
         * @param callback This callback is called after the logout was sent
         * @returns returns a boolean if the logout was called
         * @preserve (Part of the public API)
         */static logoutEx2(reload=!0,requestOptions,callback){let res=!1;return TcHmi.System.Services.serverManager?(res=TcHmi.System.Services.serverManager.logout(reload,requestOptions,callback),res):(TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SYSTEM_NOT_READY,details:{code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],domain:"TcHmi.Server"}}),res)}
/**
         * Logout all users with a specific username or all users from a TcHmiServer
         * @param username username to logout.
         * If empty string or null is provided, all users are logged out.
         * The authentication domain can be specified by using 'Domain::UserName'. If no domain is specified all users with the given name will be logged out.
         * 'Domain::' will logout every user from this domain
         * @param callback This callback is called after the request was sent
         * @returns returns a boolean if the logout was called
         * @preserve (Part of the public API)
         */static forceLogout(username,callback){return Server.forceLogoutEx(username,null,callback)}
/**
         * Logout all users with a specific username or all users from a TcHmiServer
         * @param userName username to logout.
         * If empty string or null is provided, all users are logged out.
         * The authentication domain can be specified by using 'Domain::UserName'. If no domain is specified all users with the given name will be logged out.
         * 'Domain::' will logout every user from this domain
         * @param requestOptions Options for the request itself
         * @param callback This callback is called after the request was sent
         * @returns returns a boolean if the logout was called
         * @preserve (Part of the public API)
         */static forceLogoutEx(userName,requestOptions,callback){let res=!1;return TcHmi.System.Services.serverManager?(void 0!==userName&&""!==userName||(userName=null),res=TcHmi.System.Services.serverManager.forceLogout(userName,requestOptions,callback),res):(TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SYSTEM_NOT_READY,details:{code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],domain:"TcHmi.Server"}}),!1)}static handleResponse(args){return data=>{if(data.error!==TcHmi.Errors.NONE)return TcHmi.Callback.callSafeEx(args.error,null,data),void TcHmi.Callback.callSafeEx(args.completed,null,data);let response=data.response,responseCommandIndices=data.responseCommandIndices;if(data.results){let hasCommandError=!1;for(let result of data.results)result.error!==TcHmi.Errors.NONE&&(hasCommandError=!0);hasCommandError?TcHmi.Callback.callSafeEx(args.error,null,data):TcHmi.Callback.callSafeEx(args.success,null,data),TcHmi.Callback.callSafeEx(args.completed,null,data)}else{if(!response)return TcHmi.Callback.callSafeEx(args.error,null,{error:TcHmi.Errors.E_SERVER_RESPONSE_MISSING,details:{code:TcHmi.Errors.E_SERVER_RESPONSE_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_RESPONSE_MISSING],reason:"Missing response from server.",domain:"TcHmi.Server"}}),void TcHmi.Callback.callSafeEx(args.completed,null,{error:TcHmi.Errors.E_SERVER_RESPONSE_MISSING,details:{code:TcHmi.Errors.E_SERVER_RESPONSE_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_RESPONSE_MISSING],reason:"Missing response from server.",domain:"TcHmi.Server"}});if(response.error){const res={error:TcHmi.Errors.E_SERVER_RESPONSE_ERROR,details:{code:TcHmi.Errors.E_SERVER_RESPONSE_ERROR,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_RESPONSE_ERROR],reason:"Error in response from server with id: "+response.id,domain:"TcHmi.Server",errors:[response.error]}};return void 0!==response&&(res.response=response),void 0!==responseCommandIndices&&(res.responseCommandIndices=responseCommandIndices),TcHmi.Callback.callSafeEx(args.error,null,res),void TcHmi.Callback.callSafeEx(args.completed,null,res)}let commands=response.commands;if(!commands||0===commands.length){const res={error:TcHmi.Errors.E_SERVER_COMMANDS_MISSING,details:{code:TcHmi.Errors.E_SERVER_COMMANDS_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_COMMANDS_MISSING],reason:"Missing commands in response from server with id: "+response.id,domain:"TcHmi.Server"}};return void 0!==response&&(res.response=response),void 0!==responseCommandIndices&&(res.responseCommandIndices=responseCommandIndices),TcHmi.Callback.callSafeEx(args.error,null,res),void TcHmi.Callback.callSafeEx(args.completed,null,res)}let hasCommandError=!1,commandErrors=[];data.results=[];for(const[index,command]of commands.entries())if(!data.responseCommandIndices||data.responseCommandIndices.includes(index))if(command.error){hasCommandError=!0,commandErrors.push({code:TcHmi.Errors.E_SERVER_COMMAND_ERROR,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_COMMAND_ERROR],reason:'Error in command for symbol: "'+command.symbol+'" in response from server with id: '+response.id,domain:"TcHmi.Server",errors:[command.error]});const res={error:TcHmi.Errors.E_SERVER_COMMAND_ERROR,details:{code:TcHmi.Errors.E_SERVER_COMMAND_ERROR,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_COMMAND_ERROR],reason:'Error in command for symbol: "'+command.symbol+'" in response from server with id: '+response.id,domain:"TcHmi.Server",errors:[command.error]},symbol:command.symbol};void 0!==data.response&&(res.response=data.response),void 0!==data.responseCommandIndices&&(res.responseCommandIndices=data.responseCommandIndices),data.results.push(res)}else{const res={error:TcHmi.Errors.NONE,symbol:command.symbol,value:command.readValue};void 0!==data.response&&(res.response=data.response),void 0!==data.responseCommandIndices&&(res.responseCommandIndices=data.responseCommandIndices),data.results.push(res)}hasCommandError?TcHmi.Callback.callSafeEx(args.error,null,data):TcHmi.Callback.callSafeEx(args.success,null,data),TcHmi.Callback.callSafeEx(args.completed,null,data)}}}}TcHmi.Server=Server,function(Server){var _a,_RecipeManagement_fetchAllRecipeTypes;let Error,ACCESS;!function(Error){Error[Error.HMI_SUCCESS=0]="HMI_SUCCESS",Error[Error.HMI_E_FAIL=257]="HMI_E_FAIL",Error[Error.HMI_E_SYMBOL_IN_USE=274]="HMI_E_SYMBOL_IN_USE",Error[Error.HMI_E_SYMBOL_NOT_MAPPED=513]="HMI_E_SYMBOL_NOT_MAPPED",Error[Error.HMI_E_LICENSE_TARGET=778]="HMI_E_LICENSE_TARGET",Error[Error.HMI_E_MISSING_LICENSE_HANDSHAKE=781]="HMI_E_MISSING_LICENSE_HANDSHAKE",Error[Error.HMI_E_LICENSE_VERIFY=782]="HMI_E_LICENSE_VERIFY",Error[Error.HMI_E_PASSWORD_CHANGE_REQUIRED=4096]="HMI_E_PASSWORD_CHANGE_REQUIRED",Error[Error.HMI_E_INSUFFICIENT_ACCESS=4101]="HMI_E_INSUFFICIENT_ACCESS"}(Error=Server.Error||(Server.Error={})),function(ACCESS){ACCESS[ACCESS.NONE=0]="NONE",ACCESS[ACCESS.READ=1]="READ",ACCESS[ACCESS.WRITE=2]="WRITE",ACCESS[ACCESS.READWRITE=3]="READWRITE"}(ACCESS=Server.ACCESS||(Server.ACCESS={}));Server.UserManagement=class{
/**
             * Add a new user with a given password
             * @param userName Username to add.
             * @param password Password for the new user.
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */
static addUser(userName,password,callback=null){return this.addUserEx(userName,password,null,null,callback)}
/**
             * Add a new user with a given password
             * @param userName Username to add.
             * @param password Password for the new user.
             * @param options Optional details for this new user.
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static addUserEx(userName,password,options=null,requestOptions=null,callback=null){let paramInvalid=TcHmi.System.isParameterTypeInvalid(userName,"userName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.UserManagement",callback);if(paramInvalid)return paramInvalid;if(paramInvalid=TcHmi.System.isParameterTypeInvalid(password,"password",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.UserManagement",callback),paramInvalid)return paramInvalid;if(!TcHmi.System.Services.accessManager){const errorDetail={code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],reason:"Unable to add user. System not ready.",domain:"TcHmi.Server"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}const writeValue={domain:TcHmi.System.Services.accessManager.getCurrentUserConfig().defaultAuthExtension,userName:userName,parameters:{password:password},settings:{}};if(options){let paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.UserManagement",callback);if(paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(writeValue.domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.enabled,"options.enabled",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.UserManagement",callback),paramInvalid)return paramInvalid;if("boolean"==typeof options.enabled&&(writeValue.parameters.enabled=options.enabled),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.locale,"options.locale",{type:"string",required:"undefinedOk"},"TcHmi.Server.UserManagement",callback),paramInvalid)return paramInvalid;if(("string"==typeof options.locale&&options.locale.length>0||null===options.locale)&&(writeValue.settings.locale=options.locale),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.timeFormatLocale,"options.timeFormatLocale",{type:"string",required:"undefinedOk"},"TcHmi.Server.UserManagement",callback),paramInvalid)return paramInvalid;if(("string"==typeof options.timeFormatLocale&&options.timeFormatLocale.length>0||null===options.timeFormatLocale)&&(writeValue.settings.timeFormatLocale=options.timeFormatLocale),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.timeZone,"options.timeFormatLocale",{type:"string",required:"undefinedOk"},"TcHmi.Server.UserManagement",callback),paramInvalid)return paramInvalid;if(("string"==typeof options.timeZone&&options.timeZone.length>0||null===options.timeZone)&&(writeValue.settings.timeZone=options.timeZone),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.autoLogout,"options.autoLogout",{type:"string",required:"undefinedOk"},"TcHmi.Server.UserManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.autoLogout&&options.autoLogout.length>0&&(writeValue.settings.autoLogoff=options.autoLogout),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.groups,"options.groups",{type:"string",expectArray:!0,required:"undefinedOk"},"TcHmi.Server.UserManagement",callback),paramInvalid)return paramInvalid;options.groups&&(writeValue.settings.groups=options.groups)}const request={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:"AddOrChangeUser",writeValue:writeValue}]};if(null===Server.requestEx(request,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.UserManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Lists all usernames as a string array
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static listUsernames(callback=null){return this.listUsernamesEx(null,null,callback)}
/**
             * Lists all usernames as a string array
             * @param options Options
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static listUsernamesEx(options,requestOptions=null,callback=null){if(!TcHmi.System.Services.accessManager){const errorDetail={code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],reason:"Unable to list usernames. System not ready.",domain:"TcHmi.Server"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}let domain=TcHmi.System.Services.accessManager.getCurrentUserConfig().defaultAuthExtension;if(options){let paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.UserManagement",callback);if(paramInvalid)return paramInvalid;"string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain)}if(null===Server.requestEx({requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:"ListUserNames"}]},requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:data=>{if(data.results[0].value){let userList=[],isDefaultAuthExtension=domain===TcHmi.System.Services.accessManager.getCurrentUserConfig().defaultAuthExtension;for(const user of data.results[0].value){let userAndDomain=user.split("::");isDefaultAuthExtension&&1===userAndDomain.length?userList.push(userAndDomain[0]):isDefaultAuthExtension||2!==userAndDomain.length||userAndDomain[0]!==domain||userList.push(userAndDomain[1])}TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,userList:userList})}else TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,userList:void 0})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.UserManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Lists all username as a dictionary with all meta data
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static listUsers(callback=null){return this.listUsersEx(null,null,callback)}
/**
             * Lists all username as a dictionary with all meta data
             * @param options Options
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static listUsersEx(options,requestOptions=null,callback=null){if(!TcHmi.System.Services.accessManager){const errorDetail={code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],reason:"Unable to list users. System not ready.",domain:"TcHmi.Server"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}let domain=TcHmi.System.Services.accessManager.getCurrentUserConfig().defaultAuthExtension;if(options){let paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.UserManagement",callback);if(paramInvalid)return paramInvalid;"string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain)}const request={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:"TcHmiSrv.Config::USERGROUPUSERS::"+domain},{commandOptions:["SendErrorMessage"],symbol:domain+".ListDisabledUsers"}]};if(null===Server.requestEx(request,requestOptions,Server.handleResponse({completed:data=>{if(data.error!==TcHmi.Errors.NONE||!data.response)return void TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details});let result={},disabledUsers=data.response.commands.find((x=>x.symbol===domain+".ListDisabledUsers"))?.readValue??[],userConfigListCommand=data.response.commands.find((x=>x.symbol==="TcHmiSrv.Config::USERGROUPUSERS::"+domain));if(!userConfigListCommand||userConfigListCommand.error)return void TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SERVER_COMMAND_ERROR,details:{code:TcHmi.Errors.E_SERVER_COMMAND_ERROR,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_COMMAND_ERROR],reason:'Error in command for symbol: "TcHmiSrv.Config::USERGROUPUSERS::'+domain+'" in response from server with id: '+data.response.id,domain:"TcHmi.Server",errors:userConfigListCommand?.error?[userConfigListCommand.error]:void 0}});let userConfigList=userConfigListCommand.readValue;for(let userName in userConfigList)result[userName]={domain:domain,enabled:!disabledUsers.includes(userName),autoLogout:userConfigList[userName].USERGROUPUSERS_AUTO_LOGOFF,locale:userConfigList[userName].USERGROUPUSERS_LOCALE,timeFormatLocale:userConfigList[userName].USERGROUPUSERS_TIMEFORMATLOCALE,timeZone:userConfigList[userName].USERGROUPUSERS_TIMEZONE,groups:userConfigList[userName].USERGROUPUSERS_GROUPS};TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,userDetails:result})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.UserManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Lists all user groups as a dictionary with all meta data
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static listUserGroups(callback=null){return this.listUserGroupsEx(null,null,callback)}
/**
             * Lists all user groups as a dictionary with all meta data
             * @param _options (not used till now)
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static listUserGroupsEx(_options,requestOptions=null,callback=null){if(null===Server.requestEx({requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:"TcHmiSrv.Config::USERGROUPS"}]},requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:data=>{let result={},groupList=data.results[0].value;for(let groupName in groupList)result[groupName]={enabled:groupList[groupName].ENABLED,fileAccess:groupList[groupName].FILEACCESS,files:groupList[groupName].FILES,symbolAccess:groupList[groupName].SYMBOLACCESS,symbols:groupList[groupName].SYMBOLS};TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,groupDetailsList:result})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.UserManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Lists all users of a group as a string array
             * @param groupName group name to check
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static listUsersInGroup(groupName,callback=null){return this.listUsersInGroupEx(groupName,null,null,callback)}
/**
             * Lists all users of a group as a string array
             * @param groupName group name to check
             * @param options Options
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static listUsersInGroupEx(groupName,options,requestOptions=null,callback=null){let paramInvalid=TcHmi.System.isParameterTypeInvalid(groupName,"groupName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.UserManagement",callback);if(paramInvalid)return paramInvalid;if(!TcHmi.System.Services.accessManager){const errorDetail={code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],reason:"Unable to list users in group. System not ready.",domain:"TcHmi.Server"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}let domain=TcHmi.System.Services.accessManager.getCurrentUserConfig().defaultAuthExtension;if(options){let paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.UserManagement",callback);if(paramInvalid)return paramInvalid;"string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain)}const request={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:"TcHmiSrv.Config::USERGROUPS"},{commandOptions:["SendErrorMessage"],symbol:"TcHmiSrv.Config::USERGROUPUSERS::"+domain}]};if(null===Server.requestEx(request,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results.filter((data=>data.error!==TcHmi.Errors.NONE))[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:data=>{const groupList=data.results[0].value;if(groupName in groupList){let result=data.response.commands[1].readValue,userList=[];for(let userName in result)result[userName].USERGROUPUSERS_GROUPS&&result[userName].USERGROUPUSERS_GROUPS.includes(groupName)&&userList.push(userName);TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,userList:userList})}else TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_KEY_NOT_FOUND,details:{code:TcHmi.Errors.E_KEY_NOT_FOUND,reason:"Requested user group not found",domain:"TcHmi.Server.UserManagement"}})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.UserManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Removes a user
             * @param userName user name to remove
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static removeUser(userName,callback=null){return this.removeUserEx(userName,null,null,callback)}
/**
             * Removes a user
             * @param userName user name to remove
             * @param options Options
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static removeUserEx(userName,options,requestOptions=null,callback=null){let paramInvalid=TcHmi.System.isParameterTypeInvalid(userName,"userName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.UserManagement",callback);if(paramInvalid)return paramInvalid;if(!TcHmi.System.Services.accessManager){const errorDetail={code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],reason:"Unable to remove user. System not ready.",domain:"TcHmi.Server"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}let domain=TcHmi.System.Services.accessManager.getCurrentUserConfig().defaultAuthExtension;if(options){let paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.UserManagement",callback);if(paramInvalid)return paramInvalid;"string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain)}const request={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:"RemoveUser",writeValue:{userName:userName,domain:domain}}]};if(null===Server.requestEx(request,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.UserManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Update user config
             * @param userName Username to update.
             * @param options Details for this user.
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static updateUser(userName,options,callback=null){return this.updateUserEx(userName,options,null,callback)}
/**
             * Update user config
             * @param userName Username to update.
             * @param options Details for this user.
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static updateUserEx(userName,options,requestOptions=null,callback=null){let paramInvalid=TcHmi.System.isParameterTypeInvalid(userName,"userName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.UserManagement",callback);if(paramInvalid)return paramInvalid;if(paramInvalid=TcHmi.System.isParameterTypeInvalid(options,"options",{type:"object",required:"valueNeeded"},"TcHmi.Server.UserManagement",callback),paramInvalid)return paramInvalid;if(!TcHmi.System.Services.accessManager){const errorDetail={code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],reason:"Unable to update user. System not ready.",domain:"TcHmi.Server"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}let domain=TcHmi.System.Services.accessManager.getCurrentUserConfig().defaultAuthExtension;if(paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.UserManagement",callback),paramInvalid)return paramInvalid;options&&"string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain);const canWrite=function(access){if(void 0===access)throw new globalThis.Error("Internal Error: This symbol access was not requested. Please adjust request.");return access===ACCESS.READWRITE||access===ACCESS.WRITE};if(null!==TcHmi.Server.requestEx({requestType:"ReadWrite",commands:[{commandOptions:["SendWriteValue"],symbol:"GetSymbolAccess",writeValue:"AddOrChangeUser"},{commandOptions:["SendWriteValue"],symbol:"GetSymbolAccess",writeValue:domain+".EnableUser"},{commandOptions:["SendWriteValue"],symbol:"GetSymbolAccess",writeValue:domain+".DisableUser"},{commandOptions:["SendWriteValue"],symbol:"GetSymbolAccess",writeValue:domain+".RenameUser"}]},{},(data=>{if(data.error||!data.response){const errorDetail={code:TcHmi.Errors.E_SERVER_RESPONSE_ERROR,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_RESPONSE_ERROR],domain:"TcHmi.Server.UserManagement",errors:data.details?[data.details]:void 0};return void TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail})}let AddOrChangeUserAccessCommand=data.response.commands.find((value=>"AddOrChangeUser"===value.writeValue));if(canWrite(AddOrChangeUserAccessCommand.readValue)){const settings={},writeValue={domain:domain,userName:userName,settings:settings},request={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:"AddOrChangeUser",writeValue:writeValue}]};if(options){if(options.currentPassword&&TcHmi.Log.warn("[Source=Framework, Module=TcHmi.Server.UserManagement.updateUser] The current user has access to server symbol AddOrChangeUser thus the given current password will be ignored by the server."),TcHmi.System.isParameterTypeInvalid(options.password,"options.password",{type:"string",required:"undefinedOk"},"TcHmi.Server.UserManagement",callback))return;if("string"==typeof options.password)writeValue.parameters={password:options.password,enabled:options.enabled??void 0};else if("boolean"==typeof options.enabled){const EnOrDisableCommandName=options.enabled?"EnableUser":"DisableUser";let EnOrDisableUserAccessCommand=data.response.commands.find((value=>value.writeValue===domain+"."+EnOrDisableCommandName));if(!canWrite(EnOrDisableUserAccessCommand.readValue)){const errorDetail={code:TcHmi.Errors.E_NOT_ALLOWED,message:TcHmi.Errors[TcHmi.Errors.E_NOT_ALLOWED],reason:"Missing access rights to "+(options.enabled?"enable ":"disable ")+userName+" ("+domain+"."+EnOrDisableCommandName+")",domain:"TcHmi.Server.UserManagement"};return void TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail})}request.commands.push({commandOptions:["SendErrorMessage"],symbol:domain+"."+EnOrDisableCommandName,writeValue:userName})}if(TcHmi.System.isParameterTypeInvalid(options.autoLogout,"options.autoLogout",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.UserManagement",callback))return;if("string"==typeof options.autoLogout&&(settings.autoLogoff=options.autoLogout),TcHmi.System.isParameterTypeInvalid(options.locale,"options.locale",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.UserManagement",callback))return;if(("string"==typeof options.locale&&options.locale.length>0||null===options.locale)&&(settings.locale=options.locale),TcHmi.System.isParameterTypeInvalid(options.timeFormatLocale,"options.timeFormatLocale",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.UserManagement",callback))return;if(("string"==typeof options.timeFormatLocale&&options.timeFormatLocale.length>0||null===options.timeFormatLocale)&&(settings.timeFormatLocale=options.timeFormatLocale),TcHmi.System.isParameterTypeInvalid(options.timeZone,"options.timeZone",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.UserManagement",callback))return;if(("string"==typeof options.timeZone&&options.timeZone.length>0||null===options.timeZone)&&(settings.timeZone=options.timeZone),TcHmi.System.isParameterTypeInvalid(options.newName,"options.newName",{type:"string",required:"fullOptional",minStringLength:1},"TcHmi.Server.UserManagement",callback))return;if(options.newName&&options.newName===userName);else if("string"==typeof options.newName&&options.newName.length>0){let RenameUserAccessCommand=data.response.commands.find((value=>value.writeValue===domain+".RenameUser"));if(!canWrite(RenameUserAccessCommand.readValue)){const errorDetail={code:TcHmi.Errors.E_NOT_ALLOWED,message:TcHmi.Errors[TcHmi.Errors.E_NOT_ALLOWED],reason:"Missing access rights for renaming "+userName+" ("+domain+".RenameUser)",domain:"TcHmi.Server.UserManagement"};return void TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail})}request.commands.push({commandOptions:["SendErrorMessage"],symbol:domain+".RenameUser",writeValue:{currentUserName:userName,newUserName:options.newName}})}writeValue.parameters&&0===Object.keys(writeValue.parameters).length&&delete writeValue.parameters,writeValue.settings&&0===Object.keys(writeValue.settings).length&&delete writeValue.settings;const rId=Server.requestEx(request,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){for(const res of data.results)if(res.error)return void TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details});TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.ERROR})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:data=>{let AddOrChangeUserCommandResult=data.results.find((value=>"AddOrChangeUser"===value.symbol)),newGroups=tchmi_clone_object(AddOrChangeUserCommandResult.value?.settings?.groups)??[];if(!TcHmi.System.isParameterTypeInvalid(options.addGroups,"options.addGroups",{type:"string",required:"undefinedOk",minStringLength:1,expectArray:!0},"TcHmi.Server.UserManagement",callback)&&(Array.isArray(options.addGroups)&&options.addGroups.forEach((newGroup=>{newGroups.includes(newGroup)||newGroups.push(newGroup)})),!TcHmi.System.isParameterTypeInvalid(options.removeGroups,"options.removeGroups",{type:"string",required:"undefinedOk",minStringLength:1,expectArray:!0},"TcHmi.Server.UserManagement",callback)))if(Array.isArray(options.removeGroups)&&options.removeGroups.forEach((deleteGroup=>{let deleteIndex=newGroups.indexOf(deleteGroup);-1!==deleteIndex&&newGroups.splice(deleteIndex,1)})),tchmi_equal(tchmi_clone_object(newGroups).sort(),tchmi_clone_object(AddOrChangeUserCommandResult.value?.settings?.groups??[]).sort()))TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE});else{const request={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:"AddOrChangeUser",writeValue:{domain:domain,userName:userName,settings:{groups:newGroups}}}]};"string"==typeof options.newName&&options.newName.length>0&&options.newName!==userName&&(request.commands[0].writeValue.userName=options.newName),Server.requestEx(request,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){for(const res of data.results)if(res.error)return void TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details});TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.ERROR})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))}}}));if(null===rId){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.UserManagement"};TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail})}}}else{if(userName!==TcHmi.Server.getCurrentUser()){const errorDetail={code:TcHmi.Errors.E_NOT_ALLOWED,message:TcHmi.Errors[TcHmi.Errors.E_NOT_ALLOWED],reason:"Missing access rights for changing user data of another user ("+domain+".AddOrChangeUser)",domain:"TcHmi.Server.UserManagement"};return void TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail})}if(options){if(options.newName&&options.newName!==TcHmi.Server.getCurrentUser()){const errorDetail={code:TcHmi.Errors.E_NOT_ALLOWED,message:TcHmi.Errors[TcHmi.Errors.E_NOT_ALLOWED],reason:`Missing access rights for renaming ${userName} (${domain}.RenameUser)`,domain:"TcHmi.Server.UserManagement"};return void TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail})}if(options.addGroups?.length){const errorDetail={code:TcHmi.Errors.E_NOT_ALLOWED,message:TcHmi.Errors[TcHmi.Errors.E_NOT_ALLOWED],reason:"Missing access rights for adding groups of "+userName+" ("+domain+".AddOrChangeUser)",domain:"TcHmi.Server.UserManagement"};return void TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail})}if(options.removeGroups?.length){const errorDetail={code:TcHmi.Errors.E_NOT_ALLOWED,message:TcHmi.Errors[TcHmi.Errors.E_NOT_ALLOWED],reason:"Missing access rights for removing groups of "+userName+" ("+domain+".AddOrChangeUser)",domain:"TcHmi.Server.UserManagement"};return void TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail})}if(!1===options.enabled){const errorDetail={code:TcHmi.Errors.E_NOT_ALLOWED,message:TcHmi.Errors[TcHmi.Errors.E_NOT_ALLOWED],reason:"Missing access rights to disable yourself",domain:"TcHmi.Server.UserManagement"};return void TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail})}if(options.autoLogout&&TcHmi.System.autoLogoffToMilliseconds(options.autoLogout)!==TcHmi.Server.getCurrentUserConfig().autoLogOffMilliSeconds){const errorDetail={code:TcHmi.Errors.E_NOT_ALLOWED,message:TcHmi.Errors[TcHmi.Errors.E_NOT_ALLOWED],reason:"Missing access rights for changing auto logout of "+userName+" ("+domain+".AddOrChangeUser)",domain:"TcHmi.Server.UserManagement"};return void TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail})}const writeValue={},request={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:"ChangeUserSettings",writeValue:writeValue}]};if(TcHmi.System.isParameterTypeInvalid(options.locale,"options.locale",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.UserManagement",callback))return;if(("string"==typeof options.locale&&options.locale.length>0||null===options.locale)&&(writeValue.locale=options.locale),TcHmi.System.isParameterTypeInvalid(options.timeFormatLocale,"options.locale",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.UserManagement",callback))return;if(("string"==typeof options.timeFormatLocale&&options.timeFormatLocale.length>0||null===options.timeFormatLocale)&&(writeValue.timeFormatLocale=options.timeFormatLocale),TcHmi.System.isParameterTypeInvalid(options.timeZone,"options.timeZone",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.UserManagement",callback))return;if(("string"==typeof options.timeZone&&options.timeZone.length>0||null===options.timeZone)&&(writeValue.timeZone=options.timeZone),TcHmi.System.isParameterTypeInvalid(options.password,"options.password",{type:"string",required:"undefinedOk"},"TcHmi.Server.UserManagement",callback))return;if("string"==typeof options.password){if(TcHmi.System.isParameterTypeInvalid(options.currentPassword,"options.currentPassword",{type:"string",required:"valueNeeded"},"TcHmi.Server.UserManagment",callback))return;writeValue.changePassword={currentPassword:options.currentPassword,newPassword:options.password}}if(Object.keys(writeValue).length){const rId=Server.requestEx(request,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){for(const res of data.results)if(res.error)return void TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details});TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.ERROR})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}));if(null===rId){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.UserManagement"};TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail})}}else TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}})))return{code:TcHmi.Errors.NONE};{const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.UserManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}}
/**
             * Check access rights for usermanagement functions
             * @param options Option for setting usermanagement domain
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static getApiAccess(options,callback=null){if(!TcHmi.System.Services.accessManager){const errorDetail={code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],reason:"Unable to check api access. System not ready.",domain:"TcHmi.Server"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}let domain=TcHmi.System.Services.accessManager.getCurrentUserConfig().defaultAuthExtension;if(options){let paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.UserManagement",callback);if(paramInvalid)return paramInvalid;"string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain)}const symbolToCheck={};symbolToCheck.AddOrChangeUser=TcHmi.Server.ACCESS.NONE,symbolToCheck.ListUserNames=TcHmi.Server.ACCESS.NONE,symbolToCheck.RemoveUser=TcHmi.Server.ACCESS.NONE,symbolToCheck.ChangeUserSettings=TcHmi.Server.ACCESS.NONE,symbolToCheck["TcHmiSrv.Config"]=TcHmi.Server.ACCESS.NONE,symbolToCheck[domain+".EnableUser"]=TcHmi.Server.ACCESS.NONE,symbolToCheck[domain+".DisableUser"]=TcHmi.Server.ACCESS.NONE,symbolToCheck[domain+".RenameUser"]=TcHmi.Server.ACCESS.NONE,symbolToCheck[domain+".AddUser"]=TcHmi.Server.ACCESS.NONE,symbolToCheck[domain+".RemoveUser"]=TcHmi.Server.ACCESS.NONE,symbolToCheck[domain+".ChangePassword"]=TcHmi.Server.ACCESS.NONE;let commands=[];for(let symbolName of Object.keys(symbolToCheck))commands.push({commandOptions:["SendWriteValue","SendErrorMessage"],symbol:"GetSymbolAccess",writeValue:symbolName});commands.push({commandOptions:["SendErrorMessage"],symbol:"TcHmiSrv.Config::USERGROUPUSERS::"+domain});if(null!==TcHmi.Server.requestEx({requestType:"ReadWrite",commands:commands},{},(data=>{if(data.error||!data.response?.commands){const errorDetail={code:TcHmi.Errors.E_SERVER_RESPONSE_ERROR,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_RESPONSE_ERROR],domain:"TcHmi.Server.UserManagement",errors:data.details?[data.details]:void 0};return void TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail})}for(let symbolName of Object.keys(symbolToCheck))symbolToCheck[symbolName]=data.response.commands.find((value=>value.writeValue===symbolName)).readValue;let usergroupUsers=null!==data.response.commands.find((command=>command.symbol==="TcHmiSrv.Config::USERGROUPUSERS::"+domain))?.readValue;const canRead=function(access){if(void 0===access)throw new globalThis.Error("Internal Error: This symbol access was not requested. Please adjust request.");return access===ACCESS.READWRITE||access===ACCESS.READ},canWrite=function(access){if(void 0===access)throw new globalThis.Error("Internal Error: This symbol access was not requested. Please adjust request.");return access===ACCESS.READWRITE||access===ACCESS.WRITE};TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,result:{addUser:{general:null!==symbolToCheck[domain+".AddUser"]&&canWrite(symbolToCheck.AddOrChangeUser),enable:null!==symbolToCheck[domain+".AddUser"]&&canWrite(symbolToCheck.AddOrChangeUser),locale:null!==symbolToCheck[domain+".AddUser"]&&canWrite(symbolToCheck.AddOrChangeUser),timeFormatLocale:null!==symbolToCheck[domain+".AddUser"]&&canWrite(symbolToCheck.AddOrChangeUser),timeZone:null!==symbolToCheck[domain+".AddUser"]&&canWrite(symbolToCheck.AddOrChangeUser),autoLogoff:null!==symbolToCheck[domain+".AddUser"]&&canWrite(symbolToCheck.AddOrChangeUser),groups:null!==symbolToCheck[domain+".AddUser"]&&canWrite(symbolToCheck.AddOrChangeUser)},listUserNames:{general:canRead(symbolToCheck.ListUserNames)},listUsers:{general:usergroupUsers&&canRead(symbolToCheck["TcHmiSrv.Config"]),enabled:usergroupUsers&&canRead(symbolToCheck["TcHmiSrv.Config"]),locale:usergroupUsers&&canRead(symbolToCheck["TcHmiSrv.Config"]),timeFormatLocale:usergroupUsers&&canRead(symbolToCheck["TcHmiSrv.Config"]),timeZone:usergroupUsers&&canRead(symbolToCheck["TcHmiSrv.Config"]),autoLogoff:usergroupUsers&&canRead(symbolToCheck["TcHmiSrv.Config"]),groups:usergroupUsers&&canRead(symbolToCheck["TcHmiSrv.Config"])},listUserGroups:{general:canRead(symbolToCheck["TcHmiSrv.Config"]),enabled:canRead(symbolToCheck["TcHmiSrv.Config"]),fileAccess:canRead(symbolToCheck["TcHmiSrv.Config"]),files:canRead(symbolToCheck["TcHmiSrv.Config"]),symbolAccess:canRead(symbolToCheck["TcHmiSrv.Config"]),symbols:canRead(symbolToCheck["TcHmiSrv.Config"])},listUsersInGroup:{general:usergroupUsers&&canRead(symbolToCheck["TcHmiSrv.Config"])},removeUser:{general:null!==symbolToCheck[domain+".RemoveUser"]&&canWrite(symbolToCheck.RemoveUser)},updateUser:{general:canWrite(symbolToCheck.ChangeUserSettings)||canWrite(symbolToCheck.AddOrChangeUser),newName:canWrite(symbolToCheck.AddOrChangeUser)&&canWrite(symbolToCheck[domain+".RenameUser"]),addGroups:canWrite(symbolToCheck.AddOrChangeUser),removeGroups:canWrite(symbolToCheck.AddOrChangeUser),enabled:canWrite(symbolToCheck.AddOrChangeUser)&&canWrite(symbolToCheck[domain+".EnableUser"])&&canWrite(symbolToCheck[domain+".DisableUser"]),autoLogout:canWrite(symbolToCheck.AddOrChangeUser),locale:canWrite(symbolToCheck.ChangeUserSettings)||canWrite(symbolToCheck.AddOrChangeUser),timeFormatLocale:canWrite(symbolToCheck.ChangeUserSettings)||canWrite(symbolToCheck.AddOrChangeUser),timeZone:canWrite(symbolToCheck.ChangeUserSettings)||canWrite(symbolToCheck.AddOrChangeUser),changeOwnPassword:null!==symbolToCheck[domain+".ChangePassword"]&&(canWrite(symbolToCheck.ChangeUserSettings)||canWrite(symbolToCheck.AddOrChangeUser)),changePassword:null!==symbolToCheck[domain+".AddUser"]&&canWrite(symbolToCheck.AddOrChangeUser)}}})})))return{code:TcHmi.Errors.NONE};{const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.UserManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}}};class RecipeManagement{
/**
             * Lists all available recipe types
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */
static listRecipeTypes(callback=null){return this.listRecipeTypesEx(null,null,callback)}
/**
             * Lists all available recipe types
             * This function provides more options to manipulate the request
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static listRecipeTypesEx(options,requestOptions=null,callback=null){let domain="TcHmiRecipeManagement",path="";if(options){let paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.path,"options.path",{type:"string",required:"fullOptional"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.path&&options.path.length>0&&(path="::"+options.path),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeTypeList"+path}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,TcHmi.Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:data=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:data.results[0].value})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Watches a list of all available recipe types
             * @param options Options for the watch
             * @param callback Callback which is called once and on every change
             * @preserve (Part of the public API)
             */static watchRecipeTypesList(options,callback=null){let domain="TcHmiRecipeManagement";if(options){let paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return function(){};if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return function(){}}let destroy,recipeSymbol=new TcHmi.Symbol(`%s%${domain}.Config::recipeTypeList${options?.parallel?"|Parallel=True":""}%/s%`);return destroy=recipeSymbol.watchEx(null,(function(data){destroy||(destroy=data.destroy),data.error===TcHmi.Errors.NONE?TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:data.value,destroy:destroy}):TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:{code:data.error,message:TcHmi.Errors[data.error],reason:recipeSymbol.getExpression().toString(),domain:"TcHmi.Server.RecipeManagement",errors:data.details?[data.details]:void 0},destroy:destroy})})),destroy}
/**
             * Returns a recipe types addressed by name and optional path
             * @param recipeTypeName Name of the recipe type
             * @param path Name of the folder
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static getRecipeType(recipeTypeName,path,callback=null){return this.getRecipeTypeEx(recipeTypeName,path,null,null,callback)}
/**
             * Returns a recipe types addressed by name and optional path
             * This function provides more options to manipulate the request
             * @param recipeTypeName Name of the recipe type
             * @param path Name of the folder
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static getRecipeTypeEx(recipeTypeName,path,options,requestOptions=null,callback=null){let paramInvalid=TcHmi.System.isParameterTypeInvalid(recipeTypeName,"recipeTypeName",{type:"string",required:"valueNeeded"},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if(paramInvalid=TcHmi.System.isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const recipeTypeFullPath=path&&recipeTypeName?path+"::"+recipeTypeName:recipeTypeName||(path||"");return options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0}),this.listRecipeTypesEx({domain:domain,path:recipeTypeFullPath},requestOptions,callback)}
/**
             * Watches a recipe type
             * @param recipeTypeName Name of the recipe type
             * @param path Name of the folder
             * @param options Options for the watch
             * @param callback Callback which is called once and on every change
             * @preserve (Part of the public API)
             */static watchRecipeType(recipeTypeName,path,options,callback=null){let paramInvalid=TcHmi.System.isParameterTypeInvalid(recipeTypeName,"recipeTypeName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return function(){};if(paramInvalid=TcHmi.System.isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return function(){};let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return function(){};if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return function(){}}let destroy,recipeSymbol=new TcHmi.Symbol(`%s%${domain}.Config::recipeTypeList::${(path?path+"::":"")+recipeTypeName}${options?.parallel?"|Parallel=True":""}%/s%`);return destroy=recipeSymbol.watchEx(null,(function(data){destroy||(destroy=data.destroy),data.error===TcHmi.Errors.NONE?TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:data.value,destroy:destroy}):TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:{code:data.error,message:TcHmi.Errors[data.error],reason:recipeSymbol.getExpression().toString(),domain:"TcHmi.Server.RecipeManagement",errors:data.details?[data.details]:void 0},destroy:destroy})})),destroy}
/**
             * Creates a recipe type folder
             * @param path name of the new folder
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static createRecipeTypeFolder(path,callback=null){return this.createRecipeTypeFolderEx(path,null,null,callback)}
/**
             * Creates a recipe type folder
             * This function provides more options to manipulate the request
             * @param path Name of the new folder
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static createRecipeTypeFolderEx(path,options,requestOptions=null,callback=null){let paramInvalid=TcHmi.System.isParameterTypeInvalid(path,"path",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeTypeList::"+path,writeValue:{}}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,TcHmi.Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Deletes a recipe type folder
             * @param path name of the folder
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static deleteRecipeTypeFolder(path,callback=null){return this.deleteRecipeTypeFolderEx(path,null,null,callback)}
/**
             * Deletes a recipe type folder
             * This function provides more options to manipulate the request
             * @param path Name of the folder
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static deleteRecipeTypeFolderEx(path,options,requestOptions=null,callback=null){let paramInvalid=TcHmi.System.isParameterTypeInvalid(path,"path",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage","Delete"],symbol:domain+".Config::recipeTypeList::"+path}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,TcHmi.Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Creates a new recipe type
             * @param recipeTypeName Name of the recipe type
             * @param recipeType recipe type definition
             * @param path Path of the recipe type (root folder if set to null)
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static createRecipeType(recipeTypeName,recipeType,path,callback=null){return this.createRecipeTypeEx(recipeTypeName,recipeType,path,null,null,callback)}
/**
             * Creates a new recipe type
             * This function provides more options to manipulate the request
             * @param recipeTypeName Name of the recipe type
             * @param recipeType Recipe type definition
             * @param path Path of the recipe type (root folder if set to null)
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static createRecipeTypeEx(recipeTypeName,recipeType,path,options,requestOptions=null,callback=null){return this.__manipulateRecipeType(!1,recipeTypeName,recipeType,path,options,requestOptions,callback)}
/**
             * Updates a recipe type
             * @param recipeTypeName Name of the recipe type
             * @param recipeType recipe type definition
             * @param path Path of the recipe type (root folder if set to null)
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static updateRecipeType(recipeTypeName,recipeType,path,callback=null){return this.updateRecipeTypeEx(recipeTypeName,recipeType,path,null,null,callback)}
/**
             * Updates a recipe type
             * This function provides more options to manipulate the request
             * @param recipeTypeName Name of the recipe type
             * @param recipeType Recipe type definition
             * @param path Path of the recipe type (root folder if set to null)
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static updateRecipeTypeEx(recipeTypeName,recipeType,path,options,requestOptions=null,callback=null){return this.__manipulateRecipeType(!0,recipeTypeName,recipeType,path,options,requestOptions,callback)}static __manipulateRecipeType(update,recipeTypeName,recipeType,path,options,requestOptions=null,callback=null){let paramInvalid=TcHmi.System.isParameterTypeInvalid(recipeTypeName,"recipeTypeName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if(paramInvalid=TcHmi.System.isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeTypeList::"+(path?path+"::":"")+recipeTypeName,writeValue:recipeType}]};update&&writeRequest.commands[0].commandOptions.push("Replace"),options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,TcHmi.Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Renames or moves a recipe type
             * @param recipeTypeName Old name of the recipe type
             * @param path Old path of the recipe type (root folder if set to null)
             * @param newName New name of the recipe type
             * @param newPath New path of the recipe type (root folder if set to null)
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static renameRecipeType(recipeTypeName,path,newName,newPath,callback=null){return this.renameRecipeTypeEx(recipeTypeName,path,newName,newPath,null,null,callback)}
/**
             * Renames or moves a recipe type
             * This function provides more options to manipulate the request
             * @param recipeTypeName Old name of the recipe type
             * @param path Old path of the recipe type (root folder if set to null)
             * @param newName New name of the recipe type
             * @param newPath New path of the recipe type (root folder if set to null)
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static renameRecipeTypeEx(recipeTypeName,path,newName,newPath,options,requestOptions=null,callback=null){return this.__renameRecipeEntry("recipeTypeList",recipeTypeName,path,newName,newPath,options,requestOptions,callback)}
/**
             * Renames or moves a recipe type folder
             * @param recipeTypeFolderName Old name of the recipe type
             * @param path Old path of the recipe type (root folder if set to null)
             * @param newName New name of the recipe type
             * @param newPath New path of the recipe type (root folder if set to null)
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static renameRecipeTypeFolder(recipeTypeFolderName,path,newName,newPath,callback=null){return this.renameRecipeTypeFolderEx(recipeTypeFolderName,path,newName,newPath,null,null,callback)}
/**
             * Renames or moves a recipe type folder
             * This function provides more options to manipulate the request
             * @param recipeTypeFolderName Old name of the recipe type
             * @param path Old path of the recipe type (root folder if set to null)
             * @param newName New name of the recipe type
             * @param newPath New path of the recipe type (root folder if set to null)
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static renameRecipeTypeFolderEx(recipeTypeFolderName,path,newName,newPath,options,requestOptions=null,callback=null){return this.__renameRecipeEntry("recipeTypeList",recipeTypeFolderName,path,newName,newPath,options,requestOptions,callback)}static __renameRecipeEntry(rootFolder,oldName,path,newName,newPath,options,requestOptions=null,callback=null){let paramInvalid=TcHmi.System.isParameterTypeInvalid(oldName,"oldName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if(paramInvalid=TcHmi.System.isParameterTypeInvalid(newName,"newName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if(paramInvalid=TcHmi.System.isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if(paramInvalid=TcHmi.System.isParameterTypeInvalid(newPath,"newpath",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:"Rename",writeValue:{domain:domain,configuration:"default",old:rootFolder+"::"+(path?path+"::":"")+oldName,new:rootFolder+"::"+(newPath?newPath+"::":"")+newName}}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,TcHmi.Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Deletes a recipe type
             * @param recipeTypeName Name of the recipe type
             * @param path Path of the recipe type (root folder if set to null)
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static deleteRecipeType(recipeTypeName,path,callback=null){return this.deleteRecipeTypeEx(recipeTypeName,path,null,null,callback)}
/**
             * Deletes a recipe type
             * This function provides more options to manipulate the request
             * @param recipeTypeName Name of the recipe type
             * @param path Path of the recipe type (root folder if set to null)
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static deleteRecipeTypeEx(recipeTypeName,path,options,requestOptions=null,callback=null){let paramInvalid=TcHmi.System.isParameterTypeInvalid(recipeTypeName,"recipeTypeName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if(paramInvalid=TcHmi.System.isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage","Delete"],symbol:domain+".Config::recipeTypeList::"+(path?path+"::":"")+recipeTypeName}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,TcHmi.Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Lists all available recipes
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static listRecipes(callback=null){return this.listRecipesEx(null,null,callback)}
/**
             * Lists all available recipes
             * This function provides more options to manipulate the request
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static listRecipesEx(options,requestOptions=null,callback=null){let path="",domain="TcHmiRecipeManagement";if(options){let paramInvalid=TcHmi.System.isParameterTypeInvalid(options.path,"options.path",{type:"string",required:"fullOptional"},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if("string"==typeof options.path&&options.path.length>0&&(path="::"+options.path),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeList"+path}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,TcHmi.Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:data=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:data.results[0].value})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Watches a list of all available recipes
             * @param options Options for the watch
             * @param callback Callback which is called once and on every change
             * @preserve (Part of the public API)
             */static watchRecipeList(options,callback=null){let domain="TcHmiRecipeManagement";if(options){let paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return function(){};if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return function(){}}options&&"string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain);let destroy,recipeSymbol=new TcHmi.Symbol(`%s%${domain}.Config::recipeList${options?.parallel?"|Parallel=True":""}%/s%`);return destroy=recipeSymbol.watchEx(null,(function(data){destroy||(destroy=data.destroy),data.error===TcHmi.Errors.NONE?TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:data.value,destroy:destroy}):TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:{code:data.error,message:TcHmi.Errors[data.error],reason:recipeSymbol.getExpression().toString(),domain:"TcHmi.Server.RecipeManagement",errors:data.details?[data.details]:void 0},destroy:destroy})})),destroy}
/**
             * Creates a recipe folder
             * @param path name of the new folder
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static createRecipeFolder(path,callback=null){return this.createRecipeFolderEx(path,null,null,callback)}
/**
             * Creates a recipe folder
             * This function provides more options to manipulate the request
             * @param path name of the new folder
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static createRecipeFolderEx(path,options,requestOptions=null,callback=null){let paramInvalid=TcHmi.System.isParameterTypeInvalid(path,"path",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeList::"+path,writeValue:{}}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,TcHmi.Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Deletes a recipe folder
             * @param path name of the folder
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static deleteRecipeFolder(path,callback=null){return this.deleteRecipeFolderEx(path,null,null,callback)}
/**
             * Deletes a recipe folder
             * This function provides more options to manipulate the request
             * @param path Name of the folder
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static deleteRecipeFolderEx(path,options,requestOptions=null,callback=null){let paramInvalid=TcHmi.System.isParameterTypeInvalid(path,"path",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage","Delete"],symbol:domain+".Config::recipeList::"+path}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,TcHmi.Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Creates a new recipe
             * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param recipe recipe definition
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static createRecipe(recipeName,path,recipe,callback=null){return this.createRecipeEx(recipeName,path,recipe,null,null,callback)}
/**
             * Creates a new recipe
             * This function provides more options to manipulate the request
             * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param recipe Recipe definition
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static createRecipeEx(recipeName,path,recipe,options,requestOptions=null,callback=null){let paramInvalid=TcHmi.System.isParameterTypeInvalid(recipeName,"recipeName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if(paramInvalid=TcHmi.System.isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const recipeFullPath=path&&recipeName?path+"::"+recipeName:recipeName||(path||""),writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeList"+(recipeFullPath?"::"+recipeFullPath:""),writeValue:recipe}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});const rId=Server.requestEx(writeRequest,requestOptions,TcHmi.Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".UpdateRecipe",writeValue:{path:(path?path+"::":"")+recipeName}}]};Server.requestEx(writeRequest,requestOptions,TcHmi.Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))}}));if(null===rId){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Lists one recipe
             * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static getRecipe(recipeName,path,callback=null){return this.getRecipeEx(recipeName,path,null,null,callback)}
/**
             * Lists one recipe
             * This function provides more options to manipulate the request
             * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static getRecipeEx(recipeName,path,options,requestOptions=null,callback=null){let paramInvalid=TcHmi.System.isParameterTypeInvalid(recipeName,"recipeName",{type:"string",required:"valueNeeded"},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if(paramInvalid=TcHmi.System.isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const recipeFullPath=path&&recipeName?path+"::"+recipeName:recipeName||(path||""),writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeList"+(recipeFullPath?"::"+recipeFullPath:"")}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,TcHmi.Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:data=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:data.results[0].value})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Watches a recipe
             * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param options Options for the watch
             * @param callback Callback which is called once and on every change
             * @preserve (Part of the public API)
             */static watchRecipe(recipeName,path,options,callback=null){let paramInvalid=TcHmi.System.isParameterTypeInvalid(recipeName,"recipeName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return function(){};if(paramInvalid=TcHmi.System.isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return function(){};let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return function(){};if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return function(){}}const recipeFullPath=path&&recipeName?path+"::"+recipeName:recipeName||(path||"");let destroy,recipeSymbol=new TcHmi.Symbol(`%s%${domain}.Config::recipeList${recipeFullPath?"::"+recipeFullPath:""}${options?.parallel?"|Parallel=True":""}%/s%`);return destroy=recipeSymbol.watchEx(null,(function(data){destroy||(destroy=data.destroy),data.error===TcHmi.Errors.NONE?TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:data.value,destroy:destroy}):TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:{code:data.error,message:TcHmi.Errors[data.error],reason:recipeSymbol.getExpression().toString(),domain:"TcHmi.Server.RecipeManagement",errors:data.details?[data.details]:void 0},destroy:destroy})})),destroy}
/**
             * Updates a recipe
             * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param newValues dictionary of the new values
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static updateRecipe(recipeName,path,newValues,callback=null){return this.updateRecipeEx(recipeName,path,newValues,null,null,callback)}
/**
             * Updates a recipe
             * This function provides more options to manipulate the request
             * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param newValues Dictionary of the new values
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static updateRecipeEx(recipeName,path,newValues,options,requestOptions=null,callback=null){let paramInvalid=TcHmi.System.isParameterTypeInvalid(recipeName,"recipeName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if(paramInvalid=TcHmi.System.isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if(paramInvalid=TcHmi.System.isParameterTypeInvalid(newValues,"newValues",{type:"object",required:"valueNeeded"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeList"+(path?"::"+path:"")+"::"+recipeName+"::values",writeValue:newValues}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,TcHmi.Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Reads all values which is referenced by a recipe
             * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static readFromTarget(recipeName,path,callback=null){return this.readFromTargetEx(recipeName,path,null,null,callback)}
/**
             * Reads all values which is referenced by a recipe
             * This function provides more options to manipulate the request
             * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static readFromTargetEx(recipeName,path,options,requestOptions=null,callback=null){let paramInvalid=TcHmi.System.isParameterTypeInvalid(recipeName,"recipeName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if(paramInvalid=TcHmi.System.isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".ReadFromTarget",writeValue:{path:(path?path+"::":"")+recipeName}}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,TcHmi.Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:data=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:data.results[0].value})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Reads the current values which are referenced from a base recipe and write it back
             * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static teach(recipeName,path,callback=null){return this.teachEx(recipeName,path,null,null,callback)}
/**
             * Reads the current values which are referenced from a base recipe and write it back
             * This function provides more options to manipulate the request
             * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static teachEx(recipeName,path,options,requestOptions=null,callback=null){return this.readFromTargetEx(recipeName,path,options,requestOptions,(function(readFromTargetData){readFromTargetData.error===TcHmi.Errors.NONE?_a.createRecipeEx(recipeName,path,readFromTargetData.value[(path?path+"::":"")+recipeName],options,requestOptions,(createRecipeData=>{createRecipeData.error!==TcHmi.Errors.NONE?TcHmi.Callback.callSafeEx(callback,null,createRecipeData):TcHmi.Callback.callSafeEx(callback,null,readFromTargetData)})):TcHmi.Callback.callSafeEx(callback,null,readFromTargetData)}))}
/**
             * Reads the current values which are referenced from a base recipe and write it into a new recipe
             * @param recipeName Name of the base recipe (could be prefixed with a path if separated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param newRecipeName Name of the new recipe. (could be prefixed with a path if separated with ::)
             * @param newRecipePath Path of the new recipe. (root folder if set to null)
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static teachAsNewRecipe(recipeName,path,newRecipeName,newRecipePath,callback=null){return this.teachAsNewRecipeEx(recipeName,path,newRecipeName,newRecipePath,null,null,callback)}
/**
             * Reads the current values which are referenced from a base recipe and write it into a new recipe
             * This function provides more options to manipulate the request
             * @param recipeName Name of the base recipe (could be prefixed with a path if separated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param newRecipeName Name of the new recipe. (could be prefixed with a path if separated with ::)
             * @param newRecipePath Path of the new recipe. (root folder if set to null)
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static teachAsNewRecipeEx(recipeName,path,newRecipeName,newRecipePath,options,requestOptions=null,callback=null){let paramInvalid=TcHmi.System.isParameterTypeInvalid(recipeName,"recipeName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);return paramInvalid||(paramInvalid=TcHmi.System.isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid||(paramInvalid=TcHmi.System.isParameterTypeInvalid(newRecipeName,"newRecipeName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid||(paramInvalid=TcHmi.System.isParameterTypeInvalid(newRecipePath,"newRecipepath",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid||this.readFromTargetEx(recipeName,path,options,requestOptions,(data=>{data.error===TcHmi.Errors.NONE?_a.createRecipeEx(newRecipeName,newRecipePath,data.value[(path?path+"::":"")+recipeName],options,requestOptions,callback):TcHmi.Callback.callSafeEx(callback,null,data)})))))}
/**
             * Activates a recipe (writes all values)
             * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static activate(recipeName,path,callback=null){return this.activateEx(recipeName,path,null,null,callback)}
/**
             * Activates a recipe (writes all values)
             * This function provides more options to manipulate the request
             * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static activateEx(recipeName,path,options,requestOptions=null,callback=null){let paramInvalid=TcHmi.System.isParameterTypeInvalid(recipeName,"recipeName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if(paramInvalid=TcHmi.System.isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".ActivateRecipe",writeValue:{path:(path?path+"::":"")+recipeName}}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,TcHmi.Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Lists all active recipes
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static getActiveRecipes(callback=null){return this.getActiveRecipesEx(null,null,callback)}
/**
             * Lists all active recipes
             * This function provides more options to manipulate the request
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static getActiveRecipesEx(options,requestOptions=null,callback=null){let domain="TcHmiRecipeManagement";if(options){let paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".GetActiveRecipes"}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,TcHmi.Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:data=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,recipeList:data.results[0].value})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Watches a list of all active recipes
             * @param options Options for the watch
             * @param callback Callback which is called once and on every change
             * @preserve (Part of the public API)
             */static watchActiveRecipes(options,callback=null){let domain="TcHmiRecipeManagement";if(options){let paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return function(){};if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return function(){}}let destroy,recipeSymbol=new TcHmi.Symbol(`%s%${domain}.GetActiveRecipes${options?.parallel?"|Parallel=True":""}%/s%`);return destroy=recipeSymbol.watchEx(null,(function(data){destroy||(destroy=data.destroy),data.error===TcHmi.Errors.NONE?TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:data.value,destroy:destroy}):TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:{code:data.error,message:TcHmi.Errors[data.error],reason:recipeSymbol.getExpression().toString(),domain:"TcHmi.Server.RecipeManagement",errors:data.details?[data.details]:void 0},destroy:destroy})})),destroy}
/**
             * Renames or moves a recipe
             * @param recipeName Old name of the recipe (could be prefixed with a path if separated with ::)
             * @param path Old path of the recipe (root folder if set to null)
             * @param newName New name of the recipe
             * @param newPath New path of the recipe (root folder if set to null)
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static renameRecipe(recipeName,path,newName,newPath,callback=null){return this.renameRecipeEx(recipeName,path,newName,newPath,null,null,callback)}
/**
             * Renames or moves a recipe
             * This function provides more options to manipulate the request
             * @param recipeName Old name of the recipe (could be prefixed with a path if separated with ::)
             * @param path Old path of the recipe (root folder if set to null)
             * @param newName New name of the recipe
             * @param newPath New path of the recipe (root folder if set to null)
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static renameRecipeEx(recipeName,path,newName,newPath,options,requestOptions=null,callback=null){return this.__renameRecipeEntry("recipeList",recipeName,path,newName,newPath,options,requestOptions,callback)}
/**
             * Renames or moves a recipe folder
             * @param recipeFolderName Old name of the recipe (could be prefixed with a path if separated with ::)
             * @param path Old path of the recipe (root folder if set to null)
             * @param newName New name of the recipe
             * @param newPath New path of the recipe (root folder if set to null)
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static renameRecipeFolder(recipeFolderName,path,newName,newPath,callback=null){return this.renameRecipeFolderEx(recipeFolderName,path,newName,newPath,null,null,callback)}
/**
             * Renames or moves a recipe folder
             * This function provides more options to manipulate the request
             * @param recipeFolderName Old name of the recipe (could be prefixed with a path if separated with ::)
             * @param path Old path of the recipe (root folder if set to null)
             * @param newName Mew name of the recipe
             * @param newPath New path of the recipe (root folder if set to null)
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static renameRecipeFolderEx(recipeFolderName,path,newName,newPath,options,requestOptions=null,callback=null){return this.__renameRecipeEntry("recipeList",recipeFolderName,path,newName,newPath,options,requestOptions,callback)}
/**
             * Deletes a recipe
             * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static deleteRecipe(recipeName,path,callback=null){return this.deleteRecipeEx(recipeName,path,null,null,callback)}
/**
             * Deletes a recipe
             * This function provides more options to manipulate the request
             * @param recipeName Name of the recipe (could be prefixed with a path if separated with ::)
             * @param path Path of the recipe (root folder if set to null)
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static deleteRecipeEx(recipeName,path,options,requestOptions=null,callback=null){let paramInvalid=TcHmi.System.isParameterTypeInvalid(recipeName,"recipeName",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if(paramInvalid=TcHmi.System.isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage","Delete"],symbol:domain+".Config::recipeList::"+(path?path+"::":"")+recipeName}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});if(null===Server.requestEx(writeRequest,requestOptions,TcHmi.Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Downloads one or more recipes. Downloads all recipes when filter is the empty string, empty array or null.
             * The sibling API downloadRecipesEx can include the referenced recipe types, too.
             * This needs to be triggered by a user interaction (not on load or symbol change).
             * @param filter Name or names of the recipes (could be prefixed with a path if separated with ::)
             * @param path Path of the recipes (root folder if set to null)
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static downloadRecipes(filter,path,callback=null){return this.downloadRecipesEx(filter,path,null,null,callback)}
/**
             * Downloads one or more recipes. Downloads all recipes when filter is the empty string, empty array or null.
             * Can include the referenced recipe types, too, when set in options.
             * This function provides more options to manipulate the request.
             * This needs to be triggered by a user interaction (not on load or symbol change).
             * @param filter Name or names of the recipes (could be prefixed with a path if separated with ::)
             * @param path Path of the recipes (root folder if set to null)
             * @param options Options for the download recipeManagement
             * @param requestOptions Options for the request itself (not used right now)
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static downloadRecipesEx(filter,path,options,requestOptions=null,callback=null){let filterArr;if(null===filter)filterArr=[""];else if(Array.isArray(filter)&&0===filter.length)filterArr=[""];else if(Array.isArray(filter)){let paramInvalid=TcHmi.System.isParameterTypeInvalid(filter,"filter",{type:"string",expectArray:!0,required:"nullOk"},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;filterArr=filter}else{let paramInvalid=TcHmi.System.isParameterTypeInvalid(filter,"recipeName",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;filterArr=[filter]}let paramInvalid=TcHmi.System.isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.referencedRecipeTypes,"options.referencedRecipeTypes",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if(paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}return new Promise(((resolve,reject)=>{const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeList"},{commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeTypeList"}]};options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0});null!==Server.requestEx(writeRequest,requestOptions,TcHmi.Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];reject({error:res.error,details:res.details})}else reject({error:data.error,details:data.details})},success:data=>{const allRecipes=data.results.find((data=>data.symbol===domain+".Config::recipeList"))?.value,allRecipeTypes=data.results.find((data=>data.symbol===domain+".Config::recipeTypeList"))?.value;allRecipes&&allRecipeTypes?resolve({allRecipes:allRecipes,allRecipeTypes:allRecipeTypes}):reject({error:TcHmi.Errors.ERROR,details:{code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request had wrong content.",domain:"TcHmi.Server.RecipeManagement"}})}}))||reject({error:TcHmi.Errors.ERROR,details:{code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.RecipeManagement"}})})).then((data=>{const allRecipeTypesMap=new Map,allRecipeTypesOrFolderMap=new Map,buildRecipeTypeMap=(currentRecipeTypeOrFolder,path)=>{if(allRecipeTypesOrFolderMap.set(path,currentRecipeTypeOrFolder),this.isRecipeType(currentRecipeTypeOrFolder))allRecipeTypesMap.set(path,currentRecipeTypeOrFolder);else for(const[subPath,subRecipeTypeFolder]of Object.entries(currentRecipeTypeOrFolder))buildRecipeTypeMap(subRecipeTypeFolder,path?path+"::"+subPath:subPath)};buildRecipeTypeMap(data.allRecipeTypes,"");const allRecipesMap=new Map;let referencedRecipe=new Map,referencedRecipeTypes=new Map;const buildRecipeMap=(currentRecipeOrFolder,path)=>{if(allRecipesMap.set(path,currentRecipeOrFolder),this.isRecipe(currentRecipeOrFolder)){referencedRecipeTypes.set(path,currentRecipeOrFolder.recipeTypeName),referencedRecipe.set(path,[]);const typeMembers=allRecipeTypesMap.get(currentRecipeOrFolder.recipeTypeName)?.members;if(typeMembers)for(const recipeTypeMember of Object.values(typeMembers))if(recipeTypeMember&&"recipeType"in recipeTypeMember){const linkedRecipePath=currentRecipeOrFolder.values[recipeTypeMember.recipeType];linkedRecipePath&&referencedRecipe.get(path)?.push(linkedRecipePath)}}else for(const[subPath,subRecipeFolder]of Object.entries(currentRecipeOrFolder))buildRecipeMap(subRecipeFolder,path?path+"::"+subPath:subPath)};buildRecipeMap(data.allRecipes,"");const resultMessage={requestType:"ReadWrite",commands:[]},includedRecipePaths=new Set,includedRecipeTypePaths=new Set,buildRecipeTypeCommand=referencedRecipeType=>{if(referencedRecipeType&&!includedRecipeTypePaths.has(referencedRecipeType)){includedRecipeTypePaths.add(referencedRecipeType);const referencedRecipeTypeObj=allRecipeTypesMap.get(referencedRecipeType);resultMessage.commands?.unshift({commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeTypeList"+(referencedRecipeType?"::"+referencedRecipeType:""),writeValue:referencedRecipeTypeObj});for(const subReferencedRecipeType of referencedRecipeTypeObj?.recipeTypeNames??[])buildRecipeTypeCommand(subReferencedRecipeType)}else void 0===referencedRecipeType&&resultMessage.commands?.unshift({commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeTypeList",writeValue:allRecipeTypesOrFolderMap.get("")})},buildRecipeCommand=recipePath=>{if(includedRecipePaths.has(recipePath))return;includedRecipePaths.add(recipePath),resultMessage.commands?.push({commandOptions:["SendErrorMessage"],symbol:domain+".Config::recipeList"+(recipePath?"::"+recipePath:""),writeValue:allRecipesMap.get(recipePath)});const referencedRecipeType=referencedRecipeTypes.get(recipePath);options?.referencedRecipeTypes&&(resultMessage.commands?.some((cmd=>cmd.symbol===domain+".Config::recipeTypeList"))||buildRecipeTypeCommand(referencedRecipeType));for(const referencedPath of referencedRecipe.get(recipePath)??[])buildRecipeCommand(referencedPath)};for(const recipePath of filterArr)buildRecipeCommand(path?path+"::"+recipePath:recipePath);const downloaderAElement=document.createElement("a");downloaderAElement.download=(1===filterArr.length&&filterArr[0]?filterArr[0].replace(/::/g,"_"):domain+"_recipeList")+(options?.referencedRecipeTypes?"+ref":"")+".json",downloaderAElement.href="data:application/json;charset=utf8,"+encodeURI(JSON.stringify(resultMessage)),downloaderAElement.style.display="none",document.body.appendChild(downloaderAElement),downloaderAElement.click(),downloaderAElement.remove(),TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})})).catch((errorDetails=>{errorDetails instanceof globalThis.Error?TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.ERROR,details:{code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Unknown error in downloadRecipeEx",domain:"TcHmi.Server.RecipeManagement",exception:errorDetails}}):TcHmi.Callback.callSafeEx(callback,null,{error:errorDetails?.code,details:errorDetails})})),{code:TcHmi.Errors.NONE}}
/**
             * Downloads one or more recipe types. Downloads all recipe types when recipeTypeName is the empty string or null.
             * The sibling API downloadRecipeTypesEx can include the referenced recipe types, too.
             * This needs to be triggered by a user interaction (not on load or symbol change).
             * @param filter Name or names of the recipe types (could be prefixed with a path if separated with ::)
             * @param path Path of the recipe types (root folder if set to null)
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static downloadRecipeTypes(filter,path,callback=null){return this.downloadRecipeTypesEx(filter,path,null,null,callback)}
/**
             * Downloads one or more recipe types. Downloads all recipe types when recipeTypeName is the empty string or null.
             * Can include the referenced recipe types, too, when set in options.
             * This function provides more options to manipulate the request.
             * This needs to be triggered by a user interaction (not on load or symbol change).
             * @param filter Name or names of the recipe types (could be prefixed with a path if separated with ::)
             * @param path Path of the recipe types (root folder if set to null)
             * @param options Options for the download recipeManagement
             * @param requestOptions Options for the request itself (not used right now)
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static downloadRecipeTypesEx(filter,path,options,requestOptions=null,callback=null){let filterArr;if(Array.isArray(filter)){let paramInvalid=TcHmi.System.isParameterTypeInvalid(filter,"filter",{type:"string",expectArray:!0,required:"nullOk"},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;filterArr=filter}else{let paramInvalid=TcHmi.System.isParameterTypeInvalid(filter,"recipeTypeName",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;filterArr=[filter]}let paramInvalid=TcHmi.System.isParameterTypeInvalid(path,"path",{type:"string",required:"nullOk"},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;let domain="TcHmiRecipeManagement";if(options){if(paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.referencedRecipeTypes,"options.referencedRecipeTypes",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid;if(paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}return __classPrivateFieldGet(this,_a,"m",_RecipeManagement_fetchAllRecipeTypes).call(this,filterArr,path,options,requestOptions).then((allPromiseResults=>{const seenPath=new Set,resultMessage={requestType:"ReadWrite",commands:allPromiseResults.flat(1).filter((data=>!seenPath.has(data.symbol)&&(seenPath.add(data.symbol),!0)))},downloaderAElement=document.createElement("a");downloaderAElement.download=(1===filterArr.length&&filterArr[0]?filterArr[0].replace(/::/g,"_"):domain+"_recipeTypeList")+(options?.referencedRecipeTypes?"+ref":"")+".json",downloaderAElement.href="data:application/json;charset=utf8,"+encodeURI(JSON.stringify(resultMessage)),downloaderAElement.style.display="none",document.body.appendChild(downloaderAElement),downloaderAElement.click(),downloaderAElement.remove(),TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})})).catch((errorDetails=>{errorDetails instanceof globalThis.Error?TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.ERROR,details:{code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Unknown error in downloadRecipeTypesEx",domain:"TcHmi.Server.RecipeManagement",exception:errorDetails}}):TcHmi.Callback.callSafeEx(callback,null,{error:errorDetails?.code,details:errorDetails})})),{code:TcHmi.Errors.NONE}}
/**
             * Uploads one or more recipe files (each containing one or all recipes or recipe types of a server).
             * This needs to be triggered by a user interaction (not on load or symbol change).
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static uploadRecipeFiles(callback=null){return this.uploadRecipeFilesEx(null,null,callback)}
/**
             * Uploads one or more recipe files (each containing one or all recipes or recipe types of a server).
             * This needs to be triggered by a user interaction (not on load or symbol change).
             * This function provides more options to manipulate the request
             * @param options Options for the recipeManagement
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static uploadRecipeFilesEx(options,requestOptions=null,callback=null){let domain;if(options){let paramInvalid=TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Server.RecipeManagement",callback);if(paramInvalid)return paramInvalid;if("string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain),paramInvalid=TcHmi.System.isParameterTypeInvalid(options.parallel,"options.parallel",{type:"boolean",required:"undefinedOk"},"TcHmi.Server.RecipeManagement",callback),paramInvalid)return paramInvalid}const inputElement=document.createElement("input");inputElement.type="file",inputElement.accept=".json",inputElement.multiple=!0;let pendingFileCount=0;return inputElement.addEventListener("change",(()=>{if(inputElement.files?.length){pendingFileCount+=inputElement.files.length;for(const file of inputElement.files){const reader=new FileReader;reader.addEventListener("loadend",(()=>{if(pendingFileCount<=0)return;const request=TcHmi.ValueConverter.toObject(reader.result);if(!request?.commands?.length)return pendingFileCount=0,void TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_PARAMETER_INVALID,details:{code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],reason:"Selected recipe file to upload has invalid content.",domain:"TcHmi.Server.RecipeManagment"}});for(const command of request.commands){if(!command.symbol||!command.symbol.includes(".Config::"))return pendingFileCount=0,void TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_PARAMETER_INVALID,details:{code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],reason:"Selected recipe file to upload has invalid content. Symbol not allowed: "+command.symbol,domain:"TcHmi.Server.RecipeManagment"}});if(domain){const symbol=command.symbol,configIndex=symbol.indexOf(".Config::");command.symbol=domain+symbol.substring(configIndex)}}options?.parallel&&(requestOptions?requestOptions.parallel=!0:requestOptions={parallel:!0}),TcHmi.Server.requestEx(request,requestOptions,(data=>{if(!(pendingFileCount<=0)){if(data.error||!data.results)return pendingFileCount=0,void TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details});for(const res of data.results)if(res.error!==TcHmi.Errors.NONE)return pendingFileCount=0,void TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details});pendingFileCount--,pendingFileCount<=0&&TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))})),reader.addEventListener("error",(()=>{pendingFileCount<=0||(pendingFileCount=0,TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_PARAMETER_INVALID,details:{code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],reason:"Reading recipe file to upload has failed.",domain:"TcHmi.Server.RecipeManagment"}}))})),reader.readAsText(file)}}else pendingFileCount=0,TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})})),inputElement.click(),{code:TcHmi.Errors.NONE}}}_a=RecipeManagement,_RecipeManagement_fetchAllRecipeTypes=function _RecipeManagement_fetchAllRecipeTypes(filterList,path,options,requestOptions){const domain=options?.domain??"TcHmiRecipeManagement",allTypePromises=[];for(const filter of filterList){const recipeTypeFullPath=path&&filter?path+"::"+filter:filter||(path||"");allTypePromises.push(new Promise(((typeResolve,typeReject)=>{TcHmi.Server.RecipeManagement.getRecipeTypeEx(recipeTypeFullPath,null,options,requestOptions,(typeData=>{if(typeData.error||!typeData.value){const errorDetail={code:typeData.error,message:TcHmi.Errors[typeData.error],reason:"Request for type "+recipeTypeFullPath+" failed.",domain:"TcHmi.Server.RecipeManagement",errors:typeData.details?[typeData.details]:void 0};return void typeReject(errorDetail)}const recipeTypeOrFolder=typeData.value,recipeTypeCommand={symbol:domain+".Config::recipeTypeList"+(recipeTypeFullPath?"::"+recipeTypeFullPath:""),writeValue:recipeTypeOrFolder};if(options?.referencedRecipeTypes&&""!==recipeTypeFullPath){const allSubTypes=new Set,findTypesInRecipeTypeFolder=currentRecipeTypeOrFolder=>{if(this.isRecipeType(currentRecipeTypeOrFolder))for(const reference of currentRecipeTypeOrFolder.recipeTypeNames??[])allSubTypes.add(reference);else for(const subRecipeType of Object.values(currentRecipeTypeOrFolder))findTypesInRecipeTypeFolder(subRecipeType)};findTypesInRecipeTypeFolder(recipeTypeOrFolder),__classPrivateFieldGet(this,_a,"m",_RecipeManagement_fetchAllRecipeTypes).call(this,allSubTypes,null,options,requestOptions).then((data=>{typeResolve([...data,recipeTypeCommand])})).catch((err=>{typeReject(err)}))}else typeResolve([recipeTypeCommand])}))})))}return Promise.all(allTypePromises).then((data=>Promise.resolve(data.flat(1))))},Server.RecipeManagement=RecipeManagement,function(RecipeManagement){RecipeManagement.isRecipe=function(candidate){return"string"==typeof candidate.recipeTypeName&&"object"==typeof candidate.values&&null!==candidate.values},RecipeManagement.isRecipeType=function(candidate){if("object"!=typeof candidate.members||null===candidate.members)return!1;for(const member of Object.values(candidate.members))if("string"!=typeof member.recipeType){if("string"!=typeof member.symbol)return!1;if(!("defaultValue"in member))return!1}const additionalChecksRequired=0===Object.keys(candidate.members).length;let recipeTypeNamesValid=!1,optionsValid=!1;if("recipeTypeNames"in candidate){if(!Array.isArray(candidate.recipeTypeNames))return!1;for(const entry of candidate.recipeTypeNames){if("string"!=typeof entry)return!1;recipeTypeNamesValid=!0}}if("options"in candidate){if("object"!=typeof candidate.options||null===candidate.options)return!1;if("enabled"in candidate.options){if("None"!==candidate.options.enabled&&"Disabled"!==candidate.options.enabled)return!1;optionsValid=!0}if("comment"in candidate.options){if("string"!=typeof candidate.options.comment)return!1;optionsValid=!0}}return!(additionalChecksRequired&&!recipeTypeNamesValid&&!optionsValid)}}(RecipeManagement=Server.RecipeManagement||(Server.RecipeManagement={}));Server.Historize=class{
/**
             * Adding a Symbol to the Historize Configuration of the server
             * @param symbolName Name of the Symbol to manipulate
             * @param settings Settings for the symbol
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */
static add(symbolName,settings,callback=null){return this.addEx2(symbolName,settings,null,null,callback)}
/**
             * Adding a Symbol to the Historize Configuration of the server
             * @param symbolName Name of the Symbol to manipulate
             * @param settings Settings for the symbol
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static addEx(symbolName,settings,requestOptions,callback=null){return this.addEx2(symbolName,settings,null,requestOptions,callback)}
/**
             * Adding a Symbol to the Historize Configuration of the server
             * @param symbolName Name of the Symbol to manipulate
             * @param settings Settings for the symbol
             * @param options global settings
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static addEx2(symbolName,settings,options,requestOptions,callback=null){if(!symbolName){const errorDetail={code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],reason:"Invalid parameter symbolName given",domain:"TcHmi.Server.Historize"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}if(null==settings||"object"!=typeof settings){const errorDetail={code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],reason:"Invalid parameter settings given",domain:"TcHmi.Server.Historize"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}let domain="TcHmiSqliteHistorize";options&&"string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain);let writeValue={interval:"PT1S",maxEntries:1e4,rowLimit:1e4,recordingEnabled:!0};void 0!==settings.INTERVAL&&(writeValue.interval=settings.INTERVAL),void 0!==settings.MAXENTRIES&&(writeValue.maxEntries=settings.MAXENTRIES),void 0!==settings.ROWLIMIT&&(writeValue.rowLimit=settings.ROWLIMIT),void 0!==settings.RECORDINGENABLED&&(writeValue.recordingEnabled=settings.RECORDINGENABLED);const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::historizedSymbolList::"+symbolName,writeValue:writeValue}]};if(null===Server.requestEx(writeRequest,requestOptions,TcHmi.Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.Historize"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Removing a Symbol from the Historize Configuration of the server
             * @param symbolName Name of the Symbol to manipulate
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static remove(symbolName,callback=null){return this.removeEx2(symbolName,null,null,callback)}
/**
             * Removing a Symbol from the Historize Configuration of the server
             * @param symbolName Name of the Symbol to manipulate
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static removeEx(symbolName,requestOptions,callback=null){return this.removeEx2(symbolName,null,requestOptions,callback)}
/**
             * Removing a Symbol from the Historize Configuration of the server
             * @param symbolName Name of the Symbol to manipulate
             * @param options global settings
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static removeEx2(symbolName,options,requestOptions,callback=null){if(!symbolName){const errorDetail={code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],reason:"Invalid parameter symbolName given",domain:"TcHmi.Server.Historize"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}let domain="TcHmiSqliteHistorize";options&&"string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain);const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage","Delete"],symbol:domain+".Config::historizedSymbolList::"+symbolName}]};if(null===Server.requestEx(writeRequest,requestOptions,TcHmi.Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.Historize"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Update a config of a Symbol in the Historize Configuration of the server
             * @param symbolName Name of the Symbol to manipulate
             * @param settings Settings for the symbol
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static update(symbolName,settings,callback=null){return this.updateEx2(symbolName,settings,null,null,callback)}
/**
             * Update a config of a Symbol in the Historize Configuration of the server
             * @param symbolName Name of the Symbol to manipulate
             * @param settings Settings for the symbol
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static updateEx(symbolName,settings,requestOptions,callback=null){return this.updateEx2(symbolName,settings,null,requestOptions,callback)}
/**
             * Update a config of a Symbol in the Historize Configuration of the server
             * @param symbolName Name of the Symbol to manipulate
             * @param settings Settings for the symbol
             * @param options global settings
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static updateEx2(symbolName,settings,options,requestOptions,callback=null){if(!symbolName){const errorDetail={code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],reason:"Invalid parameter symbolName given",domain:"TcHmi.Server.Historize"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}if(null==settings||"object"!=typeof settings){const errorDetail={code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],reason:"Invalid parameter settings given",domain:"TcHmi.Server.Historize"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}let domain="TcHmiSqliteHistorize";options&&"string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain);const readRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::historizedSymbolList::"+symbolName}]};if(null===Server.requestEx(readRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:data=>{let readValue=data.results[0].value;if(!readValue)return void TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SERVER_READVALUE_MISSING});let writeValue=tchmi_clone_object(readValue);void 0!==settings.INTERVAL&&(writeValue.interval=settings.INTERVAL),void 0!==settings.MAXENTRIES&&(writeValue.maxEntries=settings.MAXENTRIES),void 0!==settings.ROWLIMIT&&(writeValue.rowLimit=settings.ROWLIMIT),void 0!==settings.RECORDINGENABLED&&(writeValue.recordingEnabled=settings.RECORDINGENABLED);const writeRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::historizedSymbolList::"+symbolName,writeValue:writeValue}]};Server.requestEx(writeRequest,requestOptions,TcHmi.Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})}}))}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.Historize"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}
/**
             * Gets the current config of a Symbol in the Historize Configuration of the server
             * @param symbolName Name of the Symbol to manipulate
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static get(symbolName,callback=null){return this.getEx2(symbolName,null,null,callback)}
/**
             * Gets the current config of a Symbol in the Historize Configuration of the server
             * @param symbolName Name of the Symbol to manipulate
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static getEx(symbolName,requestOptions,callback=null){return this.getEx2(symbolName,null,requestOptions,callback)}
/**
             * Gets the current config of a Symbol in the Historize Configuration of the server
             * @param symbolName Name of the Symbol to manipulate
             * @param options global settings
             * @param requestOptions Options for the request itself
             * @param callback Will be called after request.
             * @preserve (Part of the public API)
             */static getEx2(symbolName,options,requestOptions,callback=null){if(!symbolName){const errorDetail={code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],reason:"Invalid parameter symbolName given.",domain:"TcHmi.Server.Historize"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}let domain="TcHmiSqliteHistorize";options&&"string"==typeof options.domain&&options.domain.length>0&&(domain=options.domain);const readRequest={requestType:"ReadWrite",commands:[{commandOptions:["SendErrorMessage"],symbol:domain+".Config::historizedSymbolList::"+symbolName}]};if(null===Server.requestEx(readRequest,requestOptions,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})},success:data=>{let readValue=data.results[0].value;if(!readValue)return void TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SERVER_READVALUE_MISSING});let settings={};void 0!==readValue.interval&&(settings.INTERVAL=readValue.interval),void 0!==readValue.maxEntries&&(settings.MAXENTRIES=readValue.maxEntries),void 0!==readValue.rowLimit&&(settings.ROWLIMIT=readValue.rowLimit),void 0!==readValue.recordingEnabled&&(settings.RECORDINGENABLED=readValue.recordingEnabled),TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,key:symbolName,settings:settings})}}))){const errorDetail={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request could not be sent.",domain:"TcHmi.Server.Historize"};return TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail}return{code:TcHmi.Errors.NONE}}};class Events{static confirmAlarm(alarm,callback){let rawAlarm={name:alarm.name,domain:alarm.sourceDomain,severity:alarm.severity,timeRaised:alarm.timeRaised.toISOString(),params:alarm.params,id:alarm.id,timeCleared:alarm.timeCleared?.toISOString()??null,timeConfirmed:alarm.timeConfirmed?.toISOString()??null,alarmState:alarm.alarmState,confirmationState:alarm.confirmationState};if(TcHmi.System.Services.serverEventManager)TcHmi.System.Services.serverEventManager.confirmAlarm(rawAlarm,callback);else{const errorDetail={code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],reason:"Unable to confirm alarm. System not ready.",domain:"TcHmi.Server.Events"};TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail})}}static registerConsumer(filter,callbacks,doneCallback){let parsedFilter;try{parsedFilter=TcHmi.System.Filter.parse(filter,TcHmi.Type.getSchema("tchmi:server#/definitions/eventFilter"))}catch(e){const error={error:TcHmi.Errors.E_PARAMETER_INVALID,details:{code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],reason:"An uncaught exception occurred while parsing the filter",exception:e,domain:"TcHmi.Server.Events"}};return TcHmi.Callback.callSafeEx(callbacks.list,null,error),TcHmi.Callback.callSafeEx(callbacks.subscription,null,error),TcHmi.Callback.callSafeEx(doneCallback,null,error),null}let consumer={filter:parsedFilter,rawFilter:filter,activeAlarmIds:[],listCallback:callbacks.list,subscriptionCallback:callbacks.subscription,registration:{listPending:void 0!==callbacks.list,subscriptionPending:void 0!==callbacks.subscription,callback:doneCallback}};return this.__consumersToAdd.push(consumer),-1!==this.__registerTimeoutId&&window.clearTimeout(this.__registerTimeoutId),this.__registerTimeoutId=window.setTimeout((()=>{this.__registerTimeoutId=-1,this.__addConsumers()}),200),()=>{const indexToAdd=this.__consumersToAdd.indexOf(consumer),indexAdded=this.__consumers.indexOf(consumer);-1!==indexToAdd&&this.__consumersToAdd.splice(indexToAdd,1),-1!==indexAdded&&(this.__consumers.splice(indexAdded,1),consumer.subscriptionCallback&&(-1!==this.__unregisterTimeoutId&&window.clearTimeout(this.__unregisterTimeoutId),this.__unregisterTimeoutId=window.setTimeout((()=>{this.__unregisterTimeoutId=-1,this.__updateSubscription()}),500)))}}static __addConsumers(){this.__listEvents(this.__consumersToAdd),this.__consumers.push(...this.__consumersToAdd),this.__consumersToAdd=[],this.__updateSubscription((data=>{for(const consumer of this.__consumers)consumer.registration.subscriptionPending&&(consumer.registration.subscriptionPending=!1,!consumer.registration.listPending&&consumer.registration.callback&&TcHmi.Callback.callSafeEx(consumer.registration.callback,null,data))}))}static __feedListConsumers(consumers,events){for(let i=0,ii=consumers.length;i<ii;i++){let consumer=consumers[i];if(!consumer.listCallback)continue;consumer.activeAlarmIds=[];let eventsForConsumer=[];for(let j=0,jj=events.length;j<jj;j++){let parsedEvent=this.parseServerEvent(events[j]);consumer.filter.test(parsedEvent)&&(eventsForConsumer.push(parsedEvent),Events.isAlarm(parsedEvent)&&parsedEvent.id>-1&&!consumer.activeAlarmIds.includes(parsedEvent.id)&&consumer.activeAlarmIds.push(parsedEvent.id))}TcHmi.Callback.callSafeEx(consumer.listCallback,null,{error:TcHmi.Errors.NONE,events:eventsForConsumer}),consumer.registration.listPending&&(consumer.registration.listPending=!1,!consumer.registration.subscriptionPending&&consumer.registration.callback&&TcHmi.Callback.callSafeEx(consumer.registration.callback,null,{error:TcHmi.Errors.NONE}))}}static __feedSubscriptionConsumers(event){for(let i=0,ii=this.__consumers.length;i<ii;i++){let consumer=this.__consumers[i];if(!consumer.subscriptionCallback)continue;let parsedEvent=this.parseServerEvent(event);if(consumer.filter.test(parsedEvent))Events.isAlarm(parsedEvent)&&parsedEvent.id>-1&&!consumer.activeAlarmIds.includes(parsedEvent.id)&&consumer.activeAlarmIds.push(parsedEvent.id),consumer.subscriptionCallback({error:TcHmi.Errors.NONE,event:parsedEvent,changeType:this.__toServerEventChangeType(event.changeType),removedByFilter:!1});else if(Events.isAlarm(parsedEvent)&&parsedEvent.id>-1){let alarmIndex=consumer.activeAlarmIds.indexOf(parsedEvent.id);-1!==alarmIndex&&(consumer.activeAlarmIds.splice(alarmIndex,1),TcHmi.Callback.callSafeEx(consumer.subscriptionCallback,null,{error:TcHmi.Errors.NONE,event:parsedEvent,changeType:this.__toServerEventChangeType(event.changeType),removedByFilter:!0}))}}}static __listEvents(consumers){if(!TcHmi.System.Services.serverEventManager){const errorDetail={code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],reason:"Unable to handle events. System not ready.",domain:"TcHmi.Server.Events"};for(const consumer of consumers)TcHmi.Callback.callSafeEx(consumer.listCallback,null,{error:errorDetail.code,details:errorDetail}),consumer.registration.listPending&&(consumer.registration.listPending=!1,!consumer.registration.subscriptionPending&&consumer.registration.callback&&TcHmi.Callback.callSafeEx(consumer.registration.callback,null,{error:errorDetail.code,details:errorDetail}));return}const filter=this.__accumulateFilters(consumers,!1);void 0!==filter&&TcHmi.System.Services.serverEventManager.listEvents(filter,(data=>{if(data.error===TcHmi.Errors.NONE&&data.events)this.__feedListConsumers(consumers,data.events);else for(const consumer of consumers)TcHmi.Callback.callSafeEx(consumer.listCallback,null,{error:data.error,details:data.details}),consumer.registration.listPending&&(consumer.registration.listPending=!1,!consumer.registration.subscriptionPending&&consumer.registration.callback&&TcHmi.Callback.callSafeEx(consumer.registration.callback,null,{error:data.error,details:data.details}))}))}static __updateSubscription(callback){if(!TcHmi.System.Services.serverEventManager){const errorDetail={code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],reason:"Unable to handle events. System not ready.",domain:"TcHmi.Server.Events"};return void TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail})}const filter=this.__accumulateFilters(this.__consumers,!0);if(void 0!==filter)if(-1===this.__subscriptionId){let subscriptionId=TcHmi.System.Services.serverEventManager.subscribe(filter,this.__onEventReveived(),callback);subscriptionId?(this.__subscriptionId=subscriptionId,this.__onLocaleChangedDestroyer=TcHmi.EventProvider.register("onLocaleChanged",this.__onLocaleChanged())):TcHmi.Log.error("[Source=Framework, Module=TcHmi.Server] Reached maxium of parallel requests.")}else TcHmi.System.Services.serverEventManager.updateSubscription(this.__subscriptionId,filter,callback);else-1!==this.__subscriptionId&&(TcHmi.System.Services.serverEventManager.unsubscribe(this.__subscriptionId,callback),this.__subscriptionId=-1,this.__onLocaleChangedDestroyer&&(this.__onLocaleChangedDestroyer(),this.__onLocaleChangedDestroyer=null))}static __onEventReveived(){return data=>{data.error===TcHmi.Errors.NONE&&data.event?this.__feedSubscriptionConsumers(data.event):this.__consumers.forEach((consumer=>TcHmi.Callback.callSafeEx(consumer.subscriptionCallback,null,{error:data.error})))}}static __onLocaleChanged(){return()=>{this.__listEvents(this.__consumers)}}static __accumulateFilters(consumers,forSubscription){let filter;if(1===consumers.length)filter=forSubscription&&consumers[0].subscriptionCallback||!forSubscription&&consumers[0].listCallback?consumers[0].rawFilter:void 0;else{filter=[];for(let i=0,ii=consumers.length;i<ii;i++){if(forSubscription&&!consumers[i].subscriptionCallback||!forSubscription&&!consumers[i].listCallback)continue;const rawFilter=consumers[i].rawFilter;if(null===rawFilter||0===rawFilter.length){filter=null;break}filter.push(1===rawFilter.length?rawFilter[0]:rawFilter),i+1!==ii&&filter.push({logic:"OR"})}null!==filter&&0===filter.length&&(filter=void 0)}return filter}static parseServerEvent(rawEvent){switch(rawEvent.payloadType??Events.Type.Payload){case Events.Type.Message:let rawMessage=rawEvent.payload,message={type:Events.Type.Message,domain:rawEvent.domain,sourceDomain:rawMessage.domain,name:rawMessage.name,severity:rawMessage.severity,text:rawEvent.localizedString,timeRaised:new Date(rawMessage.timeRaised),timeReceived:new Date(rawEvent.timeReceived),params:rawMessage.params};return void 0!==rawEvent.sessionId&&(message.sessionId=rawEvent.sessionId),message;case Events.Type.Alarm:let rawAlarm=rawEvent.payload,alarm={type:Events.Type.Alarm,domain:rawEvent.domain,sourceDomain:rawAlarm.domain,name:rawAlarm.name,severity:rawAlarm.severity,id:rawAlarm.id,text:rawEvent.localizedString,timeRaised:new Date(rawAlarm.timeRaised),timeCleared:rawAlarm.timeCleared?new Date(rawAlarm.timeCleared):null,timeConfirmed:rawAlarm.timeConfirmed?new Date(rawAlarm.timeConfirmed):null,timeReceived:new Date(rawEvent.timeReceived),alarmState:rawAlarm.alarmState,confirmationState:rawAlarm.confirmationState,params:rawAlarm.params};return void 0!==rawEvent.sessionId&&(alarm.sessionId=rawEvent.sessionId),alarm;case Events.Type.Payload:let payloadEvent={type:Events.Type.Payload,domain:rawEvent.domain,name:rawEvent.name,timeReceived:new Date(rawEvent.timeReceived)};return void 0!==rawEvent.payload&&(payloadEvent.payload=rawEvent.payload),void 0!==rawEvent.sessionId&&(payloadEvent.sessionId=rawEvent.sessionId),payloadEvent}}static __toServerEventChangeType(alarmChangeType){if(void 0===alarmChangeType)return Events.ChangeType.MessageSent;switch(alarmChangeType){case TcHmi.Server.Events.ServerAlarmChangeType.Raise:return Events.ChangeType.AlarmRaised;case TcHmi.Server.Events.ServerAlarmChangeType.Change:return Events.ChangeType.AlarmChanged;case TcHmi.Server.Events.ServerAlarmChangeType.Dispose:return Events.ChangeType.AlarmDisposed}}static createEvent(event,callback){if(TcHmi.System.isParameterTypeInvalid(event,"event",{type:"object",required:"valueNeeded",expectArray:!1},"TcHmi.Server.Events",callback))return;const rawEvent={domain:event.domain,name:event.name,timeReceived:event.timeReceived.toISOString()};switch(event.sessionId&&(rawEvent.sessionId=event.sessionId),event.type){case Events.Type.Message:const rawMessage={name:event.name,domain:event.domain,severity:event.severity,timeRaised:event.timeRaised.toISOString(),params:event.params};rawEvent.payloadType=Events.Type.Message,rawEvent.payload=rawMessage,event.text&&(rawEvent.localizedString=event.text);break;case Events.Type.Payload:event.payload&&(rawEvent.payloadType=Events.Type.Payload,rawEvent.payload=event.payload)}Server.writeSymbol("CreateEvent",rawEvent,Server.handleResponse({error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,this,{error:res.error,details:res.details})}else TcHmi.Callback.callSafeEx(callback,this,{error:data.error,details:data.details})},success:()=>{TcHmi.Callback.callSafeEx(callback,this,{error:TcHmi.Errors.NONE})}}))}}Object.defineProperty(Events,"__consumers",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(Events,"__consumersToAdd",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(Events,"__registerTimeoutId",{enumerable:!0,configurable:!0,writable:!0,value:-1}),Object.defineProperty(Events,"__unregisterTimeoutId",{enumerable:!0,configurable:!0,writable:!0,value:-1}),Object.defineProperty(Events,"__subscriptionId",{enumerable:!0,configurable:!0,writable:!0,value:-1}),Object.defineProperty(Events,"__onLocaleChangedDestroyer",{enumerable:!0,configurable:!0,writable:!0,value:null}),Server.Events=Events,function(Events){let Type,Severity,AlarmState,ConfirmationState,ChangeType,ServerAlarmChangeType;!function(Type){Type[Type.Message=0]="Message",Type[Type.Alarm=1]="Alarm",Type[Type.Payload=2]="Payload"}(Type=Events.Type||(Events.Type={})),function(Severity){Severity[Severity.Verbose=0]="Verbose",Severity[Severity.Info=1]="Info",Severity[Severity.Warning=2]="Warning",Severity[Severity.Error=3]="Error",Severity[Severity.Critical=4]="Critical"}(Severity=Events.Severity||(Events.Severity={})),function(AlarmState){AlarmState[AlarmState.Raised=0]="Raised",AlarmState[AlarmState.Confirmed=1]="Confirmed",AlarmState[AlarmState.Cleared=2]="Cleared",AlarmState[AlarmState.ClearedAndConfirmed=3]="ClearedAndConfirmed",AlarmState[AlarmState.Invalid=4]="Invalid"}(AlarmState=Events.AlarmState||(Events.AlarmState={})),function(ConfirmationState){ConfirmationState[ConfirmationState.NotSupported=0]="NotSupported",ConfirmationState[ConfirmationState.NotRequired=1]="NotRequired",ConfirmationState[ConfirmationState.WaitForConfirmation=2]="WaitForConfirmation",ConfirmationState[ConfirmationState.Confirmed=3]="Confirmed",ConfirmationState[ConfirmationState.Reset=4]="Reset"}(ConfirmationState=Events.ConfirmationState||(Events.ConfirmationState={})),function(ChangeType){ChangeType[ChangeType.AlarmRaised=0]="AlarmRaised",ChangeType[ChangeType.AlarmChanged=1]="AlarmChanged",ChangeType[ChangeType.AlarmDisposed=2]="AlarmDisposed",ChangeType[ChangeType.MessageSent=3]="MessageSent"}(ChangeType=Events.ChangeType||(Events.ChangeType={})),function(ServerAlarmChangeType){ServerAlarmChangeType[ServerAlarmChangeType.Raise=0]="Raise",ServerAlarmChangeType[ServerAlarmChangeType.Change=1]="Change",ServerAlarmChangeType[ServerAlarmChangeType.Dispose=2]="Dispose"}(ServerAlarmChangeType=Events.ServerAlarmChangeType||(Events.ServerAlarmChangeType={})),Events.isAlarm=function(value){return value.type===Type.Alarm},Events.isMessage=function(value){return value.type===Type.Message},Events.isPayload=function(value){return value.type===Type.Payload}}(Events=Server.Events||(Server.Events={}));class ADS{static checkLicense(licenseId,callback=null){return Server.ADS.checkLicenseEx(licenseId,null,callback)}static checkLicenseEx(licenseId,requestOptions,callback=null){return licenseId?(TcHmi.Server.requestEx({requestType:"ReadWrite",commands:[{symbol:"ADS.CheckLicense",writeValue:licenseId,commandOptions:["SendErrorMessage"]}]},requestOptions,(data=>{if(data.error===TcHmi.Errors.NONE){let response=data.response;if(!response)return TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SERVER_RESPONSE_MISSING,details:{code:TcHmi.Errors.E_SERVER_RESPONSE_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_RESPONSE_MISSING],reason:"Missing response from server.",domain:"TcHmi.Server.ADS"}}),{code:TcHmi.Errors.E_SERVER_RESPONSE_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_RESPONSE_MISSING],reason:"Missing response from server.",domain:"TcHmi.Server.ADS"};if(response.error)return TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SERVER_RESPONSE_ERROR,details:{code:TcHmi.Errors.E_SERVER_RESPONSE_ERROR,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_RESPONSE_ERROR],reason:"Error in response from server with id: "+response.id,domain:"TcHmi.Server.ADS",errors:[response.error]}}),{code:TcHmi.Errors.E_SERVER_RESPONSE_ERROR,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_RESPONSE_ERROR],reason:"Error in response from server with id: "+response.id,domain:"TcHmi.Server.ADS",errors:[response.error]};let commands=response.commands;if(!commands)return TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SERVER_COMMANDS_MISSING,details:{code:TcHmi.Errors.E_SERVER_COMMANDS_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_COMMANDS_MISSING],reason:"Missing commands in response from server with id: "+response.id,domain:"TcHmi.Server.ADS"}}),{code:TcHmi.Errors.E_SERVER_COMMANDS_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_COMMANDS_MISSING],reason:"Missing commands in response from server with id: "+response.id,domain:"TcHmi.Server.ADS"};let command=null;for(let i=0,ii=commands.length;i<ii;i++){if(command=commands[i],"ADS.CheckLicense"===command.symbol){if(command.error)return TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SERVER_COMMAND_ERROR,details:{code:TcHmi.Errors.E_SERVER_COMMAND_ERROR,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_COMMAND_ERROR],reason:'Error in command for symbol: "ADS.CheckLicense" in response from server with id: '+response.id,domain:"TcHmi.Server.ADS",errors:[command.error]}}),{code:TcHmi.Errors.E_SERVER_COMMAND_ERROR,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_COMMAND_ERROR],reason:'Error in command for symbol: "ADS.CheckLicense" in response from server with id: '+response.id,domain:"TcHmi.Server.ADS",errors:[command.error]};break}command=null}if(!command)return TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SERVER_COMMAND_MISSING,details:{code:TcHmi.Errors.E_SERVER_COMMAND_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_COMMAND_MISSING],reason:'Missing command for symbol: "ADS.CheckLicense" in response from server with id: '+response.id,domain:"TcHmi.Server.ADS"}}),{code:TcHmi.Errors.E_SERVER_COMMAND_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_COMMAND_MISSING],reason:'Missing command for symbol: "ADS.CheckLicense" in response from server with id: '+response.id,domain:"TcHmi.Server.ADS"};let rv=command.readValue;return rv?(TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,count:rv.count,expireTimeUTC:rv.expireTimeUTC,result:rv.result}),{code:TcHmi.Errors.NONE,message:TcHmi.Errors[TcHmi.Errors.NONE]}):(TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SERVER_READVALUE_MISSING,details:{code:TcHmi.Errors.E_SERVER_READVALUE_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_READVALUE_MISSING],reason:'Missing property: "readValue" in command for symbol: "ADS.CheckLicense" in response from server with id: '+response.id,domain:"TcHmi.Server.ADS"}}),{code:TcHmi.Errors.E_SERVER_READVALUE_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_READVALUE_MISSING],reason:'Missing property: "readValue" in command for symbol: "ADS.CheckLicense" in response from server with id: '+response.id,domain:"TcHmi.Server.ADS"})}return TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.ERROR,details:{code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request failed.",domain:"TcHmi.Server.ADS",errors:data.details?[data.details]:void 0}}),{code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],reason:"Request failed.",domain:"TcHmi.Server.ADS",errors:data.details?[data.details]:void 0}})),{code:TcHmi.Errors.NONE,message:TcHmi.Errors[TcHmi.Errors.NONE]}):(TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_PARAMETER_INVALID,details:{code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],reason:'Parameter: "licenseId" must not be empty or undefined or null.',domain:"TcHmi.Server.ADS"}}),{code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],reason:'Parameter: "licenseId" must not be empty or undefined or null.',domain:"TcHmi.Server.ADS"})}}Server.ADS=ADS,function(ADS){let CheckLicenseResult;!function(CheckLicenseResult){CheckLicenseResult[CheckLicenseResult.S_VALID=0]="S_VALID",CheckLicenseResult[CheckLicenseResult.S_PENDING=515]="S_PENDING",CheckLicenseResult[CheckLicenseResult.E_LICENSENOTFOUND=-403769124]="E_LICENSENOTFOUND",CheckLicenseResult[CheckLicenseResult.E_LICENSEEXPIRED=-403769125]="E_LICENSEEXPIRED",CheckLicenseResult[CheckLicenseResult.E_LICENSEEXCEEDED=-403769126]="E_LICENSEEXCEEDED",CheckLicenseResult[CheckLicenseResult.E_LICENSEINVALID=-403769127]="E_LICENSEINVALID",CheckLicenseResult[CheckLicenseResult.E_LICENSESYSTEMID=-403769128]="E_LICENSESYSTEMID",CheckLicenseResult[CheckLicenseResult.E_LICENSENOTIMELIMIT=-403769129]="E_LICENSENOTIMELIMIT",CheckLicenseResult[CheckLicenseResult.E_LICENSEFUTUREISSUE=-403769130]="E_LICENSEFUTUREISSUE",CheckLicenseResult[CheckLicenseResult.E_LICENSETIMETOLONG=-403769131]="E_LICENSETIMETOLONG"}(CheckLicenseResult=ADS.CheckLicenseResult||(ADS.CheckLicenseResult={}))}(ADS=Server.ADS||(Server.ADS={}));class AuditTrail{static createAuditLogEntry(entry,callback){AuditTrail.createAuditLogEntryEx(entry,null,callback)}static createAuditLogEntryEx(entry,options,callback){if(!entry)return void TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_PARAMETER_INVALID,details:{code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],reason:'Parameter: "entry" must not be empty or undefined or null.',domain:"TcHmi.Server.AuditTrail"}});let requestOptions=options?.requestOptions??null;TcHmi.Server.requestEx({requestType:"ReadWrite",commands:[{symbol:"CreateEvent",version:2,writeValue:{name:"AuditLogEntry",domain:"TcHmiAuditTrail",payloadType:Events.Type.Payload,payload:{name:entry.name,contextDomain:entry.contextDomain??"TcHmiFramework",comment:entry.comment??"",data:entry.data}}}]},requestOptions,TcHmi.Server.handleResponse({success:()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE})},error:data=>{if(data.error===TcHmi.Errors.NONE&&data.results){let res=data.results[0];TcHmi.Callback.callSafeEx(callback,null,res)}else{let res={error:data.error};data.details&&(res.details=data.details),TcHmi.Callback.callSafeEx(callback,null,res)}}}))}}Server.AuditTrail=AuditTrail;Server.Domains=class{static watch(name,callback){let destroy,s=new TcHmi.Symbol("%s%ListDomains%/s%");return destroy=s.watchEx(null,(data=>{destroy||(destroy=data.destroy),data&&data.error===TcHmi.Errors.NONE?data.value&&data.value[name]?TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:tchmi_clone_object(data.value[name]),destroy:destroy}):TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.E_SERVER_DOMAIN_UNKNOWN,details:{code:TcHmi.Errors.E_SERVER_DOMAIN_UNKNOWN,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_DOMAIN_UNKNOWN],reason:"Domain is unknown!",domain:"TcHmi.Server.Domains",errors:data.details?[data.details]:void 0}}):TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details})})),()=>{destroy&&(destroy(),destroy=void 0),s?.destroy(),s=null}}}}(Server=TcHmi.Server||(TcHmi.Server={}))}(TcHmi||(TcHmi={})),function(TcHmi){
/**
     * Provides functions for manipulating HTML elements.
     * @preserve (Part of the public API)
     */
class StyleProvider{
/**
         * Returns the given computed CSS property on the first given element. Does return values set by CSS files, the other Style APIs and AnimationProvider
         * Unset or unknown CSS values will not be set in the result object.
         * @param element The jQuery collection or HTML/SVG element(s) to operate with.
         * @param propertyNameOrPropertyNames The CSS property (string) or properties (string array) to get.
         * @preserve (Part of the public API)
         */
static getComputedElementStyle(element,propertyNameOrPropertyNames){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to get style. System not ready.");return TcHmi.System.Services.styleManager.__getElementStyle(element,propertyNameOrPropertyNames,!0)}
/**
         * Returns the given CSS property on the first given element. Does not return values set by CSS files, the other Style APIs and AnimationProvider
         * @param element The jQuery collection or HTML/SVG element(s) to operate with.
         * @param propertyNameOrPropertyNames The CSS property (string) or properties (string array) to get.
         * @preserve (Part of the public API)
         */static getSimpleElementStyle(element,propertyNameOrPropertyNames){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to get style. System not ready.");return TcHmi.System.Services.styleManager.__getElementStyle(element,propertyNameOrPropertyNames,!1)}
/**
         * Style setter for simple styles in a collection of JQuery elements or single HTML or SVG Elements.
         * @param element The jQuery collection or HTML/SVG element(s) to operate with.
         * @param propertyNameOrPropertyNames The CSS property to process or a dictionary of property value pairs.
         * @param valueOrValues The value for the CSS property or an array of values. Only used if second parameter is no object.
         * @preserve (Part of the public API)
         */static setSimpleElementStyle(element,propertyNameOrPropertyNames,valueOrValues=null){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to set style. System not ready.");TcHmi.System.Services.styleManager.__setSimpleElementStyle(element,propertyNameOrPropertyNames,valueOrValues)}static processGenericStyle(controlName,selector,propertyName,value=null){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to set style. System not ready.");TcHmi.System.Services.styleManager.processGenericStyle(controlName,selector,propertyName,value)}
/**
         * Resolves a SolidColor object to a string representation for use as css color property.
         * Has to be called with a valid SolidColor. Use isSolidColor to check
         * @param colorObject The SolidColor to resolve.
         * @preserve (Part of the public API)
         */static resolveSolidColorAsCssValue(colorObject){return"none"===colorObject.color.toLowerCase()?"transparent":colorObject.color}
/**
         * Resolve a SolidColor object to a RGBAColor object.
         * Has to be called with a valid SolidColor. Use isSolidColor to check
         * @param colorObject The SolidColor to resolve.
         * @preserve (Part of the public API)
         */static resolveSolidColorAsRGBA(colorObject){const canvas=document.createElement("canvas");canvas.width=canvas.height=1;const ctx=canvas.getContext("2d",{willReadFrequently:!0});ctx.clearRect(0,0,1,1),ctx.fillStyle=StyleProvider.resolveSolidColorAsCssValue(colorObject),ctx.fillRect(0,0,1,1);const rgba=ctx.getImageData(0,0,1,1).data;return{r:rgba[0],g:rgba[1],b:rgba[2],a:rgba[3]}}
/**
         * Normalize a SolidColor object
         * Every supported color format will be returned as
         * for example '#ff0000' or with transparency as 'rgba(255, 0, 0, 0.333)'
         * Has to be called with a valid SolidColor. Use isSolidColor to check
         * @param colorObject The SolidColor to normalize.
         * @preserve (Part of the public API)
         */static normalizeColorAsCssValue(colorObject){const savedColor=StyleProvider.__normalizedColorMap.get(colorObject.color);if(savedColor)return savedColor;const ctx=document.createElement("canvas").getContext("2d");ctx.strokeStyle=StyleProvider.resolveSolidColorAsCssValue(colorObject);const resolvedColor=ctx.strokeStyle;return StyleProvider.__normalizedColorMap.set(colorObject.color,resolvedColor),resolvedColor}
/**
         * Resolves a LinearGradientColor object to a string representation for use in css background-image property.
         * Has to be called with a valid LinearGradientColor. Use isLinearGradientColor to check
         * @param colorObject The LinearGradientColor to resolve.
         * @preserve (Part of the public API)
         */static resolveLinearGradientColorAsCssValue(colorObject){let angle=colorObject.angle;null==angle&&(angle=0);let backgroundCssString="linear-gradient(";if(backgroundCssString+=angle+"deg",colorObject.stopPoints)for(let i=0,ii=colorObject.stopPoints.length;i<ii;i++){let stopPoint=colorObject.stopPoints[i];void 0!==stopPoint.stop&&null!==stopPoint.stop?backgroundCssString+=","+stopPoint.color+" "+stopPoint.stop:backgroundCssString+=","+stopPoint.color}return backgroundCssString+=")",backgroundCssString}
/**
         * Style Processor for background.
         * @param element The jQuery collection or HTML/SVG element(s) to operate with.
         * @param valueNew The new value for the background.
         * @preserve (Part of the public API)
         */static processBackground(element,valueNew){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to set style. System not ready.");TcHmi.System.Services.styleManager.processBackground(element,valueNew)}
/**
         * Style Processor for background colors and gradients.
         * @param element The jQuery collection or HTML/SVG element(s) to operate with.
         * @param valueNew The new value for the background.
         * @preserve (Part of the public API)
         */static processBackgroundColor(element,valueNew){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to set style. System not ready.");TcHmi.System.Services.styleManager.processBackground(element,{color:valueNew})}
/**
         * Style Processor for background images.
         * @param element The jQuery collection or HTML/SVG element(s) to operate with.
         * @param valueNew The URL of the image.
         * @preserve (Part of the public API)
         */static processBackgroundImage(element,valueNew){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to set style. System not ready.");TcHmi.System.Services.styleManager.processBackground(element,{image:valueNew})}
/**
         * Style processor for SVG fill color.
         * @param element The jQuery collection or HTML/SVG element(s) to operate with.
         * @param valueNew The new fill color.
         * @preserve (Part of the public API)
         * HTMLElement allowed because default jQuery type is HTMLElement
         */static processFillColor(element,valueNew){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to set style. System not ready.");TcHmi.System.Services.styleManager.processFillColor(element,valueNew)}
/**
         * Style processor for SVG stroke color.
         * @param element The jQuery collection or HTML/SVG element(s) to operate with.
         * @param valueNew The new stroke color.
         * @preserve (Part of the public API)
         * HTMLElement allowed because default jQuery type is HTMLElement
         */static processStrokeColor(element,valueNew){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to set style. System not ready.");TcHmi.System.Services.styleManager.processStrokeColor(element,valueNew)}
/**
         * Style processor for text color.
         * @param element The jQuery collection or HTML/SVG element(s) to operate with.
         * @param valueNew The new text color.
         * @preserve (Part of the public API)
         */static processTextColor(element,valueNew){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to set style. System not ready.");TcHmi.System.Services.styleManager.processTextColor(element,valueNew)}
/**
         * Style processor for border color.
         * @param element The jQuery collection or HTML/SVG element(s) to operate with.
         * @param valueNew The new border color.
         * @preserve (Part of the public API)
         */static processBorderColor(element,valueNew){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to set style. System not ready.");TcHmi.System.Services.styleManager.processBorderColor(element,valueNew)}
/**
         * Style processor for border width.
         * @param element The jQuery collection or HTML/SVG element(s) to operate with.
         * @param valueNew The new border widths.
         * @preserve (Part of the public API)
         */static processBorderWidth(element,valueNew){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to set style. System not ready.");TcHmi.System.Services.styleManager.processBorderWidth(element,valueNew)}
/**
         * Style processor for border radius.
         * @param element The jQuery collection or HTML/SVG element(s) to operate with.
         * @param valueNew The new border radii.
         * @preserve (Part of the public API)
         */static processBorderRadius(element,valueNew){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to set style. System not ready.");TcHmi.System.Services.styleManager.processBorderRadius(element,valueNew)}
/**
         * Style processor for border style.
         * @param element The jQuery collection or HTML/SVG element(s) to operate with.
         * @param valueNew The new border styles.
         * @preserve (Part of the public API)
         */static processBorderStyle(element,valueNew){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to set style. System not ready.");TcHmi.System.Services.styleManager.processBorderStyle(element,valueNew)}
/**
         * Style processor for box shadow.
         * @param element The jQuery collection or HTML/SVG element(s) to operate with.
         * @param valueNew The new border styles.
         * @preserve (Part of the public API)
         */static processBoxShadow(element,valueNew){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to set style. System not ready.");TcHmi.System.Services.styleManager.processBoxShadow(element,valueNew)}
/**
         * Style processor for font family.
         * @param element The jQuery collection or HTML/SVG element(s) to operate with.
         * @param valueNew The new font family.
         * @preserve (Part of the public API)
         */static processFontFamily(element,valueNew){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to set style. System not ready.");TcHmi.System.Services.styleManager.processFontFamily(element,valueNew)}
/**
         * Style processor for font size.
         * @param element The jQuery collection or HTML/SVG element(s) to operate with.
         * @param valueNew The new font size.
         * @param unitNew The new font size unit. Defaults to "px".
         * @preserve (Part of the public API)
         */static processFontSize(element,valueNew,unitNew="px"){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to set style. System not ready.");TcHmi.System.Services.styleManager.processFontSize(element,valueNew,unitNew)}
/**
         * Style processor for font style.
         * @param element The jQuery collection or HTML/SVG element(s) to operate with.
         * @param valueNew The new font style. Allowed values are "Normal", "Italic" and "Oblique".
         * @preserve (Part of the public API)
         */static processFontStyle(element,valueNew){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to set style. System not ready.");TcHmi.System.Services.styleManager.processFontStyle(element,valueNew)}
/**
         * Style processor for font weight.
         * @param element The jQuery collection or HTML/SVG element(s) to operate with.
         * @param valueNew The new font weight. Allowed values are "Normal" and "Bold".
         * @preserve (Part of the public API)
         */static processFontWeight(element,valueNew){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to set style. System not ready.");TcHmi.System.Services.styleManager.processFontWeight(element,valueNew)}
/**
         * Style processor for visibility.
         * Visibility also affects pointer events, i.e. a hidden element will not receive mouse click events.
         * Hidden still uses space in fluid calculations, collapsed is ignored there.
         * @param element The jQuery collection or HTML/SVG element(s) to operate with.
         * @param valueNew The new visibility. Allowed values are "Visible", "Collapsed" and "Hidden". Hidden still uses space in fluid calculations, collapsed is ignored there.
         * @preserve (Part of the public API)
         */static processVisibility(element,valueNew){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to set style. System not ready.");TcHmi.System.Services.styleManager.processVisibility(element,valueNew)}
/**
         * Style processor for horizontal alignment. This aligns the content of the target element, not the target element itself.
         * @param element The jQuery collection or HTML/SVG element(s) to operate with.
         * @param valueNew The new horizontal alignment. Allowed values are "Left", "Center" and "Right".
         * @preserve (Part of the public API)
         */static processContentHorizontalAlignment(element,valueNew){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to set style. System not ready.");TcHmi.System.Services.styleManager.processContentHorizontalAlignment(element,valueNew)}
/**
         * Style processor for vertical alignment. This aligns the content of the target element, not the target element itself.
         * @param element The jQuery collection or HTML/SVG element(s) to operate with.
         * @param valueNew The new vertical alignment. Allowed values are "Top", "Center" and "Bottom".
         * @preserve (Part of the public API)
         */static processContentVerticalAlignment(element,valueNew){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to set style. System not ready.");TcHmi.System.Services.styleManager.processContentVerticalAlignment(element,valueNew)}
/**
         * Style processor for content padding.
         * Note: Percentages always refer to the width of the element, never its height (even for top and bottom).
         * @param element The jQuery collection or HTML/SVG element(s) to operate with.
         * @param valueNew The new content padding.
         * @preserve (Part of the public API)
         */static processContentPadding(element,valueNew){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to set style. System not ready.");TcHmi.System.Services.styleManager.processContentPadding(element,valueNew)}
/**
         * Theme processor for transforms.
         * @param element The jQuery collection or HTML/SVG element(s) to operate with.
         * @param valueNew The new transform value or an array of transform values.
         * @param order If this parameter is passed, the transforms in valueNew will replace the transform at the specified place, instead of replacing all transforms.
         * @preserve (Part of the public API)
         */static processTransform(element,valueNew,order){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to set style. System not ready.");TcHmi.System.Services.styleManager.processTransform(element,valueNew,order)}
/**
         * Return the width of the given text in px as it would appear on the given element.
         * Make sure the element you operate with is attached to the DOM.
         * The function uses the computed values of the element which only exist when an element is attached to the DOM.
         * This function only works with single line text.
         * @param text The text to measure.
         * @param element The jQuery collection or HTML/SVG element(s) to operate with.
         * @preserve (Part of the public API)
         */static getTextWidth(text,element){if(!TcHmi.System.Services.styleManager)throw new Error("Failed to set style. System not ready.");return TcHmi.System.Services.styleManager.getTextWidth(text,element)}}Object.defineProperty(StyleProvider,"__normalizedColorMap",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),TcHmi.StyleProvider=StyleProvider}(TcHmi||(TcHmi={})),function(TcHmi){
/**
     * Provides methods to read and write symbol values and schemas.
     * @template ST Type of the value in the symbol.
     * @preserve (Part of the public API)
     */
class Symbol{constructor(expressionOrExpressionObject){Object.defineProperty(this,"__symbol",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.__symbol=new TcHmi.System.Symbol(expressionOrExpressionObject)}
/**
         * Reads the value of the current symbol.
         * return undefined if the symbol is not available
         * @returns A copy of the value
         * @template T Type of the read value. Falls back to type of the symbol.
         * @preserve (Part of the public API)
         */read(){if(!this.__symbol)return;let res;return this.__symbol.isProcessedAsync()?(TcHmi.Log.warn('[Source=Framework, Module=TcHmi.Symbol] The non static function "TcHmi.Symbol.read()" does no longer support synchronous access to this symbol. Please use the non static function "TcHmi.Symbol.readEx(callback ?: (this: TcHmi.Symbol, data: TcHmi.Symbol.IReadResultObject | TcHmi.Symbol.IServerReadResultObject) => void)" instead.'),res):(this.__symbol.read((data=>{data.error===TcHmi.Errors.NONE&&(res=data.value)})),res)}
/**
         * Reads the value of the current symbol and raises a callback with a copy of the result.
         * Returns a destroy function to terminate reading of asynchronous values.
         * @param callback with gets a copy of the value
         * @template T Type of the read value. Falls back to type of the symbol.
         * @preserve (Part of the public API)
         */readEx(callback){return this.readEx2(null,callback)}
/**
         * Reads the value of the current symbol and raises a callback with a copy of the result.
         * Returns a destroy function to terminate reading of asynchronous values.
         * @param options Options for symbol handling
         * @param callback with gets a copy of the value
         * @template T Type of the read value. Falls back to type of the symbol.
         * @preserve (Part of the public API)
         */readEx2(options,callback){const callstackLinker=TcHmi.System.Callback.createTask("Symbol.read>"+this.getExpression());let __this=this,destroy=this.__symbol.readEx(options,(data=>{const result={error:data.error};void 0!==data.value&&(result.value=data.value),data.details&&(result.details=data.details),Symbol.isIServerReadResultObject(data)&&(result.response=data.response),callstackLinker.run((()=>{TcHmi.Callback.callSafeEx(callback,__this,result)}))}));return()=>{destroy?.(),destroy=null}}
/**
         * Writes the value of the current symbol.
         * Returns a destroy function to terminate writing of asynchronous values.
         * @param value The new value
         * @param callback Callback will be called after success or failure
         * @template T Type of the write value. Falls back to type of the symbol.
         * @preserve (Part of the public API)
         */write(value,callback){return this.writeEx(value,null,callback)}
/**
         * Writes the value of the current symbol.
         * Returns a destroy function to terminate writing of asynchronous values.
         * @param value Value to write
         * @param options Options for symbol handling
         * @param callback Callback will be called after success or failure
         * @template T Type of the write value. Falls back to type of the symbol.
         * @preserve (Part of the public API)
         */writeEx(value,options,callback){const callstackLinker=TcHmi.System.Callback.createTask("Symbol.write>"+this.getExpression());let __this=this,destroy=this.__symbol.writeEx2(value,options,null,(data=>{const result={error:data.error};void 0!==data.value&&(result.value=data.value),data.details&&(result.details=data.details),Symbol.isIServerReadResultObject(data)&&(result.response=data.response),callstackLinker.run((()=>{TcHmi.Callback.callSafeEx(callback,__this,result)}))}));return()=>{destroy?.(),destroy=null}}
/**
         * Watches for changes of the current symbol and raises the callback in case of a change.
         * Returns a destroy function to remove the watch.
         * @param callback Callback will be called with each change of the value of the symbol
         * @template T Type of the value to watch. Falls back to type of the symbol.
         * @preserve (Part of the public API)
         */watch(callback){return this.watchEx(null,callback)}
/**
         * Watches for changes of the current symbol and raises the callback in case of a change.
         * Returns a destroy function to remove the watch.
         * @param options Options for symbol handling
         * @param callback Callback will be called with each change of the value of the symbol
         * @template T Type of the value to watch. Falls back to type of the symbol.
         * @preserve (Part of the public API)
         */watchEx(options,callback){const callstackLinker=TcHmi.System.Callback.createTask("Symbol.watch>"+this.getExpression());let destroy=this.__symbol.watchEx(options,(data=>{callstackLinker.run((()=>{Symbol.isIServerReadResultObject(data)?TcHmi.Callback.callSafeEx(callback,this,{error:data.error,value:data.value,response:data.response,destroy:data.destroy,details:data.details}):TcHmi.Callback.callSafeEx(callback,this,{error:data.error,value:data.value,destroy:data.destroy,details:data.details})}))}));return()=>{destroy?.(),destroy=null}}
/**
         * Returns the underlying TcHmi.SymbolExpression object.
         * @preserve (Part of the public API)
         */getExpression(){return this.__symbol.getExpression()}
/**
         * Resolves the expression.
         * @param callback Callback will be called after success (with the schema) or failure
         * @preserve (Part of the public API)
         */resolveExpression(callback){this.__symbol.resolveExpression(callback)}
/**
         * Watches the expression.
         * @param callback Callback will be called after success (with the schema) or failure
         * @preserve (Part of the public API)
         */watchExpression(callback){return this.__symbol.watchExpression(callback)}
/**
         * Resolves the schema of the current symbol.
         * @param callback Callback will be called after success (with the schema) or failure
         * @preserve (Part of the public API)
         */resolveSchema(callback){let __this=this;const callstackLinker=TcHmi.System.Callback.createTask("Symbol.resolveSchema>"+this.getExpression());this.__symbol.resolveSchema((function(data){callstackLinker.run((()=>{data.error===TcHmi.Errors.NONE?TcHmi.Callback.callSafeEx(callback,__this,{error:TcHmi.Errors.NONE,schema:data.schema}):TcHmi.Callback.callSafeEx(callback,__this,{error:data.error,details:data.details})}))}))}
/**
         * Resolves a dictionary of PLC (?) attributes from the underlying schema.
         * @param callback Callback will be called after success (with the attributes) or failure
         * @preserve (Part of the public API)
         */resolveAttributes(callback){this.__symbol.resolveAttributes((data=>{TcHmi.Callback.callSafeEx(callback,this,data)}))}
/**
         * Resolves a PLC (?) attribute by name from the underlying schema.
         * @param name Name of the PLC (?) attribute
         * @param callback Callback will be called after success (with the attribute) or failure
         * @preserve (Part of the public API)
         */resolveAttribute(name,callback){this.__symbol.resolveAttribute(name,(data=>{TcHmi.Callback.callSafeEx(callback,this,data)}))}
/**
         * Resolves a list of available versions of the symbol.
         * @param callback Callback will be called after success (with the list of version) or failure
         * @preserve (Part of the public API)
         */resolveVersions(callback){this.__symbol.resolveVersions((data=>{TcHmi.Callback.callSafeEx(callback,this,data)}))}
/**
         * Watches a list of available versions of the symbol.
         * @param callback Callback will be called after success (with the list of version) or failure
         * @preserve (Part of the public API)
         */watchVersions(callback){return this.__symbol.watchVersions((data=>{TcHmi.Callback.callSafeEx(callback,this,data)}))}
/**
         * Resolves the symbols meta data
         * @param callback Callback will be called after success (with the meta data) or failure
         * @preserve (Part of the public API)
         */resolveMetaData(callback){this.__symbol.resolveMetaData((data=>{TcHmi.Callback.callSafeEx(callback,this,data)}))}
/**
         * Watches for changes of the symbols meta data
         * @param callback Callback will be called after success (with the meta data) or failure
         * @preserve (Part of the public API)
         */watchMetaData(callback){return this.__symbol.watchMetaData((data=>{TcHmi.Callback.callSafeEx(callback,this,data)}))}
/**
         * Checks if this symbol exists
         * @param callback Callback will be called after success or failure
         * @preserve (Part of the public API)
         */exists(callback){this.__symbol.exists((data=>{data.error===TcHmi.Errors.NONE?TcHmi.Callback.callSafeEx(callback,this,{error:TcHmi.Errors.NONE,result:data.result}):TcHmi.Callback.callSafeEx(callback,this,{error:data.error,details:data.details})}))}isProcessedAsync(){return this.__symbol.isProcessedAsync()}
/**
         * Destroys the current symbol object.
         * @preserve (Part of the public API)
         */destroy(){this.__symbol.destroy()}
/**
         * Reads the value of a symbol by name and type.
         * This function throws an exception if the symbol type is not supported.
         * @param name Name of the symbol (without for example %i% marker)
         * @param type Type of the symbol as enum value
         * @template T Type of the read value.
         * @preserve (Part of the public API)
         */static read(name,type){let typeString,res;switch(type){case SymbolType.Internal:typeString="i";break;case SymbolType.LocalizedText:typeString="l";break;case SymbolType.PartialParam:typeString="pp";break;case SymbolType.Server:typeString="s";break;case SymbolType.TemplateParam:typeString="tp";break;case SymbolType.Control:typeString="ctrl";break;case SymbolType.Context:typeString="ctx";break;case SymbolType.ThemedResource:typeString="tr";break;default:throw new TypeError("Unsupported SymbolType="+(TcHmi.SymbolType[type]?TcHmi.SymbolType[type]:type)+".")}let s=new Symbol("%"+typeString+"%"+name+"%/"+typeString+"%");return s.__symbol.isProcessedAsync()?(TcHmi.Log.warn('[Source=Framework, Module=TcHmi.Symbol] The static function "TcHmi.Symbol.read(name: string, type: TcHmi.SymbolType)" does no longer support synchronous access to this symbol. Please use the non static function "TcHmi.Symbol.readEx2(expression: string, callback?: (this: void, data: TcHmi.Symbol.IReadResultObject)" instead.'),s.destroy(),res):(s.readEx((data=>{data.error===TcHmi.Errors.NONE&&(res=data.value),s.destroy()})),res)}
/**
         * Reads the value of a symbol by expression.
         * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
         * @template T Type of the read value.
         * @preserve (Part of the public API)
         */static readEx(expressionOrExpressionObject){let s=new Symbol(expressionOrExpressionObject);if(s.__symbol.isProcessedAsync())return TcHmi.Log.warn('[Source=Framework, Module=TcHmi.Symbol] The static function "TcHmi.Symbol.readEx(expression: string)" does no longer support synchronous access to this symbol. Please use the non static function "TcHmi.Symbol.readEx2(expression: string, callback?: (this: void, data: TcHmi.Symbol.IReadResultObject)" instead.'),void s.destroy();let res=s.read();return s.destroy(),res}
/**
         * Reads the value of a symbol by expression and raises a callback with the result.
         * Returns a destroy function to terminate reading of asynchronous values.
         * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
         * @param callback Callback will be called after success (with the value) or failure
         * @template T Type of the read value.
         * @preserve (Part of the public API)
         */static readEx2(expressionOrExpressionObject,callback){return Symbol.readEx3(expressionOrExpressionObject,null,callback)}
/**
         * Reads the value of a symbol by expression and raises a callback with the result.
         * Returns a destroy function to terminate reading of asynchronous values.
         * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
         * @param options Options for symbol handling
         * @param callback Callback will be called after success or failure
         * @template T Type of the read value.
         * @preserve (Part of the public API)
         */static readEx3(expressionOrExpressionObject,options,callback){let s=new Symbol(expressionOrExpressionObject),destroy=s.readEx2(options,(data=>{const result={error:data.error,value:data.value};data.details&&(result.details=data.details),Symbol.isIServerReadResultObject(data)&&(result.response=data.response),TcHmi.Callback.callSafeEx(callback,null,result),s&&s.destroy(),s=null}));return()=>{destroy?.(),destroy=null}}
/**
         * Writes the value of a symbol by name and type.
         * This function throws an exception if the symbol type is not supported.
         * Returns a destroy function to terminate writing of asynchronous values.
         * @param name Name of the symbol (without for example %i% marker)
         * @param type Type of the symbol as enum value
         * @param value The new value
         * @param callback Callback will be called after success or failure
         * @template T Type of the write value.
         * @preserve (Part of the public API)
         */static write(name,type,value,callback){let typeString;switch(type){case SymbolType.Internal:typeString="i";break;case SymbolType.LocalizedText:typeString="l";break;case SymbolType.PartialParam:typeString="pp";break;case SymbolType.Server:typeString="s";break;case SymbolType.TemplateParam:typeString="tp";break;case SymbolType.Control:typeString="ctrl";break;case SymbolType.Context:typeString="ctx";break;case SymbolType.ThemedResource:typeString="tr";break;default:throw new TypeError("Unsupported SymbolType="+(TcHmi.SymbolType[type]?TcHmi.SymbolType[type]:type)+".")}let s=new Symbol("%"+typeString+"%"+name+"%/"+typeString+"%"),destroy=s.write(value,(data=>{const result={error:data.error,value:data.value};data.details&&(result.details=data.details),Symbol.isIServerReadResultObject(data)&&(result.response=data.response),TcHmi.Callback.callSafeEx(callback,null,result),s&&s.destroy(),s=null}));return()=>{destroy?.(),destroy=null}}
/**
         * Writes the value of a symbol by expression.
         * Returns a destroy function to terminate writing of asynchronous values.
         * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
         * @param value Value to write
         * @param callback Callback will be called after success or failure
         * @template T Type of the write value.
         * @preserve (Part of the public API)
         */static writeEx(expressionOrExpressionObject,value,callback){return Symbol.writeEx2(expressionOrExpressionObject,value,null,callback)}
/**
         * Writes the value of a symbol by expression.
         * Returns a destroy function to terminate writing of asynchronous values.
         * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
         * @param value Value to write
         * @param options Options for symbol handling
         * @param callback Callback will be called after success or failure
         * @template T Type of the write value.
         * @preserve (Part of the public API)
         */static writeEx2(expressionOrExpressionObject,value,options,callback){let s=new Symbol(expressionOrExpressionObject),destroy=s.writeEx(value,options,(data=>{const result={error:data.error};void 0!==data.value&&(result.value=data.value),data.details&&(result.details=data.details),Symbol.isIServerReadResultObject(data)&&(result.response=data.response),TcHmi.Callback.callSafeEx(callback,null,result),s?.destroy(),s=null}));return()=>{destroy?.(),destroy=null}}
/**
         * Returns function references which are handled by the symbol consumer.
         *
         * @preserve (Part of the public API)
         */getReferenceDelegation(){return this.__symbol.getReferenceDelegation()}
/**
         * Resolves the expression.
         * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
         * @param callback Callback will be called after success (with the schema) or failure
         * @preserve (Part of the public API)
         */static resolveExpression(expressionOrExpressionObject,callback){let s=new Symbol(expressionOrExpressionObject);s.resolveExpression((data=>{TcHmi.Callback.callSafeEx(callback,null,data),s.destroy()}))}
/**
         * Resolves the schema of the current symbol.
         * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
         * @param callback Callback will be called after success or failure
         * @preserve (Part of the public API)
         */static resolveSchema(expressionOrExpressionObject,callback){let s=new Symbol(expressionOrExpressionObject);s.resolveSchema((function(data){data.error===TcHmi.Errors.NONE?TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,schema:data.schema}):TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details}),s.destroy()}))}
/**
         * Resolves a dictionary of PLC (?) attributes from the underlying schema.
         * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
         * @param callback Callback will be called after success or failure
         * @preserve (Part of the public API)
         */static resolveAttributes(expressionOrExpressionObject,callback){const s=new Symbol(expressionOrExpressionObject);s.resolveAttributes((data=>{TcHmi.Callback.callSafeEx(callback,null,data),s.destroy()}))}
/**
         * Resolves a PLC (?) attribute by name from the underlying schema.
         * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
         * @param name Name of the PLC (?) attribute
         * @param callback Callback will be called after success or failure
         * @preserve (Part of the public API)
         */static resolveAttribute(expressionOrExpressionObject,name,callback){const s=new Symbol(expressionOrExpressionObject);s.resolveAttribute(name,(data=>{TcHmi.Callback.callSafeEx(callback,null,data),s.destroy()}))}
/**
         * Resolves a list of available versions of the symbol.
         * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
         * @param callback Callback will be called after success (with the list of version) or failure
         * @preserve (Part of the public API)
         */static resolveVersions(expressionOrExpressionObject,callback){new Symbol(expressionOrExpressionObject).resolveVersions((data=>{TcHmi.Callback.callSafeEx(callback,this,data)}))}
/**
         * Resolves the symbols meta data
         * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
         * @param callback Callback will be called after success (with the meta data) or failure
         * @preserve (Part of the public API)
         */static resolveMetaData(expressionOrExpressionObject,callback){new Symbol(expressionOrExpressionObject).resolveMetaData((data=>{TcHmi.Callback.callSafeEx(callback,this,data)}))}
/**
         * Checks if a symbol exists.
         * @param expressionOrExpressionObject Expression meta data object including the expression itself and further information like context or string.
         * @param callback Callback will be called after success or failure
         * @preserve (Part of the public API)
         */static exists(expressionOrExpressionObject,callback){let s=new Symbol(expressionOrExpressionObject);s.exists((data=>{data.error===TcHmi.Errors.NONE?TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,result:data.result}):TcHmi.Callback.callSafeEx(callback,null,{error:data.error,details:data.details}),s.destroy()}))}
/**
         * Returns true if the expression is a valid symbol expression
         * @param expression Expression for the symbol
         * @preserve (Part of the public API)
         */static isSymbolExpression(expression){if("string"!=typeof expression)return!1;const exprMatch=expression.match(TcHmi.SymbolExpression.RegExpExpression);return null!=exprMatch&&0===exprMatch.index}
/**
         * Returns true if expression is escaped with $ in opening expression tag before type token.
         * Example:
         * %$i%... -> true
         * %i%...  -> false
         * @param expression Expression for the symbol
         * @preserve (Part of the public API)
         */static isSymbolExpressionEscaped(expression){if("string"!=typeof expression)return!1;const exprMatch=expression.match(TcHmi.SymbolExpression.RegExpExpressionEscaped);return null!=exprMatch&&0===exprMatch.index}
/**
         * Will remove one escape level from expression and return it.
         * @param expression Expression for the symbol
         * @preserve (Part of the public API)
         */static escapeSymbolExpression(expression){const exprMatch=expression.match(TcHmi.SymbolExpression.RegExpExpressionEscaped);return null!=exprMatch&&0===exprMatch.index?expression.replace("$",""):expression}static isIServerReadResultObject(data){return"response"in data}}let SymbolType;TcHmi.Symbol=Symbol,function(Symbol){Symbol.ObjectResolver=
/**
         * @preserve (Part of the public API)
         */
class{constructor(obj,parentControl){Object.defineProperty(this,"__obj",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__parentControl",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.__obj=obj,this.__parentControl=parentControl}__resolve(obj,callback){const clone=tchmi_clone_object(obj);let details,error=TcHmi.Errors.NONE;const symbolInfoByExpression=new Map;let loopActive=!1,pending=0,destroyOnInitialized=null;const process=()=>{pending>0||(error===TcHmi.Errors.NONE?TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:tchmi_clone_object(clone)}):TcHmi.Callback.callSafeEx(callback,null,{error:error,details:details}))},read=symbolInfo=>{symbolInfo.initialized||(pending++,symbolInfo.obj.readEx((function(data){if(data.error===TcHmi.Errors.NONE){symbolInfo.value=data.value,symbolInfo.initialized=!0;for(const[obj,keys]of symbolInfo.refs)for(const key of keys)obj&&null!=key&&(obj[key]=symbolInfo.value,resolveSymbolInfo(obj,key,obj[key]));if(!loopActive)for(const symbolInfo of symbolInfoByExpression.values())loopActive=!0,read(symbolInfo),loopActive=!1;pending>0&&pending--,loopActive||process()}else{if(error=TcHmi.Errors.ERROR,details||(details={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],domain:"TcHmi.Symbol.ObjectResolver"}),data.details){details.errors||(details.errors=[]);let exists=!1;for(let i=0,ii=details.errors.length;i<ii;i++)if(tchmi_equal(details.errors[i],data.details)){exists=!0;break}exists||details.errors.push(data.details)}pending>0&&pending--,loopActive||process()}})))},resolveSymbolInfo=(o,k,value)=>{if(value)if("object"==typeof value){if(__tchmi_is_instanced_object(value))return;if(Array.isArray(value))for(let i=0,ii=value.length;i<ii;i++)resolveSymbolInfo(value,i,value[i]);else{if(value&&value.objectType&&"Symbol"===value.objectType)return;for(let key in value)resolveSymbolInfo(value,key,value[key])}}else if("string"==typeof value){if(!o)return;if(null==k)return;let isSymbolExpression=TcHmi.Symbol.isSymbolExpression(value),isSymbolExpressionEscaped=TcHmi.Symbol.isSymbolExpressionEscaped(value);if(isSymbolExpression&&!isSymbolExpressionEscaped){let symbolInfoNew=null,symbolInfo=symbolInfoByExpression.get(value);if(symbolInfo){symbolInfo.initialized&&(o[k]=symbolInfo.value);let ref=symbolInfo.refs.get(o);ref?ref.push(k):symbolInfo.refs.set(o,[k])}else{let symbol=new TcHmi.Symbol(value),refs=new Map;refs.set(o,[k]),symbolInfoNew={obj:symbol,refs:refs,initialized:!1},symbolInfoByExpression.set(value,symbolInfoNew)}}else isSymbolExpressionEscaped&&(o[k]=TcHmi.Symbol.escapeSymbolExpression(value))}},run=()=>{if(symbolInfoByExpression.size>0){let oneIsUnInitialized=!1;for(const symbolInfo of symbolInfoByExpression.values())loopActive=!0,read(symbolInfo),loopActive=!1,oneIsUnInitialized||(oneIsUnInitialized=!symbolInfo.initialized);oneIsUnInitialized||process()}else process()};if(resolveSymbolInfo(null,null,clone),this.__parentControl&&symbolInfoByExpression.size>0){let partial=null,parent=this.__parentControl;for(;null!==parent;){let parentType=parent.getType();if(("TcHmi.Controls.System.TcHmiView"===parentType||"TcHmi.Controls.System.TcHmiContent"===parentType||"TcHmi.Controls.System.TcHmiUserControl"===parentType)&&!partial){partial=parent;break}parent=parent.getParent()}partial&&!partial.getIsInitialized()?destroyOnInitialized=TcHmi.EventProvider.register(partial.getId()+".onInitialized",(e=>{e?.destroy?.(),destroyOnInitialized=null,run()})):this.__parentControl&&!this.__parentControl.getIsInitialized()?destroyOnInitialized=TcHmi.EventProvider.register(this.__parentControl.getId()+".onInitialized",(e=>{e?.destroy?.(),destroyOnInitialized=null,run()})):run()}else run();return function(){destroyOnInitialized&&(destroyOnInitialized(),destroyOnInitialized=null);for(const symbolInfo of symbolInfoByExpression.values())symbolInfo.obj.destroy();symbolInfoByExpression.clear()}}
/**
             * Resolves all symbol expression refs in the current object.
             * @param callback Callback will be called after success or failure
             * @preserve (Part of the public API)
             */resolve(callback){return"object"==typeof this.__obj&&null!==this.__obj?this.__resolve(this.__obj,callback):(TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:this.__obj}),function(){})}__watch(obj,callback){const callstackLinker=TcHmi.System.Callback.createTask("ObjectResolver.watch>"+(this.__parentControl?.getId()??"UnknownCtrl"));let clone=tchmi_clone_object(obj),errorsBySymbolInfo=new Map;const symbolInfosByRef=new Map,symbolInfoByExpression=new Map;let last,loopActive=!1,pending=0,destroyOnInitialized=null;const destroy=()=>{destroyOnInitialized&&(destroyOnInitialized(),destroyOnInitialized=null);for(const symbolInfo of symbolInfoByExpression.values())symbolInfo.unwatch&&(symbolInfo.unwatch(),symbolInfo.unwatch=void 0),symbolInfo.obj&&(symbolInfo.obj.destroy(),symbolInfo.obj=void 0);symbolInfoByExpression.clear(),symbolInfosByRef.clear()},process=()=>{if(pending>0)return;let details,error=TcHmi.Errors.NONE;for(const errorDetails of errorsBySymbolInfo.values())if(error=TcHmi.Errors.ERROR,details||(details={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],domain:"TcHmi.Symbol.ObjectResolver"}),errorDetails){details.errors||(details.errors=[]);let exists=!1;for(let i=0,ii=details.errors.length;i<ii;i++)if(tchmi_equal(details.errors[i],errorDetails)){exists=!0;break}exists||details.errors.push(errorDetails)}if(error===TcHmi.Errors.NONE){if(tchmi_equal(last,clone))return;last=tchmi_clone_object(clone),callstackLinker.run((()=>{TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:tchmi_clone_object(clone),destroy:destroy})}))}else callstackLinker.run((()=>{TcHmi.Callback.callSafeEx(callback,null,{error:error,details:details,destroy:destroy})}))},watch=symbolInfo=>{symbolInfo.obj&&(symbolInfo.active||(symbolInfo.active=!0,pending++,symbolInfo.unwatch=symbolInfo.obj.watchEx(null,(function(data){if(symbolInfo.unwatch??(symbolInfo.unwatch=data.destroy),symbolInfo.obj)if(data.error===TcHmi.Errors.NONE){if(errorsBySymbolInfo.has(symbolInfo.obj)&&errorsBySymbolInfo.delete(symbolInfo.obj),symbolInfo.refs){let removeableSymbolInfo=null,removeableExpressions=[],removeableRefs=[],resolveableRefs=[];symbolInfo.value=data.value;for(const[obj,keys]of symbolInfo.refs)for(let i=0,ii=keys.length;i<ii;i++){let key=keys[i];if(null!=key&&obj){let ref=obj[key];if(obj[key]=symbolInfo.value,"object"==typeof ref&&null!=ref){let symbolInfos2=symbolInfosByRef.get(ref);if(symbolInfos2)for(let i=0,ii=symbolInfos2.length;i<ii;i++){let symbolInfo2=symbolInfos2[i];if(symbolInfo2&&symbolInfo2.refs&&symbolInfo2.obj&&(symbolInfo2.refs.delete(ref),0===symbolInfo2.refs.size)){removeableExpressions.push(symbolInfo2.obj.getExpression().toString()),removeableRefs.push(ref),removeableSymbolInfo=symbolInfo2;break}}}resolveableRefs.push({o:obj,k:key,ref:obj[key]})}}const symbolInfoByExpressionChanged=removeableExpressions.length>0;for(const removeabelExpression of removeableExpressions)symbolInfoByExpression.delete(removeabelExpression);removeableExpressions=[];for(const removeableRef of removeableRefs)symbolInfosByRef.delete(removeableRef);removeableRefs=[],removeableSymbolInfo&&(removeableSymbolInfo.unwatch?.(),removeableSymbolInfo.unwatch=void 0,removeableSymbolInfo.obj?.destroy());for(const resolveableRef of resolveableRefs)resolveSymbolInfo(resolveableRef.o,resolveableRef.k,resolveableRef.ref);if(resolveableRefs=[],!loopActive&&!symbolInfoByExpressionChanged)for(const symbolInfo of symbolInfoByExpression.values())loopActive=!0,watch(symbolInfo),loopActive=!1;pending>0&&!1===symbolInfo.initialized&&pending--,symbolInfo.initialized=!0,loopActive||process()}}else pending>0&&!1===symbolInfo.initialized&&pending--,symbolInfo.initialized=!0,data.details?errorsBySymbolInfo.set(symbolInfo.obj,data.details):errorsBySymbolInfo.set(symbolInfo.obj,{code:data.error,message:TcHmi.Errors[data.error],reason:"Got an error while watching "+symbolInfo.obj.getExpression().toString(),domain:"TcHmi.Symbol.ObjectResolver"}),loopActive||process()}))))},resolveSymbolInfo=(o,k,value)=>{if(value)if("object"==typeof value){if(__tchmi_is_instanced_object(value))return;if(Array.isArray(value))for(let i=0,ii=value.length;i<ii;i++)resolveSymbolInfo(value,i,value[i]);else{if(value&&value.objectType&&"Symbol"===value.objectType)return;for(let key in value)resolveSymbolInfo(value,key,value[key])}}else if("string"==typeof value){if(!o)return;if(null==k)return;let isSymbolExpression=TcHmi.Symbol.isSymbolExpression(value),isSymbolExpressionEscaped=TcHmi.Symbol.isSymbolExpressionEscaped(value);if(isSymbolExpression&&!isSymbolExpressionEscaped){let symbolInfo=symbolInfoByExpression.get(value);if(symbolInfo){void 0!==symbolInfo.value&&(o[k]=symbolInfo.value);let ref=symbolInfo.refs.get(o);ref?ref.push(k):symbolInfo.refs.set(o,[k])}else{let symbol=new TcHmi.Symbol(value),refs=new Map;refs.set(o,[k]);const symbolInfoNew={obj:symbol,refs:refs,active:!1,initialized:!1};symbolInfoByExpression.set(value,symbolInfoNew);const symbolInfoRefArr=symbolInfosByRef.get(o);symbolInfoRefArr?symbolInfoRefArr.push(symbolInfoNew):symbolInfosByRef.set(o,[symbolInfoNew])}}else isSymbolExpressionEscaped&&(o[k]=TcHmi.Symbol.escapeSymbolExpression(value))}},run=()=>{if(symbolInfoByExpression.size>0){let oneIsUnInitialized=!1;for(const symbolInfo of symbolInfoByExpression.values())loopActive=!0,watch(symbolInfo),loopActive=!1,oneIsUnInitialized||(oneIsUnInitialized=!symbolInfo.initialized);oneIsUnInitialized||process()}else process()};if(resolveSymbolInfo(null,null,clone),this.__parentControl&&symbolInfoByExpression.size>0){let partial=null,parent=this.__parentControl;for(;null!==parent;){let parentType=parent.getType();if(("TcHmi.Controls.System.TcHmiView"===parentType||"TcHmi.Controls.System.TcHmiContent"===parentType||"TcHmi.Controls.System.TcHmiUserControl"===parentType)&&!partial){partial=parent;break}parent=parent.getParent()}partial&&!partial.getIsInitialized()?destroyOnInitialized=TcHmi.EventProvider.register(partial.getId()+".onInitialized",(e=>{e?.destroy?.(),destroyOnInitialized=null,run()})):this.__parentControl&&!this.__parentControl.getIsInitialized()?destroyOnInitialized=TcHmi.EventProvider.register(this.__parentControl.getId()+".onInitialized",(e=>{e?.destroy?.(),destroyOnInitialized=null,run()})):run()}else run();return destroy}
/**
             * Watches for changes of symbol expressions in the current object und returns the object with updated values.
             * Returns a destroy function to remove the watch.
             * @param callback Callback will be called after success or failure
             * @preserve (Part of the public API)
             */watch(callback){return"object"==typeof this.__obj&&null!==this.__obj?this.__watch(this.__obj,callback):(TcHmi.Callback.callSafeEx(callback,null,{error:TcHmi.Errors.NONE,value:this.__obj}),function(){})}
/**
             * Destroys the current object.
             * @preserve (Part of the public API)
             */destroy(){this.__obj=null}}}(Symbol=TcHmi.Symbol||(TcHmi.Symbol={})),function(SymbolType){SymbolType[SymbolType.Invalid=0]="Invalid",SymbolType[SymbolType.Server=10]="Server",SymbolType[SymbolType.Internal=20]="Internal",SymbolType[SymbolType.LocalizedText=30]="LocalizedText",SymbolType[SymbolType.PartialParam=40]="PartialParam",SymbolType[SymbolType.TemplateParam=50]="TemplateParam",SymbolType[SymbolType.Function=60]="Function",SymbolType[SymbolType.Control=70]="Control",SymbolType[SymbolType.Context=80]="Context",SymbolType[SymbolType.ThemedResource=90]="ThemedResource"}(SymbolType=TcHmi.SymbolType||(TcHmi.SymbolType={}))}(TcHmi||(TcHmi={})),function(TcHmi){
/**
     * Symbol expression parser.
     * @preserve (Part of the public API)
     */
class SymbolExpression{static parse(expression){let open,close,optionsStart,optionsEnd,data={type:TcHmi.SymbolType.Invalid,expression:expression,tag:void 0,content:void 0,isEscaped:!1,escapeLevel:0,fullName:void 0,name:void 0,path:void 0,options:void 0,openStart:void 0,openEnd:void 0,closeStart:void 0,closeEnd:void 0,children:void 0,origin:void 0,originOpenStart:void 0,originOpenEnd:void 0,originCloseStart:void 0,originCloseEnd:void 0},tags=["s","i","l","pp","tp","f","ctrl","ctx","tr"];if(expression.startsWith("%")&&expression.endsWith("%")){open=expression.substring(0,expression.substring(1).indexOf("%")+2),close=expression.substring(expression.substring(0,expression.length-1).lastIndexOf("%"));let foundTag,escapeLevel=0;for(let i=0;i<open.length;i++){let ch=open[i];"%"!==ch&&("$"!==ch?(foundTag??(foundTag=""),foundTag+=ch):escapeLevel++)}let isTagValid=!1;for(let tag of tags)if(tag===foundTag){isTagValid=!0;break}isTagValid&&(data.tag=foundTag,data.escapeLevel=escapeLevel,escapeLevel>0&&(data.isEscaped=!0),data.content=expression.substr(open.length,expression.length-open.length-close.length),data.openStart=0,data.openEnd=open.length-1,data.closeStart=data.expression.length-close.length,data.closeEnd=data.expression.length-1)}if(!data.tag)return{error:TcHmi.Errors.E_INVALID,details:{code:TcHmi.Errors.E_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_INVALID],domain:"TcHmi.SymbolExpression",reason:"The expression '"+expression+"' lacks a valid tag."}};switch(data.tag){case"s":data.type=TcHmi.SymbolType.Server;break;case"i":data.type=TcHmi.SymbolType.Internal;break;case"l":data.type=TcHmi.SymbolType.LocalizedText;break;case"pp":data.type=TcHmi.SymbolType.PartialParam;break;case"tp":data.type=TcHmi.SymbolType.TemplateParam;break;case"f":data.type=TcHmi.SymbolType.Function;break;case"ctrl":data.type=TcHmi.SymbolType.Control;break;case"ctx":data.type=TcHmi.SymbolType.Context;break;case"tr":data.type=TcHmi.SymbolType.ThemedResource;break;default:data.type=TcHmi.SymbolType.Invalid}if(data.type===TcHmi.SymbolType.Invalid)return{error:TcHmi.Errors.E_INVALID,details:{code:TcHmi.Errors.E_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_INVALID],domain:"TcHmi.SymbolExpression",reason:"The expression '"+expression+"' lacks a valid tag."}};if(data.type!==TcHmi.SymbolType.Function){let openStart,openEnd,closeStart,closeEnd,nestedLevel=0,pos=data.content?data.content.indexOf("%"):-1;for(;pos>-1&&data.content;){let foundTag,to=data.content.substring(pos+1).indexOf("%")+pos+2,token=data.content.substring(pos,to),isOpen=!1;for(let i=0;i<token.length;i++){let ch=token[i];"%"!==ch&&(1===i&&"/"!==ch&&(isOpen=!0),"/"!==ch&&"$"!==ch&&(foundTag??(foundTag=""),foundTag+=ch))}let isTagValid=!1;for(let tag of tags)if(tag===foundTag){isTagValid=!0;break}if(isTagValid&&isOpen)0===nestedLevel&&void 0===openStart?(openStart=pos,openEnd=to):nestedLevel++;else if(isTagValid&&!isOpen)if(0===nestedLevel&&void 0!==openStart){closeStart=pos,closeEnd=to;let childExpression=data.content.substring(openStart,closeEnd),childParseResult=SymbolExpression.parse(childExpression);if(childParseResult&&childParseResult.error===TcHmi.Errors.NONE&&childParseResult.data){let openLength=0;void 0!==openStart&&void 0!==openEnd&&(openLength=openEnd-openStart),childParseResult.data.origin=data,void 0!==openStart&&(childParseResult.data.originOpenStart=openStart+openLength),void 0!==openEnd&&(childParseResult.data.originOpenEnd=openEnd+openLength),void 0!==closeStart&&(childParseResult.data.originCloseStart=closeStart+openLength),void 0!==closeEnd&&(childParseResult.data.originCloseEnd=closeEnd+openLength);let updateGrandChild=child=>{if(child.origin=data,void 0!==child.originOpenStart&&childParseResult.data&&void 0!==childParseResult.data.originOpenStart&&(child.originOpenStart=child.originOpenStart+childParseResult.data.originOpenStart),void 0!==child.originOpenEnd&&childParseResult.data&&void 0!==childParseResult.data.originOpenStart&&(child.originOpenEnd=child.originOpenEnd+childParseResult.data.originOpenStart),void 0!==child.originCloseStart&&childParseResult.data&&void 0!==childParseResult.data.originOpenStart&&(child.originCloseStart=child.originCloseStart+childParseResult.data.originOpenStart),void 0!==child.originCloseEnd&&childParseResult.data&&void 0!==childParseResult.data.originOpenStart&&(child.originCloseEnd=child.originCloseEnd+childParseResult.data.originOpenStart),child.children)for(let gChild of child.children)updateGrandChild(gChild)};if(childParseResult.data.children)for(let gChild of childParseResult.data.children)updateGrandChild(gChild);data.children??(data.children=[]),data.children.push(childParseResult.data)}openStart=void 0,openEnd=void 0,closeStart=void 0,closeEnd=void 0}else nestedLevel--;pos>-1&&(pos=data.content.substring(to).indexOf("%"),pos>-1&&(pos+=to))}}if(data.children&&data.children.length>0)return{error:TcHmi.Errors.NONE,data:data};if(data.type!==TcHmi.SymbolType.Function){let pos=-1;if(data.children){let lastChild=data.children[data.children.length-1];void 0!==lastChild.originCloseEnd&&(pos=data.expression.substring(lastChild.originCloseEnd).indexOf("|"),pos>-1&&(pos+=lastChild.originCloseEnd))}else pos=data.expression.indexOf("|");if(pos>-1){optionsStart=pos,optionsEnd=data.expression.length-data.tag.length-3;let options=data.expression.substring(optionsStart,optionsEnd);options&&(optionsStart=pos,data.options=options.substring(1).split("|"))}}if(void 0!==open){let fullNameStart=open.length,fullNameEnd=data.expression.length-(data.tag.length+3);data.type!==TcHmi.SymbolType.Function&&void 0!==optionsStart&&(fullNameEnd=optionsStart),void 0!==fullNameStart&&void 0!==fullNameEnd&&(data.fullName=data.expression.substring(fullNameStart,fullNameEnd),0===data.fullName.length&&(data.fullName=void 0))}if(data.fullName)switch(data.type){case TcHmi.SymbolType.Control:case TcHmi.SymbolType.Internal:case TcHmi.SymbolType.LocalizedText:case TcHmi.SymbolType.PartialParam:case TcHmi.SymbolType.TemplateParam:case TcHmi.SymbolType.ThemedResource:case TcHmi.SymbolType.Server:{let firstBracketPos=data.fullName.indexOf("["),firstColonPos=data.fullName.indexOf("::"),splitPos=-1;splitPos=-1===firstBracketPos?firstColonPos:-1===firstColonPos||firstBracketPos<firstColonPos?firstBracketPos:firstColonPos,-1!==splitPos?(data.name=data.fullName.substring(0,splitPos),0===data.name.length&&(data.name=void 0),data.path=data.fullName.substring(splitPos),0===data.path.length&&(data.path=void 0)):(data.name=data.fullName,0===data.name.length&&(data.name=void 0));break}case TcHmi.SymbolType.Context:data.path=data.fullName,0===data.path.length&&(data.path=void 0);break;case TcHmi.SymbolType.Function:data.name=data.fullName,0===data.name.length&&(data.name=void 0)}return{error:TcHmi.Errors.NONE,data:data}}constructor(expression){if(Object.defineProperty(this,"__expression",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__content",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__tag",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__name",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__nameEx",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__fullName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__path",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"__pathEx",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"__pathTokens",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"__pathTokensEx",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"__type",{enumerable:!0,configurable:!0,writable:!0,value:TcHmi.SymbolType.Invalid}),Object.defineProperty(this,"__options",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"__children",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"__parseData",{enumerable:!0,configurable:!0,writable:!0,value:null}),TcHmi.System.isParameterTypeInvalid(expression,"expression",{type:"string",required:"valueNeeded"}))throw new Error("The expression of a new TcHmi.SymbolExpression needs to be a string.");this.__expression=expression;let parseResult=SymbolExpression.parse(this.__expression);if(parseResult.error===TcHmi.Errors.NONE&&parseResult.data){if(this.__parseData=parseResult.data,this.__tag=parseResult.data.tag,this.__type=parseResult.data.type,this.__content=parseResult.data.content,parseResult.data.children){let temp=new Map;for(let child of parseResult.data.children)temp.has(child.expression)||temp.set(child.expression,new SymbolExpression(child.expression));this.__children=Array.from(temp.values())}if((!this.__children||0===this.__children.length)&&(this.__name=parseResult.data.name,this.__path=parseResult.data.path??null,this.__path?this.__pathTokens=TcHmi.ObjectPath.toPathTokens(this.__path):this.__pathTokens=null,this.__nameEx=this.__name,this.__pathEx=this.__path,this.__pathTokensEx=this.__pathTokens,this.__fullName=parseResult.data.fullName,this.__type===TcHmi.SymbolType.Server&&(this.__name=this.__fullName,this.__path=null,this.__pathTokens=null),this.__type!==TcHmi.SymbolType.Function)){let options=parseResult.data.options;if(options)for(let option of options){if(this.__type===TcHmi.SymbolType.Server){const matchInterval=/^(?:Interval\s*=)\s*(\d+)\s*$/i.exec(option);null!==matchInterval&&0!==matchInterval.length&&(this.__options.Interval=parseInt(matchInterval[1],10));const matchTimeout=/^(?:Timeout\s*=)\s*(\d+)\s*$/i.exec(option);null!==matchTimeout&&0!==matchTimeout.length&&(this.__options.Timeout=parseInt(matchTimeout[1],10));const matchParallel=/^(?:Parallel\s*=)\s*([a-zA-Z]+)\s*$/i.exec(option);null!==matchParallel&&0!==matchParallel.length&&(this.__options.Parallel="true"===matchParallel[1].toLowerCase());const matchSubscriptionGroup=/^(?:SubscriptionGroup\s*=)\s*(\d+)\s*$/i.exec(option);null!==matchSubscriptionGroup&&0!==matchSubscriptionGroup.length&&(this.__options.SubscriptionGroup=parseInt(matchSubscriptionGroup[1],10));const matchReadWriteGroup=/^(?:ReadWriteGroup\s*=)\s*(\d+)\s*$/i.exec(option);null!==matchReadWriteGroup&&0!==matchReadWriteGroup.length&&(this.__options.ReadWriteGroup=parseInt(matchReadWriteGroup[1],10));const matchUniqueHash=/^(?:UniqueHash\s*=)\s*([a-zA-Z]+)\s*$/i.exec(option);null!==matchUniqueHash&&0!==matchUniqueHash.length&&(this.__options.UniqueHash="true"===matchUniqueHash[1].toLowerCase());const matchVersion=/^(?:Version\s*=)\s*(.*)\s*$/i.exec(option);if(null!==matchVersion&&0!==matchVersion.length){let num=Number(matchVersion[1]);Number.isNaN(num)||(this.__options.Version=num)}}const matchBindingMode=/^(?:BindingMode\s*=)\s*([a-zA-Z]+)\s*$/i.exec(option);null!==matchBindingMode&&0!==matchBindingMode.length&&(this.__options.BindingMode=matchBindingMode[1]);const matchBindingEvent=/^(?:BindingEvent\s*=)\s*([a-zA-Z]+)\s*$/i.exec(option);null!==matchBindingEvent&&0!==matchBindingEvent.length&&(this.__options.BindingEvent||(this.__options.BindingEvent=matchBindingEvent[1]),this.__options.BindingEvents||(this.__options.BindingEvents=[]),this.__options.BindingEvents.push(matchBindingEvent[1]));const matchSubscriptionMode=/^(?:SubscriptionMode\s*=)\s*([a-zA-Z]+)\s*$/i.exec(option);null!==matchSubscriptionMode&&0!==matchSubscriptionMode.length&&(this.__options.SubscriptionMode=matchSubscriptionMode[1]);const matchStart=/^(?:Start\s*=)\s*([-?\d]+$)\s*$/i.exec(option);null!==matchStart&&0!==matchStart.length&&(this.__options.Start=parseInt(matchStart[1],10));const matchEnd=/^(?:End\s*=)\s*([-?\d]+$)\s*$/i.exec(option);null!==matchEnd&&0!==matchEnd.length&&(this.__options.End=parseInt(matchEnd[1],10));const matchEventRegistrationMode=/^(?:EventRegistrationMode\s*=)\s*([a-zA-Z]+)\s*$/i.exec(option);null!==matchEventRegistrationMode&&0!==matchEventRegistrationMode.length&&(this.__options.EventRegistrationMode=matchEventRegistrationMode[1])}}}}
/**
         * Returns the expression string.
         * @preserve (Part of the public API)
         */toString(){return this.__expression}
/**
         * Returns the content of the expression. The content is everything except the expression tags.
         * @preserve (Part of the public API)
         */getContent(){return this.__content}
/**
         * Returns the tag of the expression. For example "s" in case of an expression of type Server.
         * @preserve (Part of the public API)
         */getTag(){return this.__tag}
/**
         * Returns the name of the expression.
         * In case of an expression of type Server getName will also contain the path. Use getNameEx to retrieve the name in all expressions which support having a name.
         * @preserve (Part of the public API)
         */getName(){return this.__name}
/**
         * Returns the name of the expression.
         * @preserve (Part of the public API)
         */getNameEx(){return this.__nameEx}
/**
         * Returns the full name containing the base name and the path of the expression but no options.
         * @preserve (Part of the public API)
         */getFullName(){return this.__fullName}
/**
         * Returns the path of the expression.
         * In case of an expression of type Server getPath will return null. Use getPathEx if you want to retrieve the path in all expressions which support having a path.
         * @preserve (Part of the public API)
         */getPath(){return this.__path}
/**
         * Returns the path of the expression.
         * @preserve (Part of the public API)
         */getPathEx(){return this.__pathEx}
/**
         * Returns the path tokens.
         * In case of an expression of type Server getPathTokens will return null. Use getPathTokensEx if you want to retrieve the path tokens in all expressions which support having a path.
         * @preserve (Part of the public API)
         */getPathTokens(){return this.__pathTokens}
/**
         * Returns the path tokens.
         * @preserve (Part of the public API)
         */getPathTokensEx(){return this.__pathTokensEx}
/**
         * Returns the type of the expression.
         * @preserve (Part of the public API)
         */getType(){return this.__type}
/**
         * Returns a Dictionary of option flags.
         * @preserve (Part of the public API)
         */getOptions(){return this.__options}getChildren(){return this.__children}getParseData(){return this.__parseData}hasChildren(){return!!(this.__parseData&&this.__parseData.children&&this.__parseData.children.length>0)}}
/**
     * Split string by pipe, but ignore pipes in brackets.
     * @deprecated Please use SymbolExpression.parse instead. RegExp method will not work properly with nested symbol expressions.
     * @preserve (Part of the public API)
     */Object.defineProperty(SymbolExpression,"RegExpExpressionGroupByPipe",{enumerable:!0,configurable:!0,writable:!0,value:/([^|()]+|[(](['][^']*[']|["][^"]*["]|[^)])*[)])+/g}),
/**
     * Resolves the first expression occurrence and the content including line breaks.
     * @deprecated Please use SymbolExpression.parse instead. RegExp method will not work properly with nested symbol expressions.
     * @preserve (Part of the public API)
     */
Object.defineProperty(SymbolExpression,"RegExpExpression",{enumerable:!0,configurable:!0,writable:!0,value:new RegExp("^\\%[$]*(s|i|l|pp|tp|f|ctrl|ctx|tr)\\%([^]*)\\%/\\1\\%$")}),
/**
     * Resolves the first escapted expression occurrence and the content including line breaks.
     * @deprecated Please use SymbolExpression.parse instead. RegExp method will not work properly with nested symbol expressions.
     * @preserve (Part of the public API)
     */
Object.defineProperty(SymbolExpression,"RegExpExpressionEscaped",{enumerable:!0,configurable:!0,writable:!0,value:new RegExp("^\\%[$]+(s|i|l|pp|tp|f|ctrl|ctx|tr)\\%([^]*)\\%/\\1\\%$")}),TcHmi.SymbolExpression=SymbolExpression}(TcHmi||(TcHmi={})),function(TcHmi){TcHmi.TimedAsyncTask=class{constructor(duration){Object.defineProperty(this,"__duration",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"__than",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.__duration=duration,this.__than=0}do(callback){if(!callback)return 0;if(this.__duration===1/0)return callback(),0;let now=Date.now();return 0===this.__than&&(this.__than=now),now-this.__than>this.__duration?(this.__than=now,setTimeout(callback)):(callback(),0)}}}(TcHmi||(TcHmi={})),function(TcHmi){!function(TcSpeech){TcSpeech.openConnection=
/**
         * (Re-)Starts the rtc connection to TwinCAT speech engine.
         * @param options This option can override all setting from tchmiconfig.json and more
         * @param callback Gets notification when opening connection failed.
         * @preserve (Part of the public API)
         */
function(options={},callback){if(!(TcHmi.System.isParameterTypeInvalid(options.confidenceThreshold,"options.confidenceThreshold",{type:"number",required:"undefinedOk"},"TcHmi.Speech",callback)||TcHmi.System.isParameterTypeInvalid(options.defaultVolume,"options.defaultVolume",{type:"number",required:"undefinedOk"},"TcHmi.Speech",callback)||TcHmi.System.isParameterTypeInvalid(options.domain,"options.domain",{type:"string",required:"undefinedOk",minStringLength:1},"TcHmi.Speech",callback)||TcHmi.System.isParameterTypeInvalid(options.enableMicrophone,"options.enableMicrophone",{type:"boolean",required:"undefinedOk"},"TcHmi.Speech",callback)||TcHmi.System.isParameterTypeInvalid(options.enableSpeaker,"options.enableSpeaker",{type:"boolean",required:"undefinedOk"},"TcHmi.Speech",callback)||TcHmi.System.isParameterTypeInvalid(options.remoteSocketId,"options.remoteSocketId",{type:"number",required:"undefinedOk"},"TcHmi.Speech",callback)||TcHmi.System.isParameterTypeInvalid(options.sinkConstraints,"options.sinkConstraints",{type:"object",required:"undefinedOk"},"TcHmi.Speech",callback)||TcHmi.System.isParameterTypeInvalid(options.sourceConstraints,"options.sourceConstraints",{type:"object",required:"undefinedOk"},"TcHmi.Speech",callback)))if(TcHmi.System.Services.tcSpeechManager)TcHmi.System.Services.tcSpeechManager.openConnection(options,callback);else{const errorDetail={code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],reason:"Unable to open connection. System not ready.",domain:"TcHmi.TcSpeech"};TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail})}},TcSpeech.closeConnection=
/**
         * Closes an active connection to TwinCAT speech engine.
         * @param options Can target a specific remote TwinCAT speech engine
         * @param options.remoteSocketId socket id to close
         * @param callback A callback to get feedback
         * @preserve (Part of the public API)
         */
function(options={},callback){if(!TcHmi.System.isParameterTypeInvalid(options.remoteSocketId,"options.remoteSocketId",{type:"number",required:"undefinedOk"},"TcHmi.Speech",callback))if(TcHmi.System.Services.tcSpeechManager)TcHmi.System.Services.tcSpeechManager.closeConnection(options,callback);else{const errorDetail={code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],reason:"Unable to close connection. System not ready.",domain:"TcHmi.TcSpeech"};TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail})}},TcSpeech.setVolume=
/**
         * Sets the volume (between 0 and 1) of speech output on this device.
         * @param valueNew new volume. Will be capped between 0 and 1.
         * @preserve (Part of the public API)
         */
function(valueNew){TcHmi.System.Services.tcSpeechManager?TcHmi.System.Services.tcSpeechManager.setVolume(valueNew):TcHmi.Log.error("[Source=Framework, Module=TcHmi.TcSpeech] Unable to set volume. System not ready.")};TcSpeech.SpeechSynthesis=
/**
         * Functions for SpeechSynthesis .
         * @preserve (Part of the public API)
         */
class{
/**
             * Functions for SpeechSynthesis .
             * @param text Text to be synthesized
             * @param options Options
             * @param options.priority Audio entity priority
             * @preserve (Part of the public API)
             */
constructor(text,options){Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:text}),Object.defineProperty(this,"options",{enumerable:!0,configurable:!0,writable:!0,value:options}),Object.defineProperty(this,"__guid",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}
/**
             * Starting output of text. The connection must be open at this point and we have to have enableSpeaker.
             * The callback will get a guid which can be used to stop or request status of the speech synthesis.
             * @param callback The callback will get a guid which can be used to stop or request status of the speech synthesis.
             * @preserve (Part of the public API)
             */start(callback){TcHmi.System.Services.tcSpeechManager?TcHmi.System.Services.tcSpeechManager.speechSynthesisStart(this.text,this.options,(data=>{this.__guid=data.guid,TcHmi.Callback.callSafe(callback,null,data)})):TcHmi.Callback.callSafe(callback,null,{error:TcHmi.Errors.E_SYSTEM_NOT_READY,details:{code:TcHmi.Errors.E_SYSTEM_NOT_READY,domain:"TcHmi.TcSpeech",reason:"System not ready."}})}
/**
             * Request the state (queued, playing, stopped) of a given speech synthesis call.
             * @param callback The callback will get the state of the speech synthesis
             * @preserve (Part of the public API)
             */getStatus(callback){TcHmi.System.Services.tcSpeechManager?this.__guid?TcHmi.System.Services.tcSpeechManager.speechSynthesisGetStatus(this.__guid,callback):TcHmi.Callback.callSafe(callback,null,{error:TcHmi.Errors.ERROR,details:{code:TcHmi.Errors.ERROR,domain:"TcHmi.TcSpeech",reason:"No current speech synthesis."}}):TcHmi.Callback.callSafe(callback,null,{error:TcHmi.Errors.E_SYSTEM_NOT_READY,details:{code:TcHmi.Errors.E_SYSTEM_NOT_READY,domain:"TcHmi.TcSpeech",reason:"System not ready."}})}
/**
             * Stops a given speech synthesis call.
             * @param callback The callback will get the state of the speech synthesis
             * @preserve (Part of the public API)
             */stop(callback){TcHmi.System.Services.tcSpeechManager?this.__guid?TcHmi.System.Services.tcSpeechManager.speechSynthesisStop(this.__guid,callback):TcHmi.Callback.callSafe(callback,null,{error:TcHmi.Errors.ERROR,details:{code:TcHmi.Errors.ERROR,domain:"TcHmi.TcSpeech",reason:"No current speech synthesis."}}):TcHmi.Callback.callSafe(callback,null,{error:TcHmi.Errors.ERROR,details:{code:TcHmi.Errors.ERROR,domain:"TcHmi.TcSpeech",reason:"System not ready."}})}}}(TcHmi.TcSpeech||(TcHmi.TcSpeech={}))}(TcHmi||(TcHmi={})),function(TcHmi){
/**
     * Provides functions for managing and changing themes.
     * @preserve (Part of the public API)
     */
class Theme{
/**
         * Returns the active theme.
         * @preserve (Part of the public API)
         */
static get(){return TcHmi.System.Services.themeManager?TcHmi.System.Services.themeManager.getTheme():"Base"}
/**
         * Sets the active theme.
         * @param valueNew Name of the new theme.
         * @preserve (Part of the public API)
         */static set(valueNew){return TcHmi.System.Services.themeManager?TcHmi.System.isParameterTypeInvalid(valueNew,"valueNew",{type:"string",required:"valueNeeded",minStringLength:1})?TcHmi.Errors.E_PARAMETER_INVALID:TcHmi.System.Services.themeManager.setTheme(valueNew,!0):(TcHmi.Log.error("[Source=Framework, Module=TcHmi.Theme] Setting theme failed. System not ready."),TcHmi.Errors.E_SYSTEM_NOT_READY)}
/**
         * Returns all registered themes of the project.
         * @preserve (Part of the public API)
         */static getRegisteredThemes(){return Object.keys(TcHmi.System.config.themes)}}TcHmi.Theme=Theme,function(Theme){Theme.Properties=
/**
         * Control property related API
         * @preserve (Part of the public API)
         */
class{
/**
             * Parses every source of implicit properties and returns this or null
             * Can have different value after the event onThemeDataChanged.
             * The order of resources are
             * 1) control class
             * 2) theme definition of the control type in project
             * 3) theme definition in control
             * 4) defaultValueInternal in Description.json of the control
             * @param control Control which needs the resource
             * @param propertyName name of the property
             * @template T Type of the default value
             * @preserve (Part of the public API)
             */
static getDefaultValue(control,propertyName){return TcHmi.System.Services.themeManager?control instanceof TcHmi.Controls.System.baseTcHmiControl==!1||TcHmi.System.isParameterTypeInvalid(propertyName,"propertyName",{type:"string",required:"valueNeeded",minStringLength:1})?{error:TcHmi.Errors.E_PARAMETER_INVALID,origin:"system",originThemeName:TcHmi.System.Services.themeManager.getTheme(),value:null}:TcHmi.System.Services.themeManager.getDefaultPropertyValue(control,propertyName):{error:TcHmi.Errors.E_SYSTEM_NOT_READY,origin:"system",originThemeName:"",value:null}}
/**
             * Sets the default value of a property and change it (if needed) on theme change.
             * @param control Control to manipulate
             * @param propertyName Property to manipulate
             * @returns returns an Error code
             * @preserve (Part of the public API)
             */static setThemeValue(control,propertyName){if(control instanceof TcHmi.Controls.System.baseTcHmiControl==!1)return TcHmi.Errors.E_PARAMETER_INVALID;if(TcHmi.System.isParameterTypeInvalid(propertyName,"propertyName",{type:"string",required:"valueNeeded",minStringLength:1}))return TcHmi.Errors.E_PARAMETER_INVALID;if(!TcHmi.System.Services.themeManager||!TcHmi.System.Services.controlManager)return TcHmi.Log.error("[Source=Framework, Module=TcHmi.Theme] System not ready."),TcHmi.Errors.E_SYSTEM_NOT_READY;let error=TcHmi.System.Services.controlManager.setControlProperty(control,propertyName,null);return error?error.code:TcHmi.Errors.NONE}
/**
             * After calling this function the control property will not be changed on theme change anymore.
             * Does not change the property value.
             * @param control Control to manipulate
             * @param propertyName Property to manipulate
             * @returns returns an Error code
             * @preserve (Part of the public API)
             */static releaseThemeValue(control,propertyName){return control instanceof TcHmi.Controls.System.baseTcHmiControl==!1||TcHmi.System.isParameterTypeInvalid(propertyName,"propertyName",{type:"string",required:"valueNeeded",minStringLength:1})?TcHmi.Errors.E_PARAMETER_INVALID:TcHmi.System.Services.themeManager&&TcHmi.System.Services.controlManager?(TcHmi.System.Services.themeManager.unwatchAttributeDefaults(control,propertyName),TcHmi.Errors.NONE):(TcHmi.Log.error("[Source=Framework, Module=TcHmi.Theme] System not ready."),TcHmi.Errors.E_SYSTEM_NOT_READY)}};Theme.Resources=
/**
         * Control resource related API
         * @preserve (Part of the public API)
         */
class{
/**
             * Gets a themed resource.
             * Parses every source of properties and returns this or null
             * Can have different value after the event onThemeDataChanged.
             * The order of resources are
             * 1) control class
             * 2) theme definition of the control type in project
             * 3) theme definition in control
             *
             * @param control Control which needs the resource
             * @param resourceName name of the resource
             * @returns returns the resource or null
             * @template T Type of the value
             * @preserve (Part of the public API)
             */
static get(control,resourceName){return TcHmi.System.Services.themeManager?control instanceof TcHmi.Controls.System.baseTcHmiControl==!1||TcHmi.System.isParameterTypeInvalid(resourceName,"resourceName",{type:"string",required:"valueNeeded",minStringLength:1})?{error:TcHmi.Errors.E_PARAMETER_INVALID,origin:"system",originThemeName:TcHmi.System.Services.themeManager.getTheme(),value:null}:TcHmi.System.Services.themeManager.getThemeResource(control,resourceName):{error:TcHmi.Errors.E_SYSTEM_NOT_READY,origin:"system",originThemeName:"",value:null}}static resolveBasePath(control,resource){let url;if("control"===resource.origin){let module=TcHmi.System.Data.Modules.controls.map.get(control.getType());url=module&&module.error===TcHmi.Errors.NONE&&module.package&&module.manifestData?module.package.basePath+"/"+module.manifestData.basePath+"/Themes/"+resource.originThemeName+"/":module&&module.error!==TcHmi.Errors.NONE?"ControlModuleHasError/":"controlNotFoundInSystemCache/"}else url="Themes/"+resource.originThemeName+"/";return url}}}(Theme=TcHmi.Theme||(TcHmi.Theme={}))}(TcHmi||(TcHmi={})),function(TcHmi){
/**
     * Provides a layer to show elements above the normal visualization.
     * @preserve (Part of the public API)
     */
class TopMostLayer{static add(control,element,options){return!(!control||!TcHmi.System.Services.topMostLayer||TCHMI_DESIGNER)&&((!options||!(TcHmi.System.isParameterTypeInvalid(options.centerHorizontal,"options.centerHorizontal",{type:"boolean",required:"undefinedOk"})||TcHmi.System.isParameterTypeInvalid(options.centerVertical,"options.centerVertical",{type:"boolean",required:"undefinedOk"})||TcHmi.System.isParameterTypeInvalid(options.closeOnBackground,"options.closeOnBackground",{type:"boolean",required:"undefinedOk"})||TcHmi.System.isParameterTypeInvalid(options.dimBackground,"options.dimBackground",{type:"boolean",required:"undefinedOk"})||TcHmi.System.isParameterTypeInvalid(options.modal,"options.modal",{type:"boolean",required:"undefinedOk"})||TcHmi.System.isParameterTypeInvalid(options.allowMultipleCall,"options.allowMultipleCall",{type:"boolean",required:"undefinedOk"})||TcHmi.System.isParameterTypeInvalid(options.removeCb,"options.removeCb",{type:"function",required:"undefinedOk"})||TcHmi.System.isParameterTypeInvalid(options.resizeCb,"options.resizeCb",{type:"function",required:"undefinedOk"})))&&TcHmi.System.Services.topMostLayer.add(control,element,options))}static remove(control,element){return control&&TcHmi.System.Services.topMostLayer&&!TCHMI_DESIGNER?TcHmi.System.Services.topMostLayer.remove(control,element,!1):element}static addEx(element,options){return!(!TcHmi.System.Services.topMostLayer||TCHMI_DESIGNER)&&((!options||!(TcHmi.System.isParameterTypeInvalid(options.centerHorizontal,"options.centerHorizontal",{type:"boolean",required:"undefinedOk"})||TcHmi.System.isParameterTypeInvalid(options.centerVertical,"options.centerVertical",{type:"boolean",required:"undefinedOk"})||TcHmi.System.isParameterTypeInvalid(options.closeOnBackground,"options.closeOnBackground",{type:"boolean",required:"undefinedOk"})||TcHmi.System.isParameterTypeInvalid(options.dimBackground,"options.dimBackground",{type:"boolean",required:"undefinedOk"})||TcHmi.System.isParameterTypeInvalid(options.modal,"options.modal",{type:"boolean",required:"undefinedOk"})||TcHmi.System.isParameterTypeInvalid(options.allowMultipleCall,"options.allowMultipleCall",{type:"boolean",required:"undefinedOk"})||TcHmi.System.isParameterTypeInvalid(options.justAbove,"options.justAbove",{type:"object",required:"undefinedOk"})||TcHmi.System.isParameterTypeInvalid(options.removeCb,"options.removeCb",{type:"function",required:"undefinedOk"})||TcHmi.System.isParameterTypeInvalid(options.resizeCb,"options.resizeCb",{type:"function",required:"undefinedOk"})))&&TcHmi.System.Services.topMostLayer.add(globalThis,element,options))}static removeEx(element){return!TcHmi.System.Services.topMostLayer||TCHMI_DESIGNER?element:TcHmi.System.Services.topMostLayer.remove(globalThis,element,!1)}}TcHmi.TopMostLayer=TopMostLayer,function(TopMostLayer){let ConflictResolution;!function(ConflictResolution){ConflictResolution[ConflictResolution.Up=0]="Up",ConflictResolution[ConflictResolution.Down=1]="Down"}(ConflictResolution=TopMostLayer.ConflictResolution||(TopMostLayer.ConflictResolution={}))}(TopMostLayer=TcHmi.TopMostLayer||(TcHmi.TopMostLayer={}))}(TcHmi||(TcHmi={})),function(TcHmi){!function(Type){let Schema;Type.getSchema=
/**
         * Returns the schema object for a type definition.
         * Can be used for example with 'tchmi:general#/definitions/String'
         * Returns null on error
         * For schema information on Symbols use its resolveSchema()
         * or for SymbolExpressions use TcHmi.Symbol.resolveSchema()
         * @param typeName Name of the type reference (for example 'tchmi:general#/definitions/String')
         * @preserve (Part of the public API)
         */
function(typeName){return TcHmi.System.Services.typeManager?TcHmi.System.Services.typeManager.getSchema(typeName):(TcHmi.Log.error("[Source=Framework, Module=TcHmi.Type] Getting Schema failed. System not ready."),null)},function(Schema){Schema.resolveDefault=
/**
             * Generates a Javascript object or data primitive from the default values of a schema object.
             * Hint:
             * If you have a type definition string you can use TcHmi.Type.getSchema() API to get the schema object.
             * @param schema Schema so resolve
             * @preserve (Part of the public API)
             */
function(schema){return TcHmi.System.Services.typeManager?TcHmi.System.Type.Schema.resolveDefault(schema):(TcHmi.Log.error("[Source=Framework, Module=TcHmi.Type] Resolving default failed. System not ready."),null)},Schema.resolveType=
/**
             * Resolves the effective type value/s of a schema except those with additional conversion rules.
             * Hint:
             * If you have a type definition string you can use TcHmi.Type.getSchema() API to get the schema object.
             * @param schema Schema to resolve
             * @preserve (Part of the public API)
             */
function(schema){if(TcHmi.System.Services.typeManager)return TcHmi.System.Type.Schema.resolveType(schema);TcHmi.Log.error("[Source=Framework, Module=TcHmi.Type] Resolving default failed. System not ready.")}}(Schema=Type.Schema||(Type.Schema={}))}(TcHmi.Type||(TcHmi.Type={}))}(TcHmi||(TcHmi={})),function(TcHmi){
/**
     * Provides an interface for Ui Provider.
     * @preserve (Part of the public API)
     */
let UiProvider;!function(UiProvider){function getProvider(type,providerName){return UiProvider.getProviders(type).get(providerName)}UiProvider.register=function(provider){const typeMap=TcHmi.System.Data.Registrations.uiProvider.providers[provider.type];if(typeMap.has(provider.providerName))throw new Error(`Provider ${provider.providerName} is already registered as a ${provider.type} provider. Duplicate registrations are not allowed.`);typeMap.set(provider.providerName,provider)},UiProvider.getProviders=function(type){return TcHmi.System.Data.Registrations.uiProvider.providers[type]},UiProvider.getProvider=getProvider,UiProvider.getPreferredProvider=function(type){let name;switch(type){case"keyboard":name=TcHmi.Keyboard.getProviderName();break;case"popup":name=TcHmi.Config.get().systemPopups?.providerName;break;default:throw new Error(`The provider type '${type}' is unknown. Please make sure this switch-case covers all possible values of the parameter 'type'.`)}if(!name)return;const preferredProvider=getProvider(type,name);if(!preferredProvider)throw new Error(`The configured provider '${name}' is not registered. Please make sure that the provider that is configured in tchmiconfig.json is registered with TcHmi.UiProvider.register().`);return preferredProvider};class BaseProvider{constructor(providerName,type){if(Object.defineProperty(this,"providerName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),"string"!=typeof providerName)throw new SyntaxError("providerName parameter has invalid type");if("string"!=typeof type)throw new SyntaxError("type parameter has invalid type");this.providerName=providerName}}UiProvider.BaseProvider=BaseProvider;UiProvider.KeyboardProvider=class extends BaseProvider{constructor(providerName){super(providerName,"keyboard"),Object.defineProperty(this,"type",{enumerable:!0,configurable:!0,writable:!0,value:"keyboard"})}};class PopupProvider extends BaseProvider{constructor(providerName){super(providerName,"popup"),Object.defineProperty(this,"type",{enumerable:!0,configurable:!0,writable:!0,value:"popup"})}}UiProvider.PopupProvider=PopupProvider,function(PopupProvider){let PositioningMode,BackgroundMode;!function(PositioningMode){PositioningMode[PositioningMode.Centered=1]="Centered",PositioningMode[PositioningMode.Floating=2]="Floating"}(PositioningMode=PopupProvider.PositioningMode||(PopupProvider.PositioningMode={})),function(BackgroundMode){BackgroundMode[BackgroundMode.None=1]="None",BackgroundMode[BackgroundMode.Dimmed=2]="Dimmed"}(BackgroundMode=PopupProvider.BackgroundMode||(PopupProvider.BackgroundMode={}));class Popup{constructor(){}}PopupProvider.Popup=Popup;PopupProvider.MessageBox=class extends Popup{constructor(){super(),Object.defineProperty(this,"onButtonPressed",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}};PopupProvider.HtmlElementBox=class extends Popup{constructor(){super(),Object.defineProperty(this,"onButtonPressed",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}};PopupProvider.InputPrompt=class extends Popup{constructor(){super()}};PopupProvider.InteractiveWritePrompt=class extends Popup{constructor(){super()}}}(PopupProvider=UiProvider.PopupProvider||(UiProvider.PopupProvider={}))}(UiProvider=TcHmi.UiProvider||(TcHmi.UiProvider={}))}(TcHmi||(TcHmi={})),function(TcHmi){
/**
     * Allows converting of values from any type to any type if types are compatible.
     * @preserve (Part of the public API)
     */
class ValueConverter{
/**
         * Converts a value to {Object/Array} and returns the {Object/Array} or null if the type of value is not compatible to {Object/Array}.
         * No content check will be done!
         * @param value The value to convert.
         * @param defaultValue The fallback value (null if not given)
         * @template T Type of the resulting object.
         * @preserve (Part of the public API)
         */
static toObject(value,defaultValue=null){return ValueConverter.toObjectEx(value,{defaultValue:defaultValue}).value}
/**
         * Converts a value to {Object/Array} and returns the {Object/Array} or null if the type of value is not compatible to {Object/Array}. Returns a result object for error detection.
         * No content check will be done!
         * @param value The value to convert.
         * @param options options. For exmaple the default value
         * @param options.defaultValue The fallback value (null if not given)
         * @template T Type of the resulting object.
         * @preserve (Part of the public API)
         */static toObjectEx(value,options){const defaultValue=options?.defaultValue??null;let res={error:TcHmi.Errors.NONE,value:defaultValue};if(null==value)return res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must not be null or undefined."},res;if("string"==typeof value&&""!==value)try{res.value=JSON.parse(value)}catch(e){res.error=TcHmi.Errors.E_VALUE_INVALID,e instanceof Error?res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"Converting string to object failed:"+e.message,exception:e}:res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:String(e)}}else"object"==typeof value?null!==value&&(res.value=value):(res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value is not compatible with type object."});return res}
/**
         * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible to string (null if not given)
         * @preserve (Part of the public API)
         */static toString(value,defaultValue=null){return ValueConverter.toStringEx(value,{defaultValue:defaultValue}).value}
/**
         * Converts a value to {string} and returns the {string} or null if the type of value is not compatible to {string}. Returns a result object for error detection.
         * @param value The value to convert.
         * @param options options. For exmaple the default value
         * @param options.defaultValue The fallback value (null if not given)
         * @preserve (Part of the public API)
         */static toStringEx(value,options){const defaultValue=options?.defaultValue??null;let res={error:TcHmi.Errors.NONE,value:defaultValue};if(0===arguments.length)return res.value=Object.toString.call(this),res;if(null==value)return res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must not be null or undefined."},res;switch(typeof value){case"boolean":case"number":case"bigint":res.value=value.toString();break;case"object":value instanceof Date?res.value=value.toISOString():value instanceof TcHmi.Controls.System.baseTcHmiControl!=!0&&value instanceof Element!=!0&&(res.value=JSON.stringify(value));break;case"string":res.value=value;break;default:res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter"}}return res}
/**
         * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @preserve (Part of the public API)
         */static toDimensionUnit(value,defaultValue=null){return ValueConverter.toEnum(value,ValueConverter.DimensionUnitList,defaultValue)}
/**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
         * @param value The value to convert.
         * @param options options. For exmaple the default value
         * @param options.defaultValue The fallback value (null if not given)
         * @preserve (Part of the public API)
         */static toDimensionUnitEx(value,options){return ValueConverter.toEnumEx(value,ValueConverter.DimensionUnitList,options)}
/**
         * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @preserve (Part of the public API)
         */static toAngleUnit(value,defaultValue=null){return ValueConverter.toEnum(value,ValueConverter.AngleUnitList,defaultValue)}
/**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
         * @param value The value to convert.
         * @param options options. For exmaple the default value
         * @param options.defaultValue The fallback value (null if not given)
         * @preserve (Part of the public API)
         */static toAngleUnitEx(value,options){return ValueConverter.toEnumEx(value,ValueConverter.AngleUnitList,options)}
/**
         * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @preserve (Part of the public API)
         */static toBorderStyleValue(value,defaultValue=null){return ValueConverter.toEnum(value,ValueConverter.BorderStyleValueList,defaultValue)}
/**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
         * @param value The value to convert.
         * @param options options. For exmaple the default value
         * @param options.defaultValue The fallback value (null if not given)
         * @preserve (Part of the public API)
         */static toBorderStyleValueEx(value,options){return ValueConverter.toEnumEx(value,ValueConverter.BorderStyleValueList,options)}
/**
         * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @preserve (Part of the public API)
         */static toFontStyle(value,defaultValue=null){return ValueConverter.toEnum(value,ValueConverter.FontStyleList,defaultValue)}
/**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
         * @param value The value to convert.
         * @param options options. For exmaple the default value
         * @param options.defaultValue The fallback value (null if not given)
         * @preserve (Part of the public API)
         */static toFontStyleEx(value,options){return ValueConverter.toEnumEx(value,ValueConverter.FontStyleList,options)}
/**
         * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @preserve (Part of the public API)
         */static toFontSizeUnit(value,defaultValue=null){return ValueConverter.toEnum(value,ValueConverter.FontSizeUnitList,defaultValue)}
/**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
         * @param value The value to convert.
         * @param options options. For exmaple the default value
         * @param options.defaultValue The fallback value (null if not given)
         * @preserve (Part of the public API)
         */static toFontSizeUnitEx(value,options){return ValueConverter.toEnumEx(value,ValueConverter.FontSizeUnitList,options)}
/**
         * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @preserve (Part of the public API)
         */static toFontWeight(value,defaultValue=null){return ValueConverter.toEnum(value,ValueConverter.FontWeightList,defaultValue)}
/**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
         * @param value The value to convert.
         * @param options options. For exmaple the default value
         * @param options.defaultValue The fallback value (null if not given)
         * @preserve (Part of the public API)
         */static toFontWeightEx(value,options){return ValueConverter.toEnumEx(value,ValueConverter.FontWeightList,options)}
/**
         * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @preserve (Part of the public API)
         */static toHorizontalAlignment(value,defaultValue=null){return ValueConverter.toEnum(value,ValueConverter.HorizontalAlignmentList,defaultValue)}
/**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
         * @param value The value to convert.
         * @param options options. For exmaple the default value
         * @param options.defaultValue The fallback value (null if not given)
         * @preserve (Part of the public API)
         */static toHorizontalAlignmentEx(value,options){return ValueConverter.toEnumEx(value,ValueConverter.HorizontalAlignmentList,options)}
/**
         * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @preserve (Part of the public API)
         */static toScaleModeString(value,defaultValue=null){return ValueConverter.toEnum(value,ValueConverter.ScaleModeStringList,defaultValue)}
/**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
         * @param value The value to convert.
         * @param options options. For exmaple the default value
         * @param options.defaultValue The fallback value (null if not given)
         * @preserve (Part of the public API)
         */static toScaleModeStringEx(value,options){return ValueConverter.toEnumEx(value,ValueConverter.ScaleModeStringList,options)}
/**
         * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @preserve (Part of the public API)
         */static toSizeMode(value,defaultValue=null){return ValueConverter.toEnum(value,ValueConverter.SizeModeList,defaultValue)}
/**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
         * @param value The value to convert.
         * @param options options. For exmaple the default value
         * @param options.defaultValue The fallback value (null if not given)
         * @preserve (Part of the public API)
         */static toSizeModeEx(value,options){return ValueConverter.toEnumEx(value,ValueConverter.SizeModeList,options)}
/**
         * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @preserve (Part of the public API)
         */static toSizeModeWithContent(value,defaultValue=null){return ValueConverter.toEnum(value,ValueConverter.SizeModeWithContentList,defaultValue)}
/**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
         * @param value The value to convert.
         * @param options options. For exmaple the default value
         * @param options.defaultValue The fallback value (null if not given)
         * @preserve (Part of the public API)
         */static toSizeModeWithContentEx(value,options){return ValueConverter.toEnumEx(value,ValueConverter.SizeModeWithContentList,options)}
/**
         * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @preserve (Part of the public API)
         */static toVerticalAlignment(value,defaultValue=null){return ValueConverter.toEnum(value,ValueConverter.VerticalAlignmentList,defaultValue)}
/**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
         * @param value The value to convert.
         * @param options options. For exmaple the default value
         * @param options.defaultValue The fallback value (null if not given)
         * @preserve (Part of the public API)
         */static toVerticalAlignmentEx(value,options){return ValueConverter.toEnumEx(value,ValueConverter.VerticalAlignmentList,options)}
/**
         * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @preserve (Part of the public API)
         */static toVisibility(value,defaultValue=null){return ValueConverter.toEnum(value,ValueConverter.VisibilityList,defaultValue)}
/**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
         * @param value The value to convert.
         * @param options options. For exmaple the default value
         * @param options.defaultValue The fallback value (null if not given)
         * @preserve (Part of the public API)
         */static toVisibilityEx(value,options){return ValueConverter.toEnumEx(value,ValueConverter.VisibilityList,options)}
/**
         * Converts a value to enum value and returns the string or the given default value if the type of value is not compatible to the enum.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @preserve (Part of the public API)
         */static toToggleState(value,defaultValue=null){return ValueConverter.toEnum(value,ValueConverter.ToggleStateList,defaultValue)}
/**
         * Converts a value to enum value and returns the string or null if the type of value is not compatible to the enum. Returns a result object for error detection.
         * @param value The value to convert.
         * @param options options. For exmaple the default value
         * @param options.defaultValue The fallback value (null if not given)
         * @preserve (Part of the public API)
         */static toToggleStateEx(value,options){return ValueConverter.toEnumEx(value,ValueConverter.ToggleStateList,options)}
/**
         * Converts a value to fontFamily value and returns the string or null if the type of value is not compatible to {string}.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @preserve (Part of the public API)
         */static toFontFamily(value,defaultValue){return ValueConverter.toString(value,defaultValue)}
/**
         * Converts a value to fontFamily value and returns the string or null if the type of value is not compatible to {string}. Returns a result object for error detection.
         * @param value The value to convert.
         * @param options options. For exmaple the default value
         * @param options.defaultValue The fallback value (null if not given)
         * @preserve (Part of the public API)
         */static toFontFamilyEx(value,options){return ValueConverter.toStringEx(value,options)}static __parseFloatStrict(value){return/^(\-|\+)?(\d+(\.\d+)?([e,E](\-|\+)?\d+)?|Infinity)$/.test(value)?parseFloat(value):NaN}
/**
         * Converts a value to {number}.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible to number (null if not given)
         * @preserve (Part of the public API)
         */static toNumber(value,defaultValue=null){return ValueConverter.toNumberEx(value,{defaultValue:defaultValue}).value}
/**
         * Converts a value to {number}. Returns a result object for error detection.
         * @param value The value to convert.
         * @param options options. For exmaple the default value
         * @param options.defaultValue The fallback value (null if not given)
         * @preserve (Part of the public API)
         */static toNumberEx(value,options){const defaultValue=options?.defaultValue??null;let res={error:TcHmi.Errors.NONE,value:defaultValue};if(null==value)return res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must not be null or undefined."},res;switch(typeof value){case"string":res.value=ValueConverter.__parseFloatStrict(value),isNaN(res.value)&&"NaN"!==value&&(res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value is not a valid number."},res.value=defaultValue);let big=null;try{big=BigInt(value)}catch(e){}void 0!==res.value&&null!==res.value&&!isNaN(res.value)&&null!==big&&(BigInt(value)>BigInt(Number.MAX_SAFE_INTEGER)||BigInt(value)<BigInt(Number.MIN_SAFE_INTEGER))&&(res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value is not within the bounds of 'number'."},res.value=defaultValue);break;case"boolean":switch(value){case!0:res.value=1;break;case!1:res.value=0}break;case"number":res.value=value;break;case"bigint":value>BigInt(Number.MAX_SAFE_INTEGER)?(res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must not be greater than Number.MAX_SAFE_INTEGER."},res.value=defaultValue):value<BigInt(Number.MIN_SAFE_INTEGER)?(res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must not be smaller than Number.MIN_SAFE_INTEGER."},res.value=defaultValue):res.value=Number(value);break;default:res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter"}}return res}
/**
         * Converts a value to {boolean} and returns the {boolean} or null if the type of value is not compatible to {boolean}.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible to boolean (null if not given)
         * @preserve (Part of the public API)
         */static toBoolean(value,defaultValue=null){return ValueConverter.toBooleanEx(value,{defaultValue:defaultValue}).value}
/**
         * Converts a value to {boolean} and returns the {boolean} or null if the type of value is not compatible to {boolean}.
         * @param value The value to convert.
         * @param options options. For exmaple the default value
         * @param options.defaultValue The fallback value (null if not given)
         * @preserve (Part of the public API)
         */static toBooleanEx(value,options){const defaultValue=options?.defaultValue??null;let res={error:TcHmi.Errors.NONE,value:defaultValue};if(null==value)return res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must not be null or undefined."},res;switch(typeof value){case"string":switch(value.toLowerCase()){case"true":res.value=!0;break;case"false":res.value=!1;break;default:res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must be either 'true' or 'false' without case sensitivity."},res.value=defaultValue}break;case"number":switch(value){case 1:res.value=!0;break;case 0:res.value=!1;break;default:res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must be either '1' or '0'."},res.value=defaultValue}break;case"bigint":switch(value){case 1n:res.value=!0;break;case 0n:res.value=!1;break;default:res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must be either '1n' or '0n'."},res.value=defaultValue}break;case"boolean":res.value=value;break;default:res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The type of value must be 'string', 'number', 'bigint' or 'boolean'."},res.value=defaultValue}return res}
/**
         * Converts a value to {BigInt} and returns the {BigInt} or null if the type of value is not compatible to {BigInt}.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible to boolean (null if not given)
         * @preserve (Part of the public API)
         */static toBigInt(value,defaultValue=null){return ValueConverter.toBigIntEx(value,{defaultValue:defaultValue}).value}
/**
         * Converts a value to {BigInt} and returns the 64 bit {BigInt} or null if the type of value is not compatible to {BigInt}. Returns a result object for error detection.
         * @param value The value to convert.
         * @param options options. For exmaple the default value
         * @param options.defaultValue The fallback value (null if not given)
         * @preserve (Part of the public API)
         */static toBigIntEx(value,options){const defaultValue=options?.defaultValue??null;let res={error:TcHmi.Errors.NONE,value:defaultValue};if(null==value)return res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must not be null or undefined."},res;try{let bigint=BigInt(value);return"number"==typeof value&&bigint!=value?(res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value is not a valid bigint."},res.value=defaultValue,res):(res.value=bigint,res)}catch(e){if("string"!=typeof value)return res.error=TcHmi.Errors.E_EXCEPTION,e instanceof Error?res.details={code:TcHmi.Errors.E_EXCEPTION,message:TcHmi.Errors[TcHmi.Errors.E_EXCEPTION],domain:"TcHmi.ValueConverter",reason:"Converting value to BigInt failed:"+e.message,exception:e}:res.details={code:TcHmi.Errors.E_EXCEPTION,message:TcHmi.Errors[TcHmi.Errors.E_EXCEPTION],domain:"TcHmi.ValueConverter",reason:String(e)},res.value=defaultValue,res;try{let num=ValueConverter.toNumber(value);if(null!==num){let bigint=BigInt(num);return bigint!=num?(res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value is not a valid bigint."},res.value=defaultValue,res):(res.value=bigint,res)}return res.error=TcHmi.Errors.E_EXCEPTION,e instanceof Error?res.details={code:TcHmi.Errors.E_EXCEPTION,message:TcHmi.Errors[TcHmi.Errors.E_EXCEPTION],domain:"TcHmi.ValueConverter",reason:"Converting value to BigInt failed:"+e.message,exception:e}:res.details={code:TcHmi.Errors.E_EXCEPTION,message:TcHmi.Errors[TcHmi.Errors.E_EXCEPTION],domain:"TcHmi.ValueConverter",reason:String(e)},res.value=defaultValue,res}catch(e){return res.error=TcHmi.Errors.E_EXCEPTION,e instanceof Error?res.details={code:TcHmi.Errors.E_EXCEPTION,message:TcHmi.Errors[TcHmi.Errors.E_EXCEPTION],domain:"TcHmi.ValueConverter",reason:"Converting value to BigInt failed:"+e.message,exception:e}:res.details={code:TcHmi.Errors.E_EXCEPTION,message:TcHmi.Errors[TcHmi.Errors.E_EXCEPTION],domain:"TcHmi.ValueConverter",reason:String(e)},res.value=defaultValue,res}}}
/**
         * Converts a value to 64 bit {BigInt} (clamping the BigInt value to 64 bits) and returns the 64 bit {BigInt} or null if the type of value is not compatible to 64 bit {BigInt}.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible to boolean (null if not given)
         * @preserve (Part of the public API)
         */static toBigInt64(value,defaultValue=null){return ValueConverter.toBigInt64Ex(value,{defaultValue:defaultValue}).value}
/**
         * Converts a value to 64 bit {BigInt} (clamping the BigInt value to 64 bits) and returns the 64 bit {BigInt} or null if the type of value is not compatible to 64 bit {BigInt}. Returns a result object for error detection.
         * @param value The value to convert.
         * @param options options. For exmaple the default value
         * @param options.defaultValue The fallback value (null if not given)
         * @preserve (Part of the public API)
         */static toBigInt64Ex(value,options){const defaultValue=options?.defaultValue??null;let res={error:TcHmi.Errors.NONE,value:defaultValue};if(null==value)return res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must not be null or undefined."},res;let bigint=ValueConverter.toBigInt(value);if(null===bigint)return res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value is not a valid 64 bit integer."},res.value=defaultValue,res;let bigint64=BigInt.asIntN(64,bigint);return bigint64!==bigint?(res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value is not a valid 64 bit integer."},res.value=defaultValue,res):(res.value=bigint64,res)}
/**
         * Converts a value to unsigned 64 bit {BigInt} (clamping the BigInt value to 64 bits) and returns the 64 bit {BigInt} or null if the type of value is not compatible to 64 bit {BigInt}.
         * @param value The value to convert.
         * @param defaultValue Value which should be returned if value is not compatible to boolean (null if not given)
         * @preserve (Part of the public API)
         */static toUnsignedBigInt64(value,defaultValue=null){return ValueConverter.toUnsignedBigInt64Ex(value,{defaultValue:defaultValue}).value}
/**
         * Converts a value to unsigned 64 bit {BigInt} (clamping the BigInt value to 64 bits) and returns the 64 bit {BigInt} or null if the type of value is not compatible to 64 bit {BigInt}. Returns a result object for error detection.
         * @param value The value to convert.
         * @param options options. For exmaple the default value
         * @param options.defaultValue The fallback value (null if not given)
         * @preserve (Part of the public API)
         */static toUnsignedBigInt64Ex(value,options){const defaultValue=options?.defaultValue??null;let res={error:TcHmi.Errors.NONE,value:defaultValue};if(null==value)return res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must not be null or undefined."},res;let bigint=ValueConverter.toBigInt(value);if(null===bigint)return res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value is not a valid 64 bit unsigned integer."},res.value=defaultValue,res;let ubigint64=BigInt.asUintN(64,bigint);return ubigint64!==bigint?(res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value is not a valid 64 bit unsigned integer."},res.value=defaultValue,res):(res.value=ubigint64,res)}
/**
         * Converts a value to its enum value (reduced allowed value set) and
         * returns the corresponding number (numeric enums) or string (string enums or js objects)
         * or the given default value if the type of value is not compatible to the enum.
         * This is the implementation.
         * @param value The value to convert.
         * @param enumType Enum value to convert to.
         * @param defaultValue Value which should be returned if value is not compatible with the enum (null if not given)
         * @preserve (Part of the public API)
         */static toEnum(value,enumType,defaultValue=null){return ValueConverter.toEnumEx(value,enumType,{defaultValue:defaultValue}).value}
/**
         * Converts a value to enum {number} and returns the enum {number} or null if the type of value is not compatible to enum {Object}. Returns a result object for error detection.
         * @param value The value to convert.
         * @param enumType Enum value to convert to
         * @param options options. For exmaple the default value
         * @param options.defaultValue The fallback value (null if not given)
         * @preserve (Part of the public API)
         */static toEnumEx(value,enumType,options){const defaultValue=options?.defaultValue??null;let res={error:TcHmi.Errors.NONE,value:defaultValue};if(null==value)return res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must not be null or undefined."},res;switch(typeof value){case"string":if(""===value)break;const numValue=parseInt(value,10);isNaN(numValue)?(res.value=enumType[value],void 0===res.value&&(res.value=enumType[value.toLowerCase()]),void 0===res.value&&(res.value=enumType[value.toUpperCase()]),void 0===res.value&&(res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value is not valid for the given enumeration."},res.value=defaultValue)):res=this.toEnumEx(numValue,enumType,defaultValue);break;case"number":void 0!==enumType[value]?res.value=value:(res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value is not valid for the given enumeration."},res.value=defaultValue);break;case"boolean":res=this.toEnumEx(this.toNumber(value),enumType,defaultValue);break;default:res.error=TcHmi.Errors.E_VALUE_INVALID,res.details={code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must be of type 'string', 'number' or 'boolean'."},res.value=defaultValue}return res}
/**
         * Converts a value to the best effort value related to schema addressed by its name or null if no schema related type is matching or schema is unknown.
         * @param value The value to convert.
         * @param typeName TcHmi type name
         * @param options options. For exmaple the conversion direction
         * @param options.convertDirection Direction of conversion.
         * @preserve (Part of the public API)
         */static toType(value,typeName,options){return ValueConverter.toTypeEx(value,typeName,options).value}
/**
         * Converts a value to the best effort value related to schema addressed by its name or null if no schema related type is matching or schema is unknown. Returns a result object for error detection.
         * @param value The value to convert.
         * @param typeName TcHmi type name
         * @param options options. For exmaple the conversion direction
         * @param options.convertDirection Direction of conversion.
         * @preserve (Part of the public API)
         */static toTypeEx(value,typeName,options){if(!TcHmi.System.Services.typeManager){const errorDetail={code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],reason:"System not ready.",domain:"TcHmi.ValueConverter"};return{error:errorDetail.code,details:errorDetail,value:null}}if(null==value){return{error:TcHmi.Errors.E_VALUE_INVALID,details:{code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must not be null or undefined."},value:null}}const schemaRes=TcHmi.System.Services.typeManager.getSchemaEx(typeName);if(schemaRes.error!==TcHmi.Errors.NONE){return{error:schemaRes.error,details:{code:schemaRes.error,message:TcHmi.Errors[schemaRes.error],domain:"TcHmi.ValueConverter",reason:"Resolving the schema: '"+typeName+"' failed.",errors:schemaRes.details?[schemaRes.details]:void 0},value:null}}const valueRes=ValueConverter.toSchemaType(value,schemaRes.schema,options);return{error:TcHmi.Errors.NONE,value:valueRes}}
/**
         * Converts a value to the best effort value related to schema or null if no schema related type is matching.
         * @param value The value to convert.
         * @param schema json schema as an object
         * @param options options. For exmaple the conversion direction
         * @param options.convertDirection Direction of conversion.
         * @param options.resolveFunctionWriteValue A schema which describes a function on the server will describe the type of return value on root level. Set this option to true to resolve the writeValue schema instead.
         * @preserve (Part of the public API)
         */static toSchemaType(value,schema,options){return ValueConverter.toSchemaTypeEx(value,schema,options).value}
/**
         * Converts a value to the best effort value related to schema or null if no schema related type is matching. Returns a result object for error detection.
         * @param value The value to convert.
         * @param schema json schema as an object
         * @param options options. For exmaple the conversion direction
         * @param options.convertDirection Direction of conversion.
         * @param options.resolveFunctionWriteValue A schema which describes a function on the server will describe the type of return value on root level. Set this option to true to resolve the writeValue schema instead.
         * @preserve (Part of the public API)
         */static toSchemaTypeEx(value,schema,options){if(null==value){return{error:TcHmi.Errors.E_VALUE_INVALID,details:{code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value must not be null or undefined."},value:null}}if(null==schema)return{error:TcHmi.Errors.E_PARAMETER_INVALID,details:{code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],domain:"TcHmi.ValueConverter",reason:"The parameter: 'schema' must be a valid object of type: 'TcHmi.JsonSchema'."},value:null};if(options&&options.resolveFunctionWriteValue&&schema.writeValue)return this.toSchemaTypeEx(value,schema.writeValue,options.convertDirection?{convertDirection:options.convertDirection}:void 0);const typeOfValue=typeof value,ruleSchemaMap=TcHmi.System.Type.Schema.resolveTypeConvertRuleSchemaMap(schema);if(ruleSchemaMap){if(options&&options.convertDirection===ValueConverter.ConvertDirection.Backward){let res;for(const key of ruleSchemaMap.keys()){if(!key)continue;const ruleSchemas=ruleSchemaMap.get(key);if(ruleSchemas&&"string"===key)for(let ruleSchema of ruleSchemas){if(res=ValueConverter.toString(value),ruleSchema&&(!ruleSchema.enum||ruleSchema.enum&&ruleSchema.enum.includes(res)))break;res=void 0}if(void 0!==res)break}if(void 0!==res)return{error:TcHmi.Errors.NONE,value:res}}else{const ruleSchemas=ruleSchemaMap.get(typeOfValue);if(ruleSchemas)for(let ruleSchema of ruleSchemas)switch(ruleSchema.convert){case"number":{let res=ValueConverter.toNumberEx(value);if(res.error===TcHmi.Errors.NONE)return res;break}case"string":{let res=ValueConverter.toStringEx(value);if(res.error===TcHmi.Errors.NONE)return res}break;case"boolean":{let res=ValueConverter.toBooleanEx(value);if(res.error===TcHmi.Errors.NONE)return res}break;case"bigint":{let res=ValueConverter.toBigIntEx(value);if(res.error===TcHmi.Errors.NONE)return res}break;case"bigint64":{let res=ValueConverter.toBigInt64Ex(value);if(res.error===TcHmi.Errors.NONE)return res}break;case"unsignedbigint64":{let res=ValueConverter.toUnsignedBigInt64Ex(value);if(res.error===TcHmi.Errors.NONE)return res}}}for(let entry of ruleSchemaMap.entries())for(let ruleSchema of entry[1])if(typeOfValue===ruleSchema.convert||"bigint"===typeOfValue&&("bigint64"===ruleSchema.convert||"unsignedbigint64"===ruleSchema.convert))return{error:TcHmi.Errors.NONE,value:value}}const schemaType=TcHmi.System.Type.Schema.resolveType(schema);if("string"!=typeof schemaType&&!Array.isArray(schemaType))return{error:TcHmi.Errors.ERROR,details:{code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],domain:"TcHmi.ValueConverter",reason:"Failed to resolve type from given schema."},value:null};if(Array.isArray(schemaType)){if("string"===typeOfValue||"number"===typeOfValue||"boolean"===typeOfValue||"object"===typeOfValue){if(schemaType.includes(typeOfValue))return{error:TcHmi.Errors.NONE,value:value};for(const validType of schemaType){let res;switch(validType){case"object":case"array":res=ValueConverter.toObjectEx(value);break;case"string":res=ValueConverter.toStringEx(value);break;case"integer":case"number":res=ValueConverter.toNumberEx(value);break;case"boolean":res=ValueConverter.toBooleanEx(value);break;default:res=null}if(null!==res)return{error:TcHmi.Errors.NONE,value:res.value}}}}else switch(schemaType){case"object":case"array":return ValueConverter.toObjectEx(value);case"string":return ValueConverter.toStringEx(value);case"integer":case"number":return ValueConverter.toNumberEx(value);case"boolean":return ValueConverter.toBooleanEx(value)}return{error:TcHmi.Errors.E_VALUE_INVALID,details:{code:TcHmi.Errors.E_VALUE_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_VALUE_INVALID],domain:"TcHmi.ValueConverter",reason:"The value is not compatible with any definition in the given schema."},value:null}}}Object.defineProperty(ValueConverter,"AngleUnitList",{enumerable:!0,configurable:!0,writable:!0,value:{deg:"deg",rad:"rad",turn:"turn",grad:"grad"}}),Object.defineProperty(ValueConverter,"BorderStyleValueList",{enumerable:!0,configurable:!0,writable:!0,value:{Solid:"Solid",Dashed:"Dashed",Dotted:"Dotted",None:"None"}}),Object.defineProperty(ValueConverter,"DimensionUnitList",{enumerable:!0,configurable:!0,writable:!0,value:{px:"px","%":"%"}}),Object.defineProperty(ValueConverter,"FontSizeUnitList",{enumerable:!0,configurable:!0,writable:!0,value:{px:"px","%":"%",em:"em",rem:"rem"}}),Object.defineProperty(ValueConverter,"FontStyleList",{enumerable:!0,configurable:!0,writable:!0,value:{Normal:"Normal",Italic:"Italic",Oblique:"Oblique",Auto:"Auto"}}),Object.defineProperty(ValueConverter,"FontWeightList",{enumerable:!0,configurable:!0,writable:!0,value:{Normal:"Normal",Bold:"Bold",Auto:"Auto"}}),Object.defineProperty(ValueConverter,"HorizontalAlignmentList",{enumerable:!0,configurable:!0,writable:!0,value:{Left:"Left",Center:"Center",Right:"Right"}}),Object.defineProperty(ValueConverter,"ScaleModeStringList",{enumerable:!0,configurable:!0,writable:!0,value:{None:"None",ScaleToFill:"ScaleToFill",ScaleToFit:"ScaleToFit",ScaleToFitWidth:"ScaleToFitWidth",ScaleToFitHeight:"ScaleToFitHeight"}}),Object.defineProperty(ValueConverter,"SizeModeList",{enumerable:!0,configurable:!0,writable:!0,value:{Value:"Value",Parent:"Parent"}}),Object.defineProperty(ValueConverter,"SizeModeWithContentList",{enumerable:!0,configurable:!0,writable:!0,value:{Value:"Value",Parent:"Parent",Content:"Content"}}),Object.defineProperty(ValueConverter,"ToggleStateList",{enumerable:!0,configurable:!0,writable:!0,value:{Normal:"Normal",Active:"Active"}}),Object.defineProperty(ValueConverter,"VerticalAlignmentList",{enumerable:!0,configurable:!0,writable:!0,value:{Top:"Top",Center:"Center",Bottom:"Bottom"}}),Object.defineProperty(ValueConverter,"VisibilityList",{enumerable:!0,configurable:!0,writable:!0,value:{Visible:"Visible",Hidden:"Hidden",Collapsed:"Collapsed"}}),TcHmi.ValueConverter=ValueConverter,function(ValueConverter){let ConvertDirection;!function(ConvertDirection){ConvertDirection[ConvertDirection.Forward=0]="Forward",ConvertDirection[ConvertDirection.Backward=1]="Backward"}(ConvertDirection=ValueConverter.ConvertDirection||(ValueConverter.ConvertDirection={}))}(ValueConverter=TcHmi.ValueConverter||(TcHmi.ValueConverter={}))}(TcHmi||(TcHmi={})),function(TcHmi){TcHmi.View=
/**
     * Provides functions to set partials as view.
     * @preserve (Part of the public API)
     */
class{
/**
         * Loads a view partial into the dom.
         * @param url URL of the view file to load
         * @param callback Callback will be called on success or failure
         * @preserve (Part of the public API)
         */
static load(url,callback=null){if(!0===TCHMI_DESIGNER)TcHmi.Log.warn("[Source=Framework, Module=TcHmi.View] Loading an additional view level element in designer context is not allowed and therefore blocked."),TcHmi.Callback.callSafe(callback,null,{error:TcHmi.Errors.E_NOT_ALLOWED});else if(TcHmi.System.Services.viewManager){if(TcHmi.System.isParameterTypeInvalid(url,"url",{type:"string",required:"valueNeeded",minStringLength:1},"TcHmi.View",callback))return;TcHmi.System.Services.viewManager.loadView(url,callback)}else TcHmi.Log.error("[Source=Framework, Module=TcHmi.View] Loading view failed. System not ready."),TcHmi.Callback.callSafe(callback,null,{error:TcHmi.Errors.ERROR})}
/**
         * Returns the current view object.
         * @preserve (Part of the public API)
         */static get(){return!0===TCHMI_DESIGNER?(TcHmi.Log.warn("[Source=Framework, Module=TcHmi.View] Accessing a view level element is not allowed in designer context and therefore blocked."),null):TcHmi.System.Services.viewManager?TcHmi.System.Services.viewManager.getView():(TcHmi.Log.error("[Source=Framework, Module=TcHmi.View] Getting view failed. System not ready."),null)}
/**
         * Sets the view scale mode.
         * @param scaleMode new value
         * @preserve (Part of the public API)
         */static setScaleMode(scaleMode){!0===TCHMI_DESIGNER?TcHmi.Log.warn("[Source=Framework, Module=TcHmi.View] Accessing a view level element is not allowed in designer context and therefore blocked."):TcHmi.System.Services.viewManager?TcHmi.System.Services.viewManager.setScaleMode(scaleMode):TcHmi.Log.error("[Source=Framework, Module=TcHmi.View] Setting view scale mode failed. System not ready.")}static addViewportElement(element,options){if(!TcHmi.System.Services.viewManager)return TcHmi.Log.error("[Source=Framework, Module=TcHmi.View] Adding element failed. System not ready."),{code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],domain:"TcHmi.View"};let paramInvalid=TcHmi.System.isParameterTypeInvalid(element,"element",{type:"object",required:"valueNeeded"});return paramInvalid||(paramInvalid=TcHmi.System.isParameterTypeInvalid(options.name,"options.name",{type:"string",required:"undefinedOk",minStringLength:1}),paramInvalid||("header"!==options.area&&"main"!==options.area&&"footer"!==options.area?{code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],reason:"Invalid parameter for options.area"}:TcHmi.System.Services.viewManager.addViewportElement(element,options)))}static removeViewportElement(element){return TcHmi.System.Services.viewManager?TcHmi.System.Services.viewManager.removeViewportElement(element):(TcHmi.Log.error("[Source=Framework, Module=TcHmi.View] Removing element failed. System not ready."),{code:TcHmi.Errors.E_SYSTEM_NOT_READY,message:TcHmi.Errors[TcHmi.Errors.E_SYSTEM_NOT_READY],domain:"TcHmi.View"})}static getViewportElementDimension(area="main"){return TcHmi.System.Services.viewManager?"main"!==area&&"footer"!==area&&"header"!==area?(TcHmi.Log.error("[Source=Framework, Module=TcHmi.View] Fetching dimension failed. Support for other areas not implemented."),null):TcHmi.System.Services.viewManager.getViewportElementDimension(area):(TcHmi.Log.error("[Source=Framework, Module=TcHmi.View] Fetching dimension failed. System not ready."),null)}}}(TcHmi||(TcHmi={}));const __tchmi_is_instanced_object=function(obj){if(null===obj||"object"!=typeof obj)return!1;void 0===__tchmi_is_instanced_object.__objectPrototype&&(__tchmi_is_instanced_object.__objectPrototype=Object.getPrototypeOf({})),void 0===__tchmi_is_instanced_object.__arrayPrototype&&(__tchmi_is_instanced_object.__arrayPrototype=Object.getPrototypeOf([]));let proto=Object.getPrototypeOf(obj);return null!==proto&&proto!==__tchmi_is_instanced_object.__objectPrototype&&proto!==__tchmi_is_instanced_object.__arrayPrototype};
/**
 * Clones the data {Object} in param obj and returns a clone of it.
 * This function will not create clones of objects based on a prototype definition (like class instances) and function references
 * and return the original reference instead.
 * String, null, undefined are returned directly as they are immutable / handled by value.
 * @param obj The object to clone.
 * @param options Options to define what should be cloned and how it should be cloned.
 * @param options.cloneMaps If set, maps will be cloned. Otherwise maps will be returned unchanged.
 * @param options.cloneMaps.deepCloneKeys Set to true to also clone map keys. Otherwise map keys will be reference equal to the keys in the original map.
 * @param options.cloneMaps.deepCloneValues Set to true to also clone map values. Otherwise map values will be reference equal to the values in the original map.
 * @param options.cloneSets If set, sets will be cloned. Otherwise sets will be returned unchanged.
 * @param options.cloneSets.deepCloneValues Set to true to also clone set values. Otherwise set values will be reference equal to the values in the original set.
 * @param options.cloneDates If true, dates will be cloned. Otherwise dates will be returned unchanged.
 * @param options.resolveRecursiveReferences If true, the function will keep track of all objects that are cloned and thus be able to detect and properly clone recursive references.
 * @returns Clone of param obj.
 * @template T defines the type of the target object
 * @preserve (Part of the public API)
 */function tchmi_clone_object(obj,options){const clonedObjects=new Map,clone=function(value){const valueType=typeof value;if("function"===valueType)return value;if(options?.resolveRecursiveReferences){const clonedValue=clonedObjects.get(value);if(clonedValue)return clonedValue}if(options){if(options.cloneMaps&&value instanceof Map){const result=new Map;options?.resolveRecursiveReferences&&clonedObjects.set(value,result);for(const[key,member]of value)result.set(options.cloneMaps.deepCloneKeys?clone(key):key,options.cloneMaps.deepCloneValues?clone(member):member);return result}if(options.cloneSets&&value instanceof Set){const result=new Set;options?.resolveRecursiveReferences&&clonedObjects.set(value,result);for(const member of value)result.add(options.cloneSets.deepCloneValues?clone(member):member);return result}if(options.cloneDates&&value instanceof Date){const result=new Date(value.valueOf());return options?.resolveRecursiveReferences&&clonedObjects.set(value,result),result}}if(null===value||"object"!==valueType||__tchmi_is_instanced_object(value))return value;if(Array.isArray(value)){const result=[];options?.resolveRecursiveReferences&&clonedObjects.set(value,result);for(let[i,elem]of value.entries())i in value?result.push(clone(elem)):result.length++;return result}{const result={};options?.resolveRecursiveReferences&&clonedObjects.set(value,result);for(let key in value)result[key]=clone(value[key]);return result}};return clone(obj)}function tchmi_compare_object(o1,o2,entryPath){if(__tchmi_is_instanced_object(o1)||__tchmi_is_instanced_object(o2))return null;let res=[];entryPath??(entryPath="");for(const p in o1)if(void 0!==o1[p]&&null!==o1[p]&&void 0!==o2[p]&&null!==o2[p]&&"object"==typeof o1[p]&&"object"==typeof o2[p])if(Array.isArray(o1)){const subDirtyPath=tchmi_compare_object(o1[p],o2[p],entryPath+"["+p+"]");if(null===subDirtyPath)return null;res=res.concat(subDirtyPath)}else{const subDirtyPath=tchmi_compare_object(o1[p],o2[p],entryPath+"::"+p);if(null===subDirtyPath)return null;res=res.concat(subDirtyPath)}else tchmi_equal(o1[p],o2[p])||(Array.isArray(o1)?res.push(entryPath+"["+p+"]"):res.push(entryPath+"::"+p));for(const p in o2)void 0!==o2[p]&&void 0===o1[p]&&(Array.isArray(o2)?res.push(entryPath+"["+p+"]"):res.push(entryPath+"::"+p));return res}
/**
 * Unify a path string.
 * Replace all backslashes with slashes, replace multiple slashes with single slashes except ://, remove leading slash.
 * @param path The path.
 * @returns Unified path.
 * @preserve (Part of the public API)
 */function tchmi_path(path){if("string"==typeof path){if(path.startsWith("data:")||path.startsWith("file:")||path.startsWith("http://")||path.startsWith("https://")||path.startsWith("ws://")||path.startsWith("wss://"))return new URL(path).toString();let tokens=path.replace(/\\+/g,"/").split("/");for(let i=0,ii=tokens.length;i<ii;i++){let token=tokens[i];if(""===token)tokens.splice(i,1),i--;else if("."===token)tokens.splice(i,1),i--;else if(".."===token){let tokenprev=tokens[i-1];tokenprev&&".."!==tokenprev&&(tokens.splice(i,1),tokens.splice(i-1,1),i-=2)}}return tokens.join("/")}return path}
/**
 * Converts a String to a valid CSS id pattern by escaping all reserved characters.
 * @param id The target id.
 * @returns Converted id.
 * @preserve (Part of the public API)
 */function tchmi_css_escape_selector(id){return CSS&&CSS.escape?CSS.escape(id):jQuery.escapeSelector(id)}
/**
 * tchmi_escape_regex
 * @param text text to escape
 * @preserve (Part of the public API)
 */function tchmi_escape_regex(text){return"string"!=typeof text&&"function"==typeof text.toString&&(text=text.toString()),text.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function tchmi_format_string(formatString,...args){let formattedString="",index=0;for(let i=0,ii=formatString.length;i<ii;i++)if("{"===formatString[i])if("{"===formatString[i+1])formattedString+="{",i++;else{let end=formatString.indexOf("}",i),placeholder=formatString.substring(i+1,end),regEx=/(?:([0-9]\d*)\||\(([^\)]+)\))?(\+)?(0|'[^|])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/.exec(placeholder);if(null!==regEx){let regExDescription={placeholder:regEx[0],parameterIndex:regEx[1],key:regEx[2],sign:regEx[3],charToAddBefore:regEx[4],align:regEx[5],lengthToAdd:regEx[6],decimal:regEx[7],type:regEx[8]},indexNow=index;if(null===regEx[8]||void 0===regEx[0]){formattedString+=regEx[1],i=end,index++;continue}null!==regExDescription.parameterIndex&&void 0!==regExDescription.parameterIndex&&(indexNow=parseInt(regExDescription.parameterIndex,10));let arg=args[indexNow],decimal=null!==regEx?parseInt(regExDescription.decimal,10):void 0;switch(regExDescription.type){case"d":case"i":case"u":arg=parseInt(arg,10);break;case"o":arg=parseInt(arg,10).toString(8);break;case"x":arg=parseInt(arg,10).toString(16);break;case"X":arg=parseInt(arg,10).toString(16).toUpperCase();break;case"f":arg="number"!=typeof decimal||Number.isNaN(decimal)?parseFloat(arg):parseFloat(arg).toFixed(decimal);break;case"e":arg="number"!=typeof decimal||Number.isNaN(decimal)?parseFloat(arg).toExponential():parseFloat(arg).toExponential(decimal);break;case"g":arg="number"!=typeof decimal||Number.isNaN(decimal)?parseFloat(arg):String(Number(arg.toPrecision(decimal)));break;case"s":arg=null===arg?"null":void 0===arg?"undefined":TcHmi.ValueConverter.toString(arg,""),"number"!=typeof decimal||Number.isNaN(decimal)||(arg=arg.substring(0,decimal));break;case"b":arg=parseInt(arg,10).toString(2);break;case"t":arg=TcHmi.ValueConverter.toBoolean(arg),null===arg&&(arg=void 0),arg=decimal?arg.substring(0,decimal):arg;break;case"T":arg=null===arg?"null":typeof arg,"number"!=typeof decimal||Number.isNaN(decimal)||(arg=arg.substring(0,decimal));break;case"v":arg=null===arg?"null":void 0===arg?"undefined":arg.valueOf(),"number"!=typeof decimal||Number.isNaN(decimal)||(arg=arg.substring(0,decimal));break;case"j":arg=JSON.stringify(arg,null,regExDescription.lengthToAdd?parseInt(regExDescription.lengthToAdd,10):0)}if(/[j]/.exec(regExDescription.type))formattedString+=arg;else{let isPositive,sign,isNumber=/[d-g,i]/.test(regExDescription.type);isNumber&&(isPositive=arg>=0),!isNumber||isPositive&&!regExDescription.sign||isNaN(arg)?sign="":(sign=isPositive?"+":"",arg=arg.toString().replace(regExDescription.sign,""));let char=regExDescription.charToAddBefore?"0"===regExDescription.charToAddBefore?"0":regExDescription.charToAddBefore.charAt(1):" ",charLength=parseInt(regExDescription.lengthToAdd,10)-(sign+arg).length,charToAdd=regExDescription.lengthToAdd&&charLength>0?Array(charLength+1).join(char):"";formattedString+=regExDescription.align?sign+arg+charToAdd:"0"===char?sign+charToAdd+arg:charToAdd+sign+arg}index++,i=end}else{let onlyNumber=/([0-9]\d*)/.exec(placeholder);if(null!==onlyNumber){formattedString+=args[onlyNumber[0]],i=end}}}else"}"===formatString[i]?"}"===formatString[i+1]&&(formattedString+="}",i++):formattedString+=formatString[i];return formattedString}function tchmi_compare_version(a,b){let tokensA=a.split("."),tokensB=b.split(".");if(tokensA.length!==tokensB.length)throw new Error("Version range missmatch. Both version strings must have the same range.");for(let i=0;i<tokensA.length;i++){let tokenA=tokensA[i],tokenB=tokensB[i],numA=parseInt(tokenA,10),numB=parseInt(tokenB,10);if(numA<numB)return-1;if(numA>numB)return 1}return 0}
/**
 * TwinCAT HMI API
 * Check out
 * https://infosys.beckhoff.com/content/1031/te2000_tc3_hmi_engineering/3730606987.html?id=1426887615595781518
 * for an API reference.
 * @preserve (Part of the public API)
 */var TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi,TcHmi;function gIsolatedEval_TcHmi_System_FunctionExpression_Results(s,resSE,resFCE){return eval(s)}function gIsolatedEval_TcHmi_System_FunctionExpression(s){return eval(s)}function gIsolatedEval_TcHmi_System_TriggerManager_JavaScriptAction(ctx,s){return eval(s)}function gIsolatedEval_TcHmi_System_TriggerManager_ConditionExpressionsResult(s,results){return eval(s)}!function(TcHmi){let Endianness,PartialType,TcSpeech,Errors;!function(Endianness){Endianness[Endianness.LittleEndian=0]="LittleEndian",Endianness[Endianness.BigEndian=1]="BigEndian"}(Endianness=TcHmi.Endianness||(TcHmi.Endianness={})),function(PartialType){PartialType[PartialType.Invalid=0]="Invalid",PartialType[PartialType.View=1]="View",PartialType[PartialType.Content=2]="Content",PartialType[PartialType.UserControl=3]="UserControl"}(PartialType=TcHmi.PartialType||(TcHmi.PartialType={})),function(TcSpeech){let AudioEntityPriority;!function(AudioEntityPriority){AudioEntityPriority[AudioEntityPriority.Low=5]="Low",AudioEntityPriority[AudioEntityPriority.Normal=10]="Normal",AudioEntityPriority[AudioEntityPriority.High=15]="High"}(AudioEntityPriority=TcSpeech.AudioEntityPriority||(TcSpeech.AudioEntityPriority={}))}(TcSpeech=TcHmi.TcSpeech||(TcHmi.TcSpeech={})),function(Errors){Errors[Errors.NONE=0]="NONE",Errors[Errors.ERROR=1]="ERROR",Errors[Errors.E_PARAMETER_INVALID=2]="E_PARAMETER_INVALID",Errors[Errors.E_TIMEOUT=3]="E_TIMEOUT",Errors[Errors.E_EXCEPTION=4]="E_EXCEPTION",Errors[Errors.E_INVALID=5]="E_INVALID",Errors[Errors.E_NOT_UNIQUE=6]="E_NOT_UNIQUE",Errors[Errors.E_OUT_OF_RANGE=7]="E_OUT_OF_RANGE",Errors[Errors.E_DESTROYED=8]="E_DESTROYED",Errors[Errors.E_NOT_SUPPORTED=100]="E_NOT_SUPPORTED",Errors[Errors.E_SYSTEM_NOT_READY=105]="E_SYSTEM_NOT_READY",Errors[Errors.E_NOT_ALLOWED=110]="E_NOT_ALLOWED",Errors[Errors.E_UNKNOWN=115]="E_UNKNOWN",Errors[Errors.E_UNKNOWN_TYPE=120]="E_UNKNOWN_TYPE",Errors[Errors.E_KEY_NOT_FOUND=130]="E_KEY_NOT_FOUND",Errors[Errors.E_TYPE_INVALID=150]="E_TYPE_INVALID",Errors[Errors.E_VALUE_INVALID=160]="E_VALUE_INVALID",Errors[Errors.E_REGISTRATION_MISSING=180]="E_REGISTRATION_MISSING",Errors[Errors.E_REGISTRATION_ERROR=190]="E_REGISTRATION_ERROR",Errors[Errors.E_MODULE_MISSING=200]="E_MODULE_MISSING",Errors[Errors.E_MODULE_ERROR=210]="E_MODULE_ERROR",Errors[Errors.E_WEBSOCKET_NOT_READY=1e3]="E_WEBSOCKET_NOT_READY",Errors[Errors.E_WEBSOCKET_CLOSED=1001]="E_WEBSOCKET_CLOSED",Errors[Errors.E_WEBSOCKET_NOT_SUPPORTED=1404]="E_WEBSOCKET_NOT_SUPPORTED",Errors[Errors.E_WEBSOCKET_OPEN_SERVER_LICENSE_CHECK_FAILED=1500]="E_WEBSOCKET_OPEN_SERVER_LICENSE_CHECK_FAILED",Errors[Errors.E_WEBSOCKET_OPEN_SERVER_LICENSE_MISSING=1501]="E_WEBSOCKET_OPEN_SERVER_LICENSE_MISSING",Errors[Errors.E_WEBSOCKET_OPEN_SERVER_NO_ACCESS=1502]="E_WEBSOCKET_OPEN_SERVER_NO_ACCESS",Errors[Errors.E_SYMBOL_STATE_INVALID=2e3]="E_SYMBOL_STATE_INVALID",Errors[Errors.E_SYMBOL_VALUE_INVALID=2001]="E_SYMBOL_VALUE_INVALID",Errors[Errors.E_SYMBOL_RESOLVE_SCHEMA=2002]="E_SYMBOL_RESOLVE_SCHEMA",Errors[Errors.E_SYMBOL_READONLY=2003]="E_SYMBOL_READONLY",Errors[Errors.E_SYMBOL_UNKNOWN=2010]="E_SYMBOL_UNKNOWN",Errors[Errors.E_SYMBOL_INVALID_DATA_PROVIDER_ENTRY=2020]="E_SYMBOL_INVALID_DATA_PROVIDER_ENTRY",Errors[Errors.E_SYMBOL_INVALID_PATH=2030]="E_SYMBOL_INVALID_PATH",Errors[Errors.E_SYMBOL_SUBSYMBOL_ERROR=2040]="E_SYMBOL_SUBSYMBOL_ERROR",Errors[Errors.E_SYMBOL_SUBVALUE_ERROR=2045]="E_SYMBOL_SUBVALUE_ERROR",Errors[Errors.E_SYMBOL_OBJECT_RESOLVE=2050]="E_SYMBOL_OBJECT_RESOLVE",Errors[Errors.E_SYMBOL_RESOLVE_META_DATA=2060]="E_SYMBOL_RESOLVE_META_DATA",Errors[Errors.E_SYMBOL_UNKNOWN_ATTRIBUTE=2100]="E_SYMBOL_UNKNOWN_ATTRIBUTE",Errors[Errors.E_SYMBOL_RESOLVE_EXPRESSION=2150]="E_SYMBOL_RESOLVE_EXPRESSION",Errors[Errors.E_SERVER_RESPONSE_ERROR=3e3]="E_SERVER_RESPONSE_ERROR",Errors[Errors.E_SERVER_COMMAND_ERROR=3005]="E_SERVER_COMMAND_ERROR",Errors[Errors.E_SERVER_INVALID_RESPONSE=3010]="E_SERVER_INVALID_RESPONSE",Errors[Errors.E_SERVER_COMMANDS_MISSING=3015]="E_SERVER_COMMANDS_MISSING",Errors[Errors.E_SERVER_COMMAND_MISSING=3016]="E_SERVER_COMMAND_MISSING",Errors[Errors.E_SERVER_READVALUE_MISSING=3020]="E_SERVER_READVALUE_MISSING",Errors[Errors.E_SERVER_WRITEVALUE_MISSING=3025]="E_SERVER_WRITEVALUE_MISSING",Errors[Errors.E_SERVER_RESPONSE_MISSING=3030]="E_SERVER_RESPONSE_MISSING",Errors[Errors.E_SERVER_DOMAIN_UNKNOWN=3100]="E_SERVER_DOMAIN_UNKNOWN",Errors[Errors.E_SERVER_HANDSHAKE=3200]="E_SERVER_HANDSHAKE",Errors[Errors.E_FUNCTION_MISSING_FUNCTION_REFERENCE=4e3]="E_FUNCTION_MISSING_FUNCTION_REFERENCE",Errors[Errors.E_FUNCTION_MISSING_FUNCTION_DESCRIPTION=4005]="E_FUNCTION_MISSING_FUNCTION_DESCRIPTION",Errors[Errors.E_FUNCTION_INVALID_CONFIGURATION=4010]="E_FUNCTION_INVALID_CONFIGURATION",Errors[Errors.E_FUNCTION_EXCEPTION=4020]="E_FUNCTION_EXCEPTION",Errors[Errors.E_FUNCTION_UNKNOWN=4030]="E_FUNCTION_UNKNOWN",Errors[Errors.E_FUNCTION_RESTPARAMETER_DEFINITION_MISSING=4040]="E_FUNCTION_RESTPARAMETER_DEFINITION_MISSING",Errors[Errors.E_FUNCTION_RESOLVING_PARAMETER_FAILED=4050]="E_FUNCTION_RESOLVING_PARAMETER_FAILED",Errors[Errors.E_FUNCTION_HANDLED_VIA_RETURN_VALUE=4060]="E_FUNCTION_HANDLED_VIA_RETURN_VALUE",Errors[Errors.E_FUNCTION_EXPRESSION_PARSER_ERROR=4100]="E_FUNCTION_EXPRESSION_PARSER_ERROR",Errors[Errors.E_FUNCTION_EXPRESSION_EXCEPTION=4120]="E_FUNCTION_EXPRESSION_EXCEPTION",Errors[Errors.E_FUNCTION_CALL_ABORTED=4130]="E_FUNCTION_CALL_ABORTED",Errors[Errors.E_FUNCTION_DESTROYED=4140]="E_FUNCTION_DESTROYED",Errors[Errors.E_TRIGGER_ACTION_EXCEPTION=5050]="E_TRIGGER_ACTION_EXCEPTION",Errors[Errors.E_TRIGGER_JAVASCRIPT_EVAL_EXCEPTION=5055]="E_TRIGGER_JAVASCRIPT_EVAL_EXCEPTION",Errors[Errors.E_TRIGGER_FUNCTION_EXPRESSION_EXCEPTION=5060]="E_TRIGGER_FUNCTION_EXPRESSION_EXCEPTION",Errors[Errors.E_TRIGGER_RESOLVE_CONDITION_EXPRESSION_EXCEPTION=5065]="E_TRIGGER_RESOLVE_CONDITION_EXPRESSION_EXCEPTION",Errors[Errors.E_TRIGGER_CONDITION_INVALID=5200]="E_TRIGGER_CONDITION_INVALID",Errors[Errors.E_CONTROL_INSTANCE_NOT_FOUND=6e3]="E_CONTROL_INSTANCE_NOT_FOUND",Errors[Errors.E_CONTROL_INVALID_CONFIGURATION=6001]="E_CONTROL_INVALID_CONFIGURATION",Errors[Errors.E_CONTROL_ATTRIBUTE_NOT_FOUND=6005]="E_CONTROL_ATTRIBUTE_NOT_FOUND",Errors[Errors.E_CONTROL_ATTRIBUTE_INVALID_CONFIGURATION=6010]="E_CONTROL_ATTRIBUTE_INVALID_CONFIGURATION",Errors[Errors.E_CONTROL_INSTANCE_NO_LONGER_AVAILABLE=6020]="E_CONTROL_INSTANCE_NO_LONGER_AVAILABLE",Errors[Errors.E_SCHEMA_INVALID=7e3]="E_SCHEMA_INVALID",Errors[Errors.E_SCHEMA_INVALID_PATH=7010]="E_SCHEMA_INVALID_PATH",Errors[Errors.E_SCHEMA_INVALID_REF_ID=7020]="E_SCHEMA_INVALID_REF_ID",Errors[Errors.E_SCHEMA_UNKNOWN_FILE=7030]="E_SCHEMA_UNKNOWN_FILE",Errors[Errors.E_SCHEMA_UNKNOWN_SOURCE=7030]="E_SCHEMA_UNKNOWN_SOURCE",Errors[Errors.E_SCHEMA_UNKNOWN_DEFINITION=7040]="E_SCHEMA_UNKNOWN_DEFINITION",Errors[Errors.E_SCHEMA_NOT_RESOLVED=7050]="E_SCHEMA_NOT_RESOLVED",Errors[Errors.E_PACKAGE=8e3]="E_PACKAGE",Errors[Errors.E_LOCALIZATION_UNKNOWN_KEY=9e3]="E_LOCALIZATION_UNKNOWN_KEY",Errors[Errors.E_INTERACTIVE_WRITE_ABORT=10100]="E_INTERACTIVE_WRITE_ABORT"}(Errors=TcHmi.Errors||(TcHmi.Errors={}))}(TcHmi||(TcHmi={})),function(TcHmi){let IFunction,Trigger;TcHmi.isSolidColor=function(colorObject){return null!=colorObject&&"string"==typeof colorObject.color},TcHmi.isLinearGradientColor=function(colorObject){if(null==colorObject)return!1;let angle=colorObject.angle;return!(!Array.isArray(colorObject.stopPoints)||"number"!=typeof angle&&("string"!=typeof angle||isNaN(parseFloat(angle))))},TcHmi.isBackground=
/**
     * Checks if the parameter is a TcHmi.Background
     * @param obj object to test
     * @preserve (Part of the public API)
     */
function(obj){return null!=obj&&(void 0!==obj.color&&void 0!==obj.image&&void 0!==obj.imageWidth&&void 0!==obj.imageWidthUnit&&void 0!==obj.imageHeight&&void 0!==obj.imageHeightUnit&&void 0!==obj.imageHorizontalAlignment&&void 0!==obj.imageVerticalAlignment&&void 0!==obj.imagePadding)},TcHmi.isTranslate=
/**
     * Checks if the parameter is a TcHmi.checkTransform
     * @param transformObject object to test
     * @preserve (Part of the public API)
     */
function(transformObject){return!!transformObject&&"Translate"===transformObject.transformType},TcHmi.isRotate=
/**
     * Checks if the parameter is a TcHmi.Rotate
     * @param transformObject object to test
     * @preserve (Part of the public API)
     */
function(transformObject){return!!transformObject&&"Rotate"===transformObject.transformType},TcHmi.isScale=
/**
     * Checks if the parameter is a TcHmi.Scale
     * @param transformObject object to test
     * @preserve (Part of the public API)
     */
function(transformObject){return!!transformObject&&"Scale"===transformObject.transformType},TcHmi.isSkew=
/**
     * Checks if the parameter is a TcHmi.Skew
     * @param transformObject object to test
     * @preserve (Part of the public API)
     */
function(transformObject){return!!transformObject&&"Skew"===transformObject.transformType},TcHmi.isOrigin=
/**
     * Checks if the parameter is a TcHmi.Origin
     * @param transformObject object to test
     * @preserve (Part of the public API)
     */
function(transformObject){return!!transformObject&&"Origin"===transformObject.transformType},TcHmi.isPerspective=
/**
     * Checks if the parameter is a TcHmi.Perspective
     * @param transformObject object to test
     * @preserve (Part of the public API)
     */
function(transformObject){return!!transformObject&&"Perspective"===transformObject.transformType},TcHmi.isComparison=function(value){return!!value&&(["==","!=","<",">","<=",">=","contains","contains not","== [ignore case]","!= [ignore case]","contains [ignore case]","contains not [ignore case]"].includes(value.comparator)&&(["string","number","boolean"].includes(typeof value.value)||value.value instanceof Date||null===value.value))},TcHmi.isLogicOperator=function(value){if(!value)return!1;let logic=value.logic;return"AND"===logic||"OR"===logic},function(IFunction){IFunction.isStaticValue=function(value){return!!value&&"StaticValue"===value.objectType},IFunction.isSymbol=function(value){return!!value&&"Symbol"===value.objectType},IFunction.isEventDataObject=function(value){return!!value&&"EventDataObject"===value.objectType},IFunction.isFunctionExpression=function(value){return!!value&&"FunctionExpression"===value.objectType}}(IFunction=TcHmi.IFunction||(TcHmi.IFunction={})),function(Trigger){Trigger.isCondition=function(obj){return"Condition"===obj.objectType},Trigger.isSwitchCase=function(obj){return"SwitchCase"===obj.objectType},Trigger.isControlApiFunction=function(obj){return"ControlApiFunction"===obj.objectType},Trigger.isWriteToSymbol=function(obj){return"WriteToSymbol"===obj.objectType},Trigger.isComment=function(obj){return"Comment"===obj.objectType},Trigger.isFunction=function(obj){return null!==obj&&"Function"===obj.objectType},Trigger.isJavaScript=function(obj){return"JavaScript"===obj.objectType},Trigger.isActionTemplate=function(obj){return"ActionTemplate"===obj.objectType},Trigger.isFunctionExpression=function(obj){return null!==obj&&"FunctionExpression"===obj.objectType},Trigger.isControlAttributeBindingTarget=function(obj){return"ControlAttributeBindingTarget"===obj.objectType}}(Trigger=TcHmi.Trigger||(TcHmi.Trigger={}))}(TcHmi||(TcHmi={})),function(TcHmi){!function(System){let ControlAttributeType,ControlAttributeValueType;!function(ControlAttributeType){ControlAttributeType[ControlAttributeType.Invalid=0]="Invalid",ControlAttributeType[ControlAttributeType.General=1]="General",ControlAttributeType[ControlAttributeType.Control=2]="Control",ControlAttributeType[ControlAttributeType.UserControlParameter=3]="UserControlParameter"}(ControlAttributeType=System.ControlAttributeType||(System.ControlAttributeType={})),function(ControlAttributeValueType){ControlAttributeValueType[ControlAttributeValueType.Invalid=0]="Invalid",ControlAttributeValueType[ControlAttributeValueType.Simple=1]="Simple",ControlAttributeValueType[ControlAttributeValueType.Complex=2]="Complex",ControlAttributeValueType[ControlAttributeValueType.Unknown=3]="Unknown"}(ControlAttributeValueType=System.ControlAttributeValueType||(System.ControlAttributeValueType={}))}(TcHmi.System||(TcHmi.System={}))}(TcHmi||(TcHmi={})),function(TcHmi){!function(System){System.resolveControlHierarchy=function(ctrl,pctrl=null){let childrenHierarchyArr=[];if("function"==typeof ctrl.getChildren){const cc=ctrl.getChildren();for(let i=0,ii=cc.length;i<ii;i++)childrenHierarchyArr.push(TcHmi.System.resolveControlHierarchy(cc[i],ctrl))}return{ctrl:ctrl,children_hierarchy:childrenHierarchyArr,pctrl:pctrl}},System.resolveAttributesFromControlElement=function(elem){const res={error:TcHmi.Errors.NONE,value:{}},targetUserControlId=elem.getAttribute("data-tchmi-target-user-control"),controlType=elem.getAttribute("data-tchmi-type"),cj=targetUserControlId?TcHmi.System.Data.Caches.partialCompositeConfigCache.get(tchmi_path(targetUserControlId.replace(".usercontrol",".usercontrol.json"))):void 0;for(const elemChild of elem.children)if(elemChild.hasAttribute("data-tchmi-target-attribute")&&"application/json"===elemChild.getAttribute("type")){const attrName=elemChild.getAttribute("data-tchmi-target-attribute");let value=null;const innerHTML=elemChild.innerHTML.trim();if(innerHTML)try{value=JSON.parse(innerHTML.replace(/\\\\n/g,"\\\\\\n").replace(/\\\\r/g,"\\\\\\r").replace(/\\\\t/g,"\\\\\\t").replace(/\\n/g,"\\\\n").replace(/\\r/g,"\\\\r").replace(/\\t/g,"\\\\t"))}catch(ex){const e=ex;res.error=TcHmi.Errors.ERROR;let error={code:TcHmi.Errors.E_EXCEPTION,message:TcHmi.Errors[TcHmi.Errors.E_EXCEPTION],reason:'Parsing json of attribute: "'+attrName+'" failed with exception: '+e,domain:"TcHmi.System",exception:e};res.details?(res.details.errors||(res.details.errors=[]),res.details.errors.push(error)):res.details={code:TcHmi.Errors.ERROR,message:TcHmi.Errors[TcHmi.Errors.ERROR],domain:"TcHmi.System",errors:[error]}}let meta={name:attrName,value:value,valueType:System.ControlAttributeValueType.Complex,type:System.ControlAttributeType.General,descr:TcHmi.System.Services.controlManager?.getDescriptionAttributeByName(controlType,attrName)??null};if(null!==meta.descr&&(meta.type=System.ControlAttributeType.Control),cj&&cj.parameters)for(const paramDescription of cj.parameters)paramDescription.name.toLowerCase()===meta.name.toLowerCase()&&(meta.descr=paramDescription,null!==meta.descr&&(meta.type=System.ControlAttributeType.UserControlParameter));res.value[meta.name]=meta}for(const elementAttribute of elem.attributes){let meta={name:elementAttribute.name,value:elementAttribute.value,type:System.ControlAttributeType.Invalid,valueType:System.ControlAttributeValueType.Simple,descr:TcHmi.System.Services.controlManager?.getDescriptionAttributeByName(controlType,elementAttribute.name)??null};if(null!==meta.descr&&(meta.type=System.ControlAttributeType.Control),cj?.parameters)for(const cjParamDescr of cj.parameters)if(cjParamDescr.name===meta.name&&(meta.descr=cjParamDescr,null!==meta.descr)){meta.type=System.ControlAttributeType.UserControlParameter;break}res.value[meta.name]=meta}return res},System.__unload=function(){TcHmi.System.isUnloaded||(TcHmi.System.isUnloaded=!0,TcHmi.EventProvider.raise("System.disableCommunication"))},System.resolveQualifiedName=function(name,namespace){return null!=namespace&&""!==namespace?namespace+"."+name:name},System.parseIdFromHtml=function(markup){let state=2,idStartIdx=0,idEndIdx=0;for(let charIdx=0;charIdx<markup.length;charIdx++){switch(markup[charIdx]){case"i":1===state&&(state=3);break;case"d":3===state?state=4:6===state||7===state||(state=2);break;case"=":4===state&&(state=5);break;case"'":5===state?(state=6,idStartIdx=charIdx+1):6===state&&(idEndIdx=charIdx);break;case'"':5===state?(state=7,idStartIdx=charIdx+1):7===state&&(idEndIdx=charIdx);break;case"<":case">":state=1;break;case" ":case"\t":case"\r":case"\n":4===state||5===state||(state=1);break;default:3===state?state=0:6===state||7===state||(state=2)}if(idEndIdx)break}if(idEndIdx)return markup.slice(idStartIdx,idEndIdx)},System.tchmi_utf8str_base64decode=function(input){try{return decodeURIComponent(Array.prototype.map.call(window.atob(input),(function(c){return"%"+("00"+c.charCodeAt(0).toString(16)).slice(-2)})).join(""))}catch(e){return null}},System.tchmi_utf8str_base64encode=function(input){try{return window.btoa(encodeURIComponent(input).replace(/%([0-9A-F]{2})/g,(function(match,p1){return String.fromCharCode(parseInt("0x"+p1,16))})))}catch(e){return null}},System.compareISO8601ServerCommandDateTimeStrings=function(a,b){if(a.length===b.length)return a<b?-1:a>b?1:0;{let aDate=new Date(a),bDate=new Date(b);if(aDate<bDate)return-1;if(aDate>bDate)return 1;{let aSubSeconds=null,aIndex1=a.indexOf("."),aIndex2=a.indexOf("Z");if(aIndex1>-1&&aIndex2>-1&&(aSubSeconds=a.substring(aIndex1+1,aIndex2)),aSubSeconds&&aSubSeconds.length<6)for(let i=0,ii=6-aSubSeconds.length;i<ii;i++)aSubSeconds+="0";let bSubSeconds=null,bIndex1=b.indexOf("."),bIndex2=b.indexOf("Z");if(bIndex1>-1&&bIndex2>-1&&(bSubSeconds=b.substring(bIndex1+1,bIndex2)),bSubSeconds&&bSubSeconds.length<6)for(let i=0,ii=6-bSubSeconds.length;i<ii;i++)bSubSeconds+="0";return null!==aSubSeconds&&null!==bSubSeconds&&aSubSeconds<bSubSeconds?-1:null!==aSubSeconds&&null!==bSubSeconds&&aSubSeconds>bSubSeconds?1:0}}};const regexISO8601ServerCommandDurationParts=/^P(?=.{2,})(\d+Y|\d+[.,]\d+Y$)?(\d+M|\d+[.,]\d+M$)?(\d+W|\d+[.,]\d+W$)?(\d+D|\d+[.,]\d+D$)?(?:T(\d+H|\d+[.,]\d+H$)?(\d+M|\d+[.,]\d+M$)?(\d+S|\d+[.,]\d+S$)?)?$/;System.compareISO8601ServerCommandDurationStrings=function(a,b){const resA=regexISO8601ServerCommandDurationParts.exec(a),resB=regexISO8601ServerCommandDurationParts.exec(b);if(null===resA)throw new Error("Wrong format for arugment: 'a'.");if(null===resB)throw new Error("Wrong format for arugment: 'b'.");const partsA=resA.slice(1),partsB=resB.slice(1),partsAMapped=partsA.map((value=>value?parseFloat(value.slice(0,-1)):0)),partsBMapped=partsB.map((value=>value?parseFloat(value.slice(0,-1)):0));for(const[index,value]of partsAMapped.entries()){if(value<partsBMapped[index])return-1;if(value>partsBMapped[index])return 1}return 0},System.isParameterTypeInvalid=function(parameter,parameterName,options,domain,callback){const callCallback=reason=>{const errorDetail={code:TcHmi.Errors.E_PARAMETER_INVALID,message:TcHmi.Errors[TcHmi.Errors.E_PARAMETER_INVALID],reason:reason};return domain&&(errorDetail.domain=domain),TcHmi.Callback.callSafeEx(callback,null,{error:errorDetail.code,details:errorDetail}),errorDetail},checkOne=variable=>typeof variable!==options.type?callCallback("Parameter "+parameterName+" has type "+typeof variable+", but must have type "+options.type):"string"===options.type&&"number"==typeof options.minStringLength&&variable.length<options.minStringLength&&callCallback("String parameter "+parameterName+" has length of "+variable.length+", but must have at least "+options.minStringLength);if(void 0!==parameter||"undefinedOk"!==options.required&&"fullOptional"!==options.required){if(null!==parameter||"nullOk"!==options.required&&"fullOptional"!==options.required){if(null==parameter)return callCallback("Required parameter "+parameterName+" must not be "+parameter);if(!0===options.expectArray){if(Array.isArray(parameter)){if("number"==typeof options.minArrayLength&&parameter.length<options.minArrayLength)return callCallback("Array parameter "+parameterName+" has "+parameter.length+" items, but must have at least "+options.minArrayLength);if(options.type){for(let item of parameter){const itemIsInvalid=checkOne(item);if(itemIsInvalid)return itemIsInvalid}return!1}return!1}return callCallback("Parameter "+parameterName+" must be an array")}return!1===options.expectArray&&Array.isArray(parameter)?callCallback("Parameter "+parameterName+" must not be an array"):checkOne(parameter)}return!1}return!1},System.injectInGlobalObject=function(fullName,injectObj){const pathArr=fullName.split(".");if(pathArr.some((path=>!path)))throw new Error("Empty parts for namespace not allowed.");const name=pathArr.pop();let iteratingTargetObject=window;for(const path of pathArr){if(path in iteratingTargetObject||(iteratingTargetObject[path]={}),"object"!=typeof iteratingTargetObject[path]||null===iteratingTargetObject[path])throw new Error(`The requested namespace ${fullName} has conflicts with existing window properties.`);iteratingTargetObject=iteratingTargetObject[path]}if(name in iteratingTargetObject)throw new Error("There is already an object at the requested place "+fullName);iteratingTargetObject[name]=injectObj},System.resolveServerSymbolNameParts=function(symbolName){let baseName,basePathTokens,firstBracketPos=symbolName.indexOf("["),firstColonPos=symbolName.indexOf("::"),splitPos=-1;if(splitPos=-1===firstBracketPos?firstColonPos:-1===firstColonPos||firstBracketPos<firstColonPos?firstBracketPos:firstColonPos,-1!==splitPos){baseName=symbolName.substring(0,splitPos);const basePath=symbolName.substring(splitPos);basePathTokens=TcHmi.ObjectPath.toPathTokens(basePath)}else baseName=symbolName,basePathTokens=null;return{name:baseName,pathTokens:basePathTokens}},System.autoLogoffToMilliseconds=function(autoLogoff){const parts=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/.exec(autoLogoff);if(null===parts)return null;const years=parseInt(parts[2],10)||0,months=parseInt(parts[3],10)||0,weeks=parseInt(parts[4],10)||0,days=parseInt(parts[5],10)||0,hours=parseInt(parts[6],10)||0,minutes=parseInt(parts[7],10)||0;return 1e3*((parseFloat(parts[8])||0)+60*(minutes+60*(hours+24*(days+30*months+7*weeks)+365*years)))},System.resolveSymbolPathToTokenArray=function(path){return TcHmi.ObjectPath.toPathTokens(path)},System.resolveElementStyleDimensions=function(j){let clone=j.clone(),tempDiv=document.createElement("div"),helper=$(tempDiv);helper.css("display","none"),helper.append(clone),TcHmi.System.SharedResources.jqBody.append(helper);const s=window.getComputedStyle(clone[0],null);let res={width:s.width?s.width:"auto",height:s.height?s.height:"auto",top:s.top?s.top:"auto",left:s.left?s.left:"auto",right:s.right?s.right:"auto",bottom:s.bottom?s.bottom:"auto"};return helper.remove(),res},System.toCamelCase=function(text){let res="";if(null==text||""===text)return res;let s=text;for(let i=0,ii=s.length;i<ii;i++){let c=s[i];0!==i?"-"===s[i-1]?res+=c.toUpperCase():"-"!==c&&(res+=c):res+=c.toUpperCase()}return res},System.toDashCase=function(text){let res="";if(null==text||""===text)return res;let s=text;for(let i=0,ii=s.length;i<ii;i++){let c=s[i];"-"!==c&&c.toUpperCase()===c&&i>0?res+="-"+c:res+=c}return res.toLowerCase()}}(TcHmi.System||(TcHmi.System={}))}(TcHmi||(TcHmi={})),function(TcHmi){!function(System){let SharedResources;SharedResources=System.SharedResources||(System.SharedResources={})}(TcHmi.System||(TcHmi.System={}))}(TcHmi||(TcHmi={})),function(TcHmi){!function(System){let Services,Data,Environment;!function(Services){let Engineering;Engineering=Services.Engineering||(Services.Engineering={})}(Services=System.Services||(System.Services={})),function(Data){let Modules,Registrations,Caches;Data.packages=new Map,function(Modules){Modules.controls={map:new Map,array:[],urlMap:new Map},Modules.functions={map:new Map}}(Modules=Data.Modules||(Data.Modules={})),function(Registrations){Registrations.controls={map:new Map,array:[]},Registrations.functions={map:new Map,array:[]},Registrations.uiProvider={providers:{keyboard:new Map,popup:new Map}}}(Registrations=Data.Registrations||(Data.Registrations={})),function(Caches){Caches.templateMarkupCache=new Map,Caches.templateMarkupElementCache=new Map,Caches.partialMarkupCache=new Map,Caches.partialCompositeConfigCache=new Map,Caches.serverSymbolMetaDataCache=new Map,Caches.serverSymbolInteractiveWriteMetaDataCache=new Map}(Caches=Data.Caches||(Data.Caches={})),Data.isKeepAlivePartial=new Map,Data.isLoadSyncContent=new Map,Data.isPreloadBindingPartial=new Map}(Data=System.Data||(System.Data={})),System.config={basePath:"",scaleMode:"None",startupView:"",activeTheme:"Base",themes:{},tcHmiServer:{websocketIntervalTime:500,websocketSystemTimeout:6e4,websocketTimeout:6e4},symbols:{internal:{},themedResources:{}},trigger:[],packages:[],views:[],userFunctions:[],userControls:[],content:[],actionTemplates:[],languages:{},keyboardLayouts:[],creatorSettings:{viewport:{defaultHeight:600,defaultWidth:800}},binding:{symbolError:"Ignore"}},System.nugetPackagesMetadata=TCHMI_NUGET_METADATA,System.hostBaseUri=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""),System.serverSidePathAndQuery=window.location.pathname+window.location.search+window.location.hash,System.hostPrefix="",System.isInitialized=!1,System.isPreloaded=!1,System.isUnloaded=!1,System.destroyGlobalTrigger=null,function(Environment){Environment.dateFractionalSecondDigits=2===new Intl.DateTimeFormat(void 0,{fractionalSecondDigits:2}).resolvedOptions().fractionalSecondDigits}(Environment=System.Environment||(System.Environment={})),System.boundingClientRectNeedsViewPortOffset=null,System.mapControlNamesFromPackageManifestApi0ToApi1=new Map([["tchmi-bar-chart","TcHmi.Controls.Beckhoff.TcHmiBarChart"],["tchmi-button","TcHmi.Controls.Beckhoff.TcHmiButton"],["tchmi-checkbox","TcHmi.Controls.Beckhoff.TcHmiCheckbox"],["tchmi-combobox","TcHmi.Controls.Beckhoff.TcHmiCombobox"],["tchmi-datagrid","TcHmi.Controls.Beckhoff.TcHmiDatagrid"],["tchmi-date-time-picker","TcHmi.Controls.Beckhoff.TcHmiDateTimePicker"],["tchmi-ellipse","TcHmi.Controls.Beckhoff.TcHmiEllipse"],["tchmi-event-grid","TcHmi.Controls.Beckhoff.TcHmiEventGrid"],["tchmi-iframe","TcHmi.Controls.Beckhoff.TcHmiIFrame"],["tchmi-image","TcHmi.Controls.Beckhoff.TcHmiImage"],["tchmi-keyboard","TcHmi.Controls.Beckhoff.TcHmiKeyboard"],["tchmi-line","TcHmi.Controls.Beckhoff.TcHmiLine"],["tchmi-linear-gauge","TcHmi.Controls.Beckhoff.TcHmiLinearGauge"],["tchmi-line-chart","TcHmi.Controls.Beckhoff.TcHmiLineChart"],["tchmi-polygon","TcHmi.Controls.Beckhoff.TcHmiPolygon"],["tchmi-radial-gauge","TcHmi.Controls.Beckhoff.TcHmiRadialGauge"],["tchmi-rectangle","TcHmi.Controls.Beckhoff.TcHmiRectangle"],["tchmi-textblock","TcHmi.Controls.Beckhoff.TcHmiTextblock"],["tchmi-textbox","TcHmi.Controls.Beckhoff.TcHmiTextbox"],["tchmi-timespan-picker","TcHmi.Controls.Beckhoff.TcHmiTimespanPicker"],["tchmi-toggle-button","TcHmi.Controls.Beckhoff.TcHmiToggleButton"],["tchmi-trend-line-chart","TcHmi.Controls.Beckhoff.TcHmiTrendLineChart"],["tchmi-video","TcHmi.Controls.Beckhoff.TcHmiVideo"],["tchmi-container","TcHmi.Controls.System.TcHmiContainer"],["tchmi-container-control","TcHmi.Controls.System.TcHmiContainerControl"],["tchmi-content","TcHmi.Controls.System.TcHmiContent"],["tchmi-control","TcHmi.Controls.System.TcHmiControl"],["tchmi-grid","TcHmi.Controls.System.TcHmiGrid"],["tchmi-html-host","TcHmi.Controls.System.TcHmiHtmlHost"],["tchmi-partial","TcHmi.Controls.System.TcHmiPartial"],["tchmi-region","TcHmi.Controls.System.TcHmiRegion"],["tchmi-user-control","TcHmi.Controls.System.TcHmiUserControl"],["tchmi-user-control-host","TcHmi.Controls.System.TcHmiUserControlHost"]]),System.mapControlNamesFromPackageManifestApi1ToApi0=new Map([["TcHmi.Controls.Beckhoff.TcHmiBarChart","tchmi-bar-chart"],["TcHmi.Controls.Beckhoff.TcHmiButton","tchmi-button"],["TcHmi.Controls.Beckhoff.TcHmiCheckbox","tchmi-checkbox"],["TcHmi.Controls.Beckhoff.TcHmiCombobox","tchmi-combobox"],["TcHmi.Controls.Beckhoff.TcHmiDatagrid","tchmi-datagrid"],["TcHmi.Controls.Beckhoff.TcHmiDateTimePicker","tchmi-date-time-picker"],["TcHmi.Controls.Beckhoff.TcHmiEllipse","tchmi-ellipse"],["TcHmi.Controls.Beckhoff.TcHmiEventGrid","tchmi-event-grid"],["TcHmi.Controls.Beckhoff.TcHmiIFrame","tchmi-iframe"],["TcHmi.Controls.Beckhoff.TcHmiImage","tchmi-image"],["TcHmi.Controls.Beckhoff.TcHmiKeyboard","tchmi-keyboard"],["TcHmi.Controls.Beckhoff.TcHmiLine","tchmi-line"],["TcHmi.Controls.Beckhoff.TcHmiLinearGauge","tchmi-linear-gauge"],["TcHmi.Controls.Beckhoff.TcHmiLineChart","tchmi-line-chart"],["TcHmi.Controls.Beckhoff.TcHmiPolygon","tchmi-polygon"],["TcHmi.Controls.Beckhoff.TcHmiRadialGauge","tchmi-radial-gauge"],["TcHmi.Controls.Beckhoff.TcHmiRectangle","tchmi-rectangle"],["TcHmi.Controls.Beckhoff.TcHmiTextblock","tchmi-textblock"],["TcHmi.Controls.Beckhoff.TcHmiTextbox","tchmi-textbox"],["TcHmi.Controls.Beckhoff.TcHmiTimespanPicker","tchmi-timespan-picker"],["TcHmi.Controls.Beckhoff.TcHmiToggleButton","tchmi-toggle-button"],["TcHmi.Controls.Beckhoff.TcHmiTrendLineChart","tchmi-trend-line-chart"],["TcHmi.Controls.Beckhoff.TcHmiVideo","tchmi-video"],["TcHmi.Controls.System.TcHmiContainer","tchmi-container"],["TcHmi.Controls.System.TcHmiContainerControl","tchmi-container-control"],["TcHmi.Controls.System.TcHmiContent","tchmi-content"],["TcHmi.Controls.System.TcHmiControl","tchmi-control"],["TcHmi.Controls.System.TcHmiGrid","tchmi-grid"],["TcHmi.Controls.System.TcHmiHtmlHost","tchmi-html-host"],["TcHmi.Controls.System.TcHmiPartial","tchmi-partial"],["TcHmi.Controls.System.TcHmiRegion","tchmi-region"],["TcHmi.Controls.System.TcHmiUserControl","tchmi-user-control"],["TcHmi.Controls.System.TcHmiUserControlHost","tchmi-user-control-host"],["TcHmi.Controls.System.TcHmiView","tchmi-view"]])}(TcHmi.System||(TcHmi.System={}))}(TcHmi||(TcHmi={})),function(TcHmi){!function(System){!function(acornSymbolExpressionExtension){let nestingDepth=0,tt=acorn.tokTypes,tc=acorn.tokContexts;tc.symbolExpressionOpenTag=new acorn.TokContext("%tag",!1),tc.symbolExpressionCloseTag=new acorn.TokContext("%/tag",!1),tc.symbolExpressionExpression=new acorn.TokContext("%tag%...%/tag%",!0,!0),tt.symbolExpressionTagName=new acorn.TokenType("symbolExpressionTagName"),tt.symbolExpressionSymbolContent=new acorn.TokenType("symbolExpressionSymbolContent",{beforeExpr:!0}),tt.symbolExpressionOpenTagStart=new acorn.TokenType("symbolExpressionOpenTagStart"),tt.symbolExpressionOpenTagEnd=new acorn.TokenType("symbolExpressionOpenTagEnd"),tt.symbolExpressionCloseTagStart=new acorn.TokenType("symbolExpressionCloseTagStart"),tt.symbolExpressionCloseTagEnd=new acorn.TokenType("symbolExpressionCloseTagEnd"),tt.symbolExpressionOpenTagStart.updateContext=function(){this.context.push(tc.symbolExpressionExpression),this.context.push(tc.symbolExpressionOpenTag),this.exprAllowed=!1},tt.symbolExpressionOpenTagEnd.updateContext=function(prevType){this.context.pop(),this.exprAllowed=!0},tt.symbolExpressionCloseTagStart.updateContext=function(){this.context.pop(),this.context.push(tc.symbolExpressionCloseTag),this.exprAllowed=!1},tt.symbolExpressionCloseTagEnd.updateContext=function(prevType){this.context.pop(),this.exprAllowed=!1};let pp=acorn.Parser.prototype;pp.symbolExpression_readToken=function(){let out="";const chunkStart=this.pos;for(;;){this.pos>=this.input.length&&this.raise(this.start,"Unterminated BEX contents");let ch=this.input.charCodeAt(this.pos);if(37===ch)return this.pos===this.start?this.getTokenFromCode(ch):(out+=this.input.slice(chunkStart,this.pos),this.finishToken(tt.symbolExpressionSymbolContent,out));++this.pos}},pp.symbolExpression_readWord=function(){let ch,start=this.pos;do{ch=this.input.charCodeAt(++this.pos)}while(acorn.isIdentifierChar(ch)||45===ch);return this.finishToken(tt.symbolExpressionTagName,this.input.slice(start,this.pos))},pp.symbolExpression_parseString=function(){const value=this.value;return this.next(),value},pp.symbolExpression_parseOpeningTagName=function(){const tagName=this.symbolExpression_parseString();return this.expect(tt.symbolExpressionOpenTagEnd),tagName},pp.symbolExpression_parseClosingTagName=function(){const tagName=this.symbolExpression_parseString();return this.expect(tt.symbolExpressionCloseTagEnd),tagName},pp.symbolExpression_parseElementAt=function(startPos,startLoc){const node=this.startNodeAt(startPos,startLoc);let symbol="";const openingTagName=this.symbolExpression_parseOpeningTagName();let closingTagName="";contents:for(;;)switch(this.type){case tt.symbolExpressionOpenTagStart:symbol+="%",nestingDepth++,this.next();break;case tt.symbolExpressionOpenTagEnd:nestingDepth>0&&(symbol+="%"),this.next();break;case tt.symbolExpressionCloseTagStart:if(this.next(),0===nestingDepth){if(this.eat(tt.slash)){closingTagName=this.symbolExpression_parseClosingTagName();break contents}}else symbol+="%";break;case tt.symbolExpressionCloseTagEnd:nestingDepth>0&&(nestingDepth--,symbol+="%"),this.next();break;case tt.eof:break contents;default:symbol+=this.symbolExpression_parseString()}return closingTagName!==openingTagName&&this.raise(node.start,"Expected corresponding closing tag for %/"+openingTagName+"%"),node.expression=`%${openingTagName}%${symbol}%/${closingTagName}%`,this.options.plugins.symbolExpression.onSymbolExpression&&this.options.plugins.symbolExpression.onSymbolExpression(node),this.finishNode(node,"SymbolExpression")},pp.symbolExpression_parseElement=function(){let startPos=this.start,startLoc=this.startLoc;return this.next(),this.symbolExpression_parseElementAt(startPos,startLoc)},acorn.plugins.symbolExpression=(instance,options)=>{options&&("object"!=typeof options&&(options={}),Array.isArray(options.onSymbolExpression)&&function(){let symbolExpressions=options.onSymbolExpression;options.onSymbolExpression=expression=>symbolExpressions.push(expression)}(),Array.isArray(options.onCallExpression)&&(()=>{let callExpressions=options.onCallExpression;options.onSymbolExpression=expression=>callExpressions.push(expression)})(),instance.extend("parseExprAtom",(function(inner){return function(refShortHandDefaultPos){return this.type===tt.symbolExpressionSymbolContent?this.parseLiteral(this.value):this.type===tt.symbolExpressionOpenTagStart?this.symbolExpression_parseElement():inner.call(this,refShortHandDefaultPos)}})),instance.extend("readToken",(function(inner){return function(code){let context=this.curContext();if(context===tc.symbolExpressionExpression)return 37===code?(++this.pos,"/"!==this.input.substr(this.lastTokEnd+1,1)?this.finishToken(tt.symbolExpressionOpenTagStart):this.finishToken(tt.symbolExpressionCloseTagStart)):this.symbolExpression_readToken();if(context===tc.symbolExpressionOpenTag||context===tc.symbolExpressionCloseTag){if(acorn.isIdentifierStart(code))return this.symbolExpression_readWord();if(37===code)return++this.pos,context===tc.symbolExpressionCloseTag?this.finishToken(tt.symbolExpressionCloseTagEnd):this.finishToken(tt.symbolExpressionOpenTagEnd)}return 37===code&&this.exprAllowed?(++this.pos,this.finishToken(tt.symbolExpressionOpenTagStart)):inner.call(this,code)}})),instance.extend("updateContext",(function(inner){return function(prevType){return inner.call(this,prevType)}})),instance.extend("finishNode",(function(inner){return function(node,type){return"CallExpression"===type&&this.options.plugins.symbolExpression.onCallExpression&&this.options.plugins.symbolExpression.onCallExpression(node),inner.call(this,node,type)}})))}}(System.acornSymbolExpressionExtension||(System.acornSymbolExpressionExtension={}))}(TcHmi.System||(TcHmi.System={}))}(TcHmi||(TcHmi={})),function(TcHmi){!function(System){!function(Callback){Callback.callSafeCallbacks1Param=function(callbacks,thisArg,data){let callbackList=[];for(let i=0,ii=callbacks.length;i<ii;i++)callbackList.push(callbacks[i]);for(let innerCallback of callbackList)callbacks.includes(innerCallback)&&TcHmi.Callback.callSafeEx(innerCallback,thisArg,data)},Callback.createTask=function(friendlyName){return friendlyName&&"createTask"in console&&"function"==typeof console.createTask?console.createTask(friendlyName):{run:f=>f()}}}(System.Callback||(System.Callback={}))}(TcHmi.System||(TcHmi.System={}))}(TcHmi||(TcHmi={})),function(TcHmi){!function(System){System.InternalSymbolManager=class{constructor(){Object.defineProperty(this,"__entries",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}add(name,item){const entryEx={callbacks:[],...item};if(this.__entries.set(name,entryEx),void 0===entryEx.value){let schema=TcHmi.Type.getSchema(item.type);schema&&(entryEx.value=TcHmi.Type.Schema.resolveDefault(schema))}const fullName=TcHmi.System.hostPrefix+"TcHmi.System.InternalSymbolManager.symbol:"+name;if(entryEx.persist&&!System.Init.__firstLoadAfterPublish){const savedValue=window.localStorage.getItem(fullName);if(null!==savedValue)try{entryEx.value=JSON.parse(savedValue)}catch(e){}}else window.localStorage.removeItem(fullName)}remove(name){this.__entries.delete(name)}update(name,item){let entry=this.__entries.get(name);if(!entry)return;let refresh=!1;tchmi_equal(entry.type,item.type)||(entry.type=item.type,refresh=!0);let value=item.value;if(void 0===value){let schema=TcHmi.Type.getSchema(item.type);schema&&(value=TcHmi.Type.Schema.resolveDefault(schema))}if(tchmi_equal(entry.value,value)||(entry.value=value,refresh=!0),tchmi_equal(entry.persist,item.persist)||(entry.persist=item.persist,refresh=!0,item.persist||window.localStorage.removeItem(TcHmi.System.hostPrefix+"TcHmi.System.InternalSymbolManager.symbol:"+name)),tchmi_equal(entry.readonly,item.readonly)||(entry.readonly=item.readonly,refresh=!0),refresh){let callbackList=Array.from(entry.callbacks);for(let innerCallback of callbackList)entry.callbacks.includes(innerCallback)&&TcHmi.Callback.callSafeEx(innerCallback.callback,this,{error:TcHmi.Errors.NONE,value:entry.value,destroy:innerCallback.destroy})}}write(name,value,dirtyPaths,callback){let entry=this.__entries.get(name);if(entry)if(entry.readonly)TcHmi.Callback.callSafeEx(callback,this,{error:TcHmi.Errors.E_SYMBOL_READONLY,details:{code:TcHmi.Errors.E_SYMBOL_READONLY,message:TcHmi.Errors[TcHmi.Errors.E_SYMBOL_READONLY],reason:"Internal symbol with name="+name+" is readonly.",domain:"TcHmi.System.InternalSymbolManager"}});else if(tchmi_equal(entry.value,value))TcHmi.Callback.callSafeEx(callback,this,{error:TcHmi.Errors.NONE});else{null===dirtyPaths&&(dirtyPaths=void 0);let dirtyPathsNew=null;if(dirtyPaths&&dirtyPaths.length>0?dirtyPathsNew=Array.from(dirtyPaths):entry.value&&value&&"object"==typeof entry.value&&"object"==typeof value&&(dirtyPathsNew=tchmi_compare_object(entry.value,value)),entry.value=value,entry.persist)try{window.localStorage.setItem(TcHmi.System.hostPrefix+"TcHmi.System.InternalSymbolManager.symbol:"+name,JSON.stringify(entry.value))}catch(e){TcHmi.Log.errorEx("[Source=Framework, Module=TcHmi.System.InternalSymbolManager] An uncaught exception occurred:\n",e)}let callbackList=Array.from(entry.callbacks);for(let innerCallback of callbackList)entry.callbacks.includes(innerCallback)&&TcHmi.Callback.callSafeEx(innerCallback.callback,this,dirtyPathsNew&&dirtyPathsNew.length>0?{error:TcHmi.Errors.NONE,value:entry.value,dirtyPaths:dirtyPathsNew,destroy:innerCallback.destroy}:{error:TcHmi.Errors.NONE,value:entry.value,destroy:innerCallback.destroy});TcHmi.Callback.callSafeEx(callback,this,{error:TcHmi.Errors.NONE})}else TcHmi.Callback.callSafeEx(callback,this,{error:TcHmi.Errors.E_SYMBOL_UNKNOWN,details:{code:TcHmi.Errors.E_SYMBOL_UNKNOWN,message:TcHmi.Errors[TcHmi.Errors.E_SYMBOL_UNKNOWN],reason:"Internal symbol with name="+name+" does not exist.",domain:"TcHmi.System.InternalSymbolManager"}})}read(name,callback){let entry=this.__entries.get(name);entry?TcHmi.Callback.callSafeEx(callback,this,{error:TcHmi.Errors.NONE,value:entry.value}):TcHmi.Callback.callSafeEx(callback,this,{error:TcHmi.Errors.E_SYMBOL_UNKNOWN,details:{code:TcHmi.Errors.E_SYMBOL_UNKNOWN,message:TcHmi.Errors[TcHmi.Errors.E_SYMBOL_UNKNOWN],reason:"Internal symbol with name="+name+" does not exist.",domain:"TcHmi.System.InternalSymbolManager"}})}getType(name,callback){let entry=this.__entries.get(name);entry?TcHmi.Callback.callSafeEx(callback,this,{error:TcHmi.Errors.NONE,type:entry.type}):TcHmi.Callback.callSafeEx(callback,this,{error:TcHmi.Errors.E_SYMBOL_UNKNOWN,details:{code:TcHmi.Errors.E_SYMBOL_UNKNOWN,message:TcHmi.Errors[TcHmi.Errors.E_SYMBOL_UNKNOWN],reason:"Internal symbol with name="+name+" does not exist.",domain:"TcHmi.System.InternalSymbolManager"}})}watch(name,callback){let entry=this.__entries.get(name);if(!entry)return TcHmi.Callback.callSafeEx(callback,this,{error:TcHmi.Errors.E_SYMBOL_UNKNOWN,details:{code:TcHmi.Errors.E_SYMBOL_UNKNOWN,message:TcHmi.Errors[TcHmi.Errors.E_SYMBOL_UNKNOWN],reason:"Internal symbol with name="+name+" does not exist.",domain:"TcHmi.System.InternalSymbolManager"}}),function(){};let destroy=function(){if(!entry)return;let index=entry.callbacks.indexOf(co);-1!==index&&(entry.callbacks.splice(index,1),co.callback=null),entry=void 0},co={callback:callback,destroy:destroy};return entry.callbacks.push(co),TcHmi.Callback.callSafeEx(callback,this,{error:TcHmi.Errors.NONE,value:entry.value,destroy:destroy}),destroy}}}(TcHmi.System||(TcHmi.System={}))}(TcHmi||(TcHmi={})),function(TcHmi){!function(System){System.TemplateParamSymbolManager=class{constructor(){Object.defineProperty(this,"__entries",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}add(name,type,value){let prepValue;if(void 0===value){let schema=TcHmi.Type.getSchema(type);schema&&(prepValue=TcHmi.Type.Schema.resolveDefault(schema))}else prepValue=value;let entry={name:name,type:type,value:prepValue,callbacks:[]};this.__entries.set(name,entry)}remove(name){let entry=this.__entries.get(name);entry&&(entry.value instanceof TcHmi.System.Symbol&&entry.value.destroy(),entry.value=null,this.__entries.delete(name))}get(name){return this.__entries.get(name)}destroy(){this.__entries.forEach((entry=>{entry.value instanceof TcHmi.System.Symbol&&entry.value.destroy()})),this.__entries.clear()}keepAlive(name){let entry=this.__entries.get(name);return!!(entry&&entry.callbacks.length>0)}}}(TcHmi.System||(TcHmi.System={}))}(TcHmi||(TcHmi={})),function(TcHmi){!function(Controls){!function(System){System.baseTcHmiControl=
/**
             * Abstract base class for all TwinCAT HMI Controls.
             * Needed for handling controls in Framework APIs.
             * Check out
             * https://infosys.beckhoff.com/content/1031/te2000_tc3_hmi_engineering/3845361931.html?id=3265481440996758836
             * for an API reference.
             * @preserve (Part of the public API)
             */
/**
             * Stops a given speech synthesis call.
             * @param guid guid for the request. Can be fetched from the callback of speechSynthesisStart
             * @param callback The callback will get the state of the speech synthesis
             * @preserve (Part of the public API)