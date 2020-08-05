longest = s => s.match(/a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*/g).reduce((a, b) => a.length >= b.length ? a : b);
