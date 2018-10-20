import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub409Component} from "./stub409.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub409Component
        }])
    ],
    declarations: [
        Stub409Component
    ]
})
export class Stub409Module {

}
