import React from 'react';
import img from '../../../assest/images/about me.jpg'

const AboutMe = () => {
    return (
        <div className="hero ">
            <div className="hero-content grid grid-cols-2">
                <div>
                    <h1 className="text-5xl font-bold">About Me!</h1>
                    <p className="py-6">I'm Al-Amin, I'm a developer with a passion for teaching. I'm the lead instructor at the London App Brewery, London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer. I've been invited by companies such as Twitter, Facebook and Google to teach their employees.

                        My first foray into programming was when I was just 12 years old, wanting to build my own Space Invader game. Since then, I've made hundred of websites, apps and games. But most importantly, I realised that my greatest passion is teaching.

                        I spend most of my time researching how to make learning to code fun and make hard concepts easy to understand. I apply everything I discover into my bootcamp courses. In my courses, you'll find lots of geeky humour but also lots of explanations and animations to make sure everything is easy to understand.

                        I'll be there for you every step of the way.</p>
                    
                </div>
                <img src={img} alt="" className="max-w-sm ml-36 shadow-2xl rounded-full" />
            </div>
        </div>
    );
};

export default AboutMe;