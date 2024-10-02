# JSON Form to HTML

This is an HTML form component generator built using react, and bundled using vite. 

## Usage
- In the text field, paste or write your json. The standard format is as shown below
```
{
  "fields": [
    {
      "type": "text",
      "name": "firstName",
      "label": "First Name"
    },
    {
      "type": "text",
      "name": "lastName",
      "label": "Last Name"
    },
    {
      "type": "email",
      "name": "email",
      "label": "Email"
    },
    {
      "type": "textarea",
      "name": "message",
      "label": "Message"
    },
    {
      "type": "select",
      "name": "subject",
      "label": "Subject",
      "options": [
        {
          "value": "general",
          "label": "General Inquiry"
        },
        {
          "value": "support",
          "label": "Support"
        },
        {
          "value": "feedback",
          "label": "Feedback"
        }
      ]
    }
  ]
}
```
- Click the "generate" button to view the form component. 
- Click the "copy component" button to copy the generated HTML. By default, it's configured as complete html with tailwind CDN so you can view it, either (https://codepen.io)[online] or locally.

## Demo
link here

## Try it out
Site is currently hosted at [https://sbaskota.com.np/json-form react](https://www.sbaskota.com.np/json-form-react/)
