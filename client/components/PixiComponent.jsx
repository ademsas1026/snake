import React, { Component } from 'react'
import * as Pixi from 'pixi.js'


export default class PixiComponent extends Component{
  
  constructor() {
    super()
  }
  
  /**
   * After mounting, add the Pixi Renderer to the div and start the Application.
   */
  componentDidMount() {
    this.app = new Pixi.Application(window.innerWidth, window.innerHeight)
    this.gameCanvas.appendChild(this.app.view)
    this.app.start()
  }
  
  /**
   * Stop the Application when unmounting.
   */
  componentWillUnmount() {
    this.app.stop() 
  }
  
  /**
   * Simply render the div that will contain the Pixi Renderer.
   */
  render() {
    const { matrix } = this.props
    console.log('matrix: ', matrix)
    let component = this 
    return (
      <div ref={(thisDiv) => {component.gameCanvas = thisDiv}} />
    ) 
  }
}