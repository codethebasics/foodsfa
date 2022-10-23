import styles from './Calendar.module.scss'

export default function Calendar({ horariosFuncionamento }) {
  return (
    <div className={styles.calendarContainer}>
      <table className={styles.calendar}>
        <tbody>
          <tr>
            {horariosFuncionamento?.map(day => (
              <td key={day.dayOfWeek}>
                <div
                  className={day.closed ? styles.badgeOff : styles.badgeOn}
                />
              </td>
            ))}
          </tr>
          <tr>
            {horariosFuncionamento?.map(day => (
              <td key={day.dayOfWeek}>
                <span>{day.dayOfWeek}</span>
              </td>
            ))}
          </tr>
          <tr>
            {horariosFuncionamento?.map(day => (
              <td key={day.dayOfWeek}>
                <span>{!day.closed && day.openAt}</span>
              </td>
            ))}
          </tr>
          <tr>
            {horariosFuncionamento?.map(day => (
              <td key={day.dayOfWeek}>
                <span>{!day.closed && day.closeAt}</span>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
