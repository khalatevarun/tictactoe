import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../redux/store/hooks";

type CountdownTimerProps = {
    seconds: number;
    size: number;
    strokeBgColor: string;
    strokeColor: string;
    strokeWidth: number;
  };
  

  
export  const CountdownTimer = (props:CountdownTimerProps) => {


  
 
    const [milliseconds,setMilliseconds] = useState(props.seconds * 1000);
    const [countdown, setCountdown] = useState(milliseconds);
    const [isPlaying, setIsPlaying] = useState(false);
    const [radius,setRadius] =  useState(props.size / 2);
    const [circumference, setCircumferenece] = useState(props.size * Math.PI);
  
      const strokeDashoffset = () =>
        circumference -
        (countdown / milliseconds) * circumference;
    
  
    const startTimer = () => {
      
      setIsPlaying(true)
  
      const interval = setInterval(() => {
        setCountdown(countdown-10);
        if (countdown === 0) {
          clearInterval(interval);
          setCountdown(milliseconds);
          setIsPlaying(false);
        }
      }, 10);
    };
  
   
      const countdownSizeStyles = {
        height: props.size,
        width: props.size,
      } as React.CSSProperties;
  
      const textStyles = {
        color: props.strokeColor,
        fontSize: props.size * 0.3,
      } as React.CSSProperties;
  
      const seconds = (countdown / 1000).toFixed();

      
  
      return (
        <div>
          {/* <div
            style={{
              pointerEvents: this.state.isPlaying ? "none" : "all",
              opacity: this.state.isPlaying ? 0.4 : 1,
            }}
          >
            <button
              style={styles.button}
              onClick={!this.state.isPlaying ? this.startTimer : () => {}}
            >
              START
            </button>
          </div> */}
          <div
            style={Object.assign(
                {},
                styles.countdownContainer,
                countdownSizeStyles
              )}
          >
            <p style={textStyles}>{seconds}s</p>
            <svg style={styles.svg}>
              <circle
                cx={radius}
                cy={radius}
                r={radius}
                fill="none"
                stroke={props.strokeBgColor}
                strokeWidth={props.strokeWidth}
              ></circle>
            </svg>
            <svg style={styles.svg}>
              <circle
                strokeDasharray={circumference}
                strokeDashoffset={
                  isPlaying ? strokeDashoffset() : 0
                }
                r={radius}
                cx={radius}
                cy={radius}
                fill="none"
                strokeLinecap="round"
                stroke={props.strokeColor}
                strokeWidth={props.strokeWidth}
              ></circle>
            </svg>
          </div>
        </div>
      );
    }
  
  
  const styles = {
    countdownContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      margin: "auto",
    },
    svg: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      transform: "rotateY(-180deg) rotateZ(-90deg)",
      overflow: "visible",
    } as React.CSSProperties,
    button: {
      fontSize: 16,
      padding: "15px 40px",
      margin: "10px auto 30px",
      display: "block",
      backgroundColor: "#4d4d4d",
      color: "lightgray",
      border: "none",
      cursor: "pointer",
      outline: 0,
    },
  };
  
 