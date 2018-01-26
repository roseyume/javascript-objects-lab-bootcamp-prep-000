var recipes = new Object({breakfast:"eggs"})
function updateObjectWithKeyAndValue(object,key,value)
{
  object = Object.assign({},object,{[key]:value})
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value)
{
  object[key]=value
  return object
}

function deleteFromObjectByKey(object,key)
{
  var stuff = Object.assign({},object)
  delete stuff[key]
  object = Object.assign({},stuff)
  return object
}
function destructivelyDeleteFromObjectByKey(object,key)
{
  delete object[key];
  return object
}