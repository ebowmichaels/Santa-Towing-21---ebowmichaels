import React from 'react';
import FloatingEditToolbar from '../editable/FloatingEditToolbar';

/**
 * Owner-only Live Site Editor Controller.
 * Never rendered or loaded for public visitors.
 */
export default function EditModeBanner() {
  return <FloatingEditToolbar />;
}
