import styles from './Calendar.module.scss'

const data = [
  {
    dayOfWeek: 'DOM',
    closed: false,
    openAt: '19h',
    closeAt: '00h'
  },
  {
    dayOfWeek: 'SEG',
    closed: true,
    openAt: '19h',
    closeAt: '00h'
  },
  {
    dayOfWeek: 'TER',
    closed: true,
    openAt: '19h',
    closeAt: '00h'
  },
  {
    dayOfWeek: 'QUA',
    closed: false,
    openAt: '19h',
    closeAt: '00h'
  },
  {
    dayOfWeek: 'QUI',
    closed: false,
    openAt: '19h',
    closeAt: '00h'
  },
  {
    dayOfWeek: 'SEX',
    closed: false,
    openAt: '19h',
    closeAt: '00h'
  },
  {
    dayOfWeek: 'SAB',
    closed: false,
    openAt: '19h',
    closeAt: '00h'
  }
]

export default function Calendar() {
  return (
    <table className={styles.calendar}>
      <tbody>
        <tr>
          {data.map(day => (
            <td key={day}>
              <div className={day.closed ? styles.badgeOff : styles.badgeOn} />
            </td>
          ))}
        </tr>
        <tr>
          {data.map(day => (
            <td key={day}>
              <span>{day.dayOfWeek}</span>
            </td>
          ))}
        </tr>
        <tr>
          {data.map(day => (
            <td key={day}>
              <span>{!day.closed && day.openAt}</span>
            </td>
          ))}
        </tr>
        <tr>
          {data.map(day => (
            <td key={day}>
              <span>{!day.closed && day.closeAt}</span>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}
