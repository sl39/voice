import "./style.scss"

export function NoteFromPitch(frequency) {
  var noteNum = 12 * (Math.log(frequency / 440) / Math.log(2))

  return Math.round(noteNum) + 69
}
