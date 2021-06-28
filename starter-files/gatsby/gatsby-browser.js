import React from 'react';
import Layout from './src/components/Layout';


export function wrapPageElement({ element, props }) {
  return <Layout value={{ location: props.location }} {...props}>{element}</Layout>;
}
