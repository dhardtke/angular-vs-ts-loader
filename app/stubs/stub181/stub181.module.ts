import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub181Component} from "./stub181.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub181Component
        }])
    ],
    declarations: [
        Stub181Component
    ]
})
export class Stub181Module {

}
