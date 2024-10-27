#!/bin/bash

# Check if a component name is provided
if [ -z "$1" ]; then
  echo "Error: Please provide a component name."
  echo "Usage: ./create_component.sh ComponentName"
  exit 1
fi

# Set component name from the first argument
COMPONENT_NAME=$1
COMPONENT_DIR="./src/components/$COMPONENT_NAME"

# Create the component folder if it doesn't exist
if [ -d "$COMPONENT_DIR" ]; then
  echo "Error: $COMPONENT_DIR already exists!"
  exit 1
fi

mkdir -p "$COMPONENT_DIR"

# Create the .js file with basic boilerplate code
cat <<EOL > "$COMPONENT_DIR/$COMPONENT_NAME.js"
import React from 'react';
import styles from './$COMPONENT_NAME.module.css';

function $COMPONENT_NAME() {
  return (
    <div className={styles.$COMPONENT_NAME}>
      <h1>$COMPONENT_NAME Component</h1>
    </div>
  );
}

export default $COMPONENT_NAME;
EOL

# Create the .module.css file with basic styling
cat <<EOL > "$COMPONENT_DIR/$COMPONENT_NAME.module.css"
.container {
  /* Add your component styles here */
}
EOL

# Success message
echo "$COMPONENT_NAME component created successfully at $COMPONENT_DIR"