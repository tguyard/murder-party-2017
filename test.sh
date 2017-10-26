#!/bin/bash

for i in https://tguyard.github.io/assets/fabien.html \
    https://tguyard.github.io/assets/anne.html \
    https://tguyard.github.io/assets/nico.html \
    https://tguyard.github.io/assets/annelise.html \
    https://tguyard.github.io/assets/christophe.html \
    https://tguyard.github.io/assets/sabine.html \
    https://tguyard.github.io/assets/adele.html ; do  

firefox -no-remote -CreateProfile $(basename $i)
firefox -no-remote -P $(basename $i) $i &
done
