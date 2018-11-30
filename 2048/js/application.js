// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  // new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
  new GameManager(4, AudioInputManager, HTMLActuator, LocalStorageManager);
});