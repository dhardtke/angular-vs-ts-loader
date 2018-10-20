import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub177Component} from "./stub177.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub177Component
        }])
    ],
    declarations: [
        Stub177Component
    ]
})
export class Stub177Module {

}
