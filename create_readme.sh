#!/bin/bash

# Define the parent directory
PARENT_DIR="/Users/sandeepdharnia/ComputerScience/poco"  # Change this to your actual folder path

# Loop through all subdirectories
for folder in "$PARENT_DIR"/*/; do
    # Create a read.me file in each subdirectory
    touch "${folder}README.md"
    echo "read.me file created in $folder"
done

echo "All read.me files have been created."
