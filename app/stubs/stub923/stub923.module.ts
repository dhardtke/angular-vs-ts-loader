import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub923Component} from "./stub923.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub923Component
        }])
    ],
    declarations: [
        Stub923Component
    ]
})
export class Stub923Module {

}
