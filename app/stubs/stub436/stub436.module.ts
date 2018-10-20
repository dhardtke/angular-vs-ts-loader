import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub436Component} from "./stub436.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub436Component
        }])
    ],
    declarations: [
        Stub436Component
    ]
})
export class Stub436Module {

}
