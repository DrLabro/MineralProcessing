import numpy as np
from scipy.optimize import fsolve
import sys


items = sys.argv

solid = int(sys.argv[1])
moist = int(sys.argv[2])
water = int(sys.argv[3])
totalWater = solid + moist + water
moist2 = float(sys.argv[4])
conMoist2 = ( moist2 / 100 ) + 1
oustu = float(sys.argv[5])
uustu = float(sys.argv[6])
    

def f(x):
    return ((solid-x[0])*((100-((100*(solid-x[0])))/(totalWater-conMoist2*x[0]))/(((100*(solid-x[0]))/(totalWater-conMoist2*x[0])))))-oustu*x[1]-((solid-x[0]-x[1])*(uustu)*x[2])

def vf(x):
    return [f(x), f(x), 0]

xx = fsolve(vf, x0=[0,0,1])

print(xx[0])
print(xx[1])