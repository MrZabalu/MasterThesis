"use strict";var TcHmi;!function(TcHmi){!function(Functions){!function(Beckhoff){Beckhoff.UploadRecipeFiles=function(ctx){if(!ctx)throw new TypeError("Parameter 'ctx' must be defined.");if(!ctx.success||!ctx.error)throw new TypeError("Parameter 'ctx' must be defined properly. Either 'success' or 'error' or both are missing.");if("function"!=typeof ctx.success||"function"!=typeof ctx.error)throw new TypeError("Parameter 'ctx' must be defined properly. Either 'success' or 'error' or both are not of type 'function'.");TcHmi.Server.RecipeManagement.uploadRecipeFiles((data=>data.error?void ctx.error(data.error,{code:data.error,message:TcHmi.Errors[data.error],reason:"Uploading recipe has failed.",domain:"TcHmi.Functions.Beckhoff.UploadRecipeFiles",errors:data.details?[data.details]:void 0}):(TcHmi.Log.info("[Source=Function, Module=TcHmi.Functions.Beckhoff.UploadRecipeFiles] Recipe uploaded successfully."),void ctx.success())))}}(Functions.Beckhoff||(Functions.Beckhoff={}))}(TcHmi.Functions||(TcHmi.Functions={}))}(TcHmi||(TcHmi={})),TcHmi.Functions.registerFunctionEx("UploadRecipeFiles","TcHmi.Functions.Beckhoff",TcHmi.Functions.Beckhoff.UploadRecipeFiles);