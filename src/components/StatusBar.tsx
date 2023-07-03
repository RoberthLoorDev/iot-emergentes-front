function StatusBar() {
  return (
    <>
      <h2 className="status-bar-title">Estado del Sistema</h2>
      <div className="bar-background">
        <div className="bar-progress"></div>
      </div>
      <div className="status-system-text">
        <span className="text-status">Deficiente</span>
        <span className="text-status central-option">Óptimo</span>
        <span className="text-status">Sobrecargado</span>
      </div>
    </>
  )
}

export default StatusBar
